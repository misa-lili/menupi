import type { APIRoute } from "astro"

export const GET: APIRoute = ({ params, request }) => {
  const menu: Menu = {
    idx: 1,
    name: "Vinos",
    email: "hakgeumkim@gmail.com",
    version: 3,
    titles: [
      { uuid: "1", value: "Vinos" },
      { uuid: "2", value: "🍷" },
    ],
    headers: [{ uuid: "1", value: "@bar_vinos" }],
    footers: [
      { uuid: "1", value: "메뉴는 실시간 재고를 반영하여 업데이트 됩니다" },
    ],
    groups: [
      {
        uuid: "1",
        value: "ESPUMOSOS",
        cols: [
          { uuid: "1", value: "🍸" },
          { uuid: "2", value: "🍾" },
        ],
        items: [
          {
            uuid: "1",
            value: "JAQUELINE BRUT ROSÉ N/V",
            prices: [
              { uuid: "1", value: "$ 80.00" },
              { uuid: "2", value: "$ 400.00" },
            ],
            descriptions: [{ uuid: "1", value: "[Francia, Cognac]" }],
          },
        ],
      },
      {
        uuid: "1",
        value: "BLANCOS",
        cols: [],
        items: [
          {
            uuid: "1",
            value: "CASA MADERO 2V",
            prices: [
              { uuid: "1", value: "$ 80.00" },
              { uuid: "2", value: "$ 400.00" },
            ],
            descriptions: [
              {
                uuid: "1",
                value: "[Parras, México] Chardonnay, Chenin Blanc 2011",
              },
            ],
          },
          {
            uuid: "1",
            value: "ABADAL",
            prices: [
              { uuid: "1", value: "$ 100.00" },
              { uuid: "2", value: "$ 500.00" },
            ],
            descriptions: [
              {
                uuid: "1",
                value: "[Pla de Bages, Españal Picapoll 2010",
              },
            ],
          },
        ],
      },
    ],
    skinIdx: 1,
  }

  return new Response(JSON.stringify(menu))
}
