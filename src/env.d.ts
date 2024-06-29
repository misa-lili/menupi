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
  cols: Column[]
  src?: string
}

type Column = {
  uuid?: string
  value: string
  src?: string
}

type Item = {
  uuid?: string
  value: string
  prices: Price[]
  descriptions: Description[]
  out?: boolean
  src?: string
}

type Price = { uuid?: string; value: string; src?: string }
type Description = { uuid?: string; value: string; src?: string }
