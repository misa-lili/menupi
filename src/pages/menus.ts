import type { APIRoute } from "astro"
import { pool } from "../libs/db"
import { z } from "zod"
import { menuJsonSchema } from "../schema.ts"

export const POST: APIRoute = async ({ params, request }) => {
  try {
    // Zod body
    const body = z
      .object({
        name: z.string(),
        email: z.string().optional(),
        password: z.string().optional(),
      })
      .parse(await request.json())

    // ::: Special API
    // Check if name already exists API
    if (body.name && body.email === undefined && body.password === undefined) {
      const exist = await pool
        .query("SELECT * FROM menus_v3 WHERE name = $1", [
          body.name.toLowerCase(),
        ])
        .then((res) => res.rows[0])
      if (exist) {
        return new Response(JSON.stringify({ error: "name already exists" }), {
          status: 400,
        })
      }
      return new Response(null, { status: 200 })
    }

    // Verify body
    if (
      body.name === undefined ||
      body.email === undefined ||
      body.password === undefined
    ) {
      return new Response(
        JSON.stringify({ error: "name, email, password are required" }),
        { status: 400 },
      )
    }

    const hashedPassword = await Bun.password.hash(body.password)

    const newMenu = await pool
      .query(
        "INSERT INTO menus_v3 (name, email, hashed_password) VALUES ($1, $2, $3) RETURNING *",
        [body.name.toLowerCase(), body.email.toLowerCase(), hashedPassword],
      )
      .then((res) => res.rows[0])

    delete newMenu.hashed_password

    return new Response(JSON.stringify({ data: newMenu }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const urlQuery = new URLSearchParams(request.url.split("?")[1])
    const name = (urlQuery.get("name") as string).toLowerCase()

    if (name === undefined) {
      return new Response(JSON.stringify({ error: "name is required" }), {
        status: 400,
      })
    }

    const menu = await pool
      .query("SELECT idx, name, email, json FROM menus_v3 WHERE name = $1", [
        name,
      ])
      .then((res) => res.rows[0])

    console.log(menu)

    return new Response(JSON.stringify(menu))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}

export const PATCH: APIRoute = async ({ params, request }) => {
  try {
    const body = z
      .object({
        name: z.string(),
        password: z.string(),
        newName: z.string().optional(),
        newEmail: z.string().email().optional(),
        newPassword: z.string().optional(),
        newJson: menuJsonSchema.optional(),
      })
      .parse(await request.json())

    // Verify password
    const hashedPassword = await pool
      .query("SELECT hashed_password FROM menus_v3 WHERE name = $1", [
        body.name.toLowerCase(),
      ])
      .then((res) => res.rows[0].hashed_password)

    const verified = await Bun.password.verify(body.password, hashedPassword)

    if (!verified) {
      return new Response(JSON.stringify({ error: "invalid password" }), {
        status: 401,
      })
    }

    // Update
    if (body.newPassword) {
      const hashedNewPassword = await Bun.password.hash(body.newPassword)
      await pool.query(
        "UPDATE menus_v3 SET hashed_password = $1 WHERE name = $2",
        [hashedNewPassword, body.name.toLowerCase()],
      )
    }

    if (body.newEmail) {
      await pool.query("UPDATE menus_v3 SET email = $1 WHERE name = $2", [
        body.newEmail.toLowerCase(),
        body.name.toLowerCase(),
      ])
    }

    if (body.newName) {
      await pool.query("UPDATE menus_v3 SET name = $1 WHERE name = $2", [
        body.newName.toLowerCase(),
        body.name.toLowerCase(),
      ])
    }

    if (body.newJson) {
      await pool.query("UPDATE menus_v3 SET json = $1 WHERE name = $2", [
        body.newJson,
        body.name.toLowerCase(),
      ])
    }

    return new Response(null, { status: 200 })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}
