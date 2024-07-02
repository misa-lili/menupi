import { z } from "zod"

export const menuJsonSchema = z.object({
  version: z.number(),
  titles: z.array(
    z.object({
      uuid: z.string().optional(),
      value: z.string(),
      src: z.string().optional(),
    }),
  ),
  headers: z.array(
    z.object({
      uuid: z.string().optional(),
      value: z.string(),
      src: z.string().optional(),
    }),
  ),
  footers: z.array(
    z.object({
      uuid: z.string().optional(),
      value: z.string(),
      src: z.string().optional(),
    }),
  ),
  groups: z.array(
    z.object({
      uuid: z.string().optional(),
      value: z.string(),
      items: z.array(
        z.object({
          uuid: z.string().optional(),
          value: z.string(),
          prices: z.array(
            z.object({
              uuid: z.string().optional(),
              value: z.string(),
              src: z.string().optional(),
            }),
          ),
          descriptions: z.array(
            z.object({
              uuid: z.string().optional(),
              value: z.string(),
              src: z.string().optional(),
            }),
          ),
          out: z.boolean().optional(),
          src: z.string().optional(),
        }),
      ),
      columns: z.array(
        z.object({
          uuid: z.string().optional(),
          value: z.string(),
          src: z.string().optional(),
        }),
      ),
      src: z.string().optional(),
    }),
  ),
  skinIdx: z.number(),
})

export type MenuJsonSchema = z.infer<typeof menuJsonSchema>
