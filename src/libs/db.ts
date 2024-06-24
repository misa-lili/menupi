import { Pool } from "pg"

export const pool = new Pool({
  user: import.meta.env.PGUSE,
  host: import.meta.env.PGHOST,
  database: import.meta.env.PGDB,
  password: import.meta.env.PGPW,
  port: Number(import.meta.env.PGPORT),
})
