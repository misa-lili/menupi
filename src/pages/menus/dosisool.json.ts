import type { APIRoute } from "astro"

export const GET: APIRoute = ({ params, request }) => {
  // const menu: Menu = {
  //   idx: 1,
  //   version: 3,
  //   titles: [{ uuid: "1", value: "도시술3" }],
  //   headers: [
  //     { uuid: "1", value: "#2401" },
  //     { uuid: "2", value: "010-1234-5678" },
  //   ],
  //   footers: [{ uuid: "1", value: "@dosisool" }],
  //   groups: [
  //     {
  //       uuid: "1",
  //       value: "Highland",
  //       items: [{ uuid: "1", value: "Balveni 12" }],
  //     },
  //   ],
  //   skinIdx: 0,
  //   userIdx: 1,
  // }

  // return new Response(JSON.stringify(menu))
  return new Response(JSON.stringify({}))
}
