/// <reference types="astro/client" />
/// <reference types="astro/client" />

type Menu = {
  idx: number
  name: string
  email?: string
  password?: string
  json: MenuJson
}

type MenuJson = {
  version: number
  titles: Title[]
  headers: Header[]
  groups: Group[]
  footers: Footer[]
  skinIdx: number
}

type Title = { uuid?: string; value: string; src?: string }
type Header = { uuid?: string; value: string; src?: string }
type Footer = { uuid?: string; value: string; src?: string }

type Group = {
  uuid?: string
  value: string
  items: Item[]
  cols?: { uuid?: string; value: string; src?: string }[]
  src?: string
}

type Item = {
  uuid?: string
  value: string
  prices: { uuid?: string; value: string; src?: string }[]
  descriptions?: { uuid?: string; value: string; src?: string }[]
  out?: boolean
  src?: string
}
