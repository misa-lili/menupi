/// <reference types="astro/client" />
/// <reference types="astro/client" />

type User = { idx: number; name: string; email: string }

type Menu = {
  idx: number
  version: number
  titles: Title[]
  headers: Header[]
  footers: Footer[]
  groups: Group[]
  userIdx: number
  skinIdx: number
}

type Title = { uuid: string; value: string; src?: string }
type Header = { uuid: string; value: string; src?: string }
type Footer = { uuid: string; value: string; src?: string }

type Group = {
  uuid: string
  value: string
  items: Item[]
  cols?: { uuid: string; value: string; src?: string }[]
  src?: string
}

type Item = {
  uuid: string
  value: string
  prices: { uuid: string; value: string; src?: string }[]
  descriptions?: { uuid: string; value: string; src?: string }[]
  out?: boolean
  src?: string
}
