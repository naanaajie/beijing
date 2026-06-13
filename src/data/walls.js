// src/data/walls.js
// GeoJSON format: [longitude, latitude]
// Reference point: Tiananmen [116.3912, 39.9042]

export const ERA_WALLS = [

  // Era 0: Liao Nanjing 938–1125
  {
    name: '辽南京',
    color: '#C4862A',

    main: {
      type: 'Feature',
      properties: { name: '辽南京城墙', era: 0, approximate: true },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.315, 39.900],
          [116.375, 39.900],
          [116.375, 39.858],
          [116.315, 39.858],
          [116.315, 39.900],
        ]],
      },
    },

    origin: {
      type: 'Feature',
      properties: { name: '莫州（辽南京前身）', era: 0, type: 'origin' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.322, 39.896],
          [116.368, 39.896],
          [116.368, 39.862],
          [116.322, 39.862],
          [116.322, 39.896],
        ]],
      },
    },

    imperial: {
      type: 'Feature',
      properties: { name: '辽皇城', era: 0, approximate: true },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.330, 39.886],
          [116.358, 39.886],
          [116.358, 39.866],
          [116.330, 39.866],
          [116.330, 39.886],
        ]],
      },
    },
  },

  // Era 1: Jin Zhongdu 1153–1215
  {
    name: '金中都',
    color: '#8B3A52',

    main: {
      type: 'Feature',
      properties: { name: '金中都城墙', era: 1, approximate: true },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.291, 39.905],
          [116.393, 39.905],
          [116.393, 39.846],
          [116.376, 39.846],
          [116.343, 39.846],
          [116.310, 39.846],
          [116.291, 39.846],
          [116.291, 39.868],
          [116.291, 39.888],
          [116.291, 39.905],
        ]],
      },
    },

    imperial: {
      type: 'Feature',
      properties: { name: '金皇城', era: 1, approximate: true },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.323, 39.888],
          [116.362, 39.888],
          [116.362, 39.862],
          [116.323, 39.862],
          [116.323, 39.888],
        ]],
      },
    },
  },

  // Era 2: Yuan Dadu 1267–1368
  {
    name: '元大都',
    color: '#4A4580',

    main: {
      type: 'Feature',
      properties: { name: '元大都城墙', era: 2, approximate: false },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.340, 39.964],
          [116.357, 39.964],
          [116.407, 39.964],
          [116.424, 39.964],
          [116.424, 39.950],
          [116.424, 39.933],
          [116.424, 39.918],
          [116.424, 39.897],
          [116.393, 39.894],
          [116.368, 39.894],
          [116.350, 39.894],
          [116.340, 39.894],
          [116.340, 39.910],
          [116.340, 39.921],
          [116.340, 39.940],
          [116.340, 39.952],
          [116.340, 39.964],
        ]],
      },
    },

    imperial: {
      type: 'Feature',
      properties: { name: '元皇城', era: 2, approximate: true },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.358, 39.933],
          [116.410, 39.933],
          [116.410, 39.903],
          [116.358, 39.903],
          [116.358, 39.933],
        ]],
      },
    },
  },

  // Era 3: Ming Beijing 1421–1644
  {
    name: '明北京',
    color: '#3A6B35',

    main: {
      type: 'Feature',
      properties: { name: '明北京内城', era: 3 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.340, 39.943],
          [116.358, 39.943],
          [116.393, 39.943],
          [116.437, 39.943],
          [116.437, 39.932],
          [116.435, 39.921],
          [116.437, 39.900],
          [116.416, 39.900],
          [116.391, 39.899],
          [116.367, 39.900],
          [116.340, 39.900],
          [116.340, 39.921],
          [116.340, 39.940],
          [116.340, 39.943],
        ]],
      },
    },

    outer: {
      type: 'Feature',
      properties: { name: '明外城（嘉靖增筑）', era: 3 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.340, 39.900],
          [116.437, 39.900],
          [116.437, 39.868],
          [116.424, 39.868],
          [116.391, 39.874],
          [116.358, 39.868],
          [116.340, 39.868],
          [116.340, 39.900],
        ]],
      },
    },

    imperial: {
      type: 'Feature',
      properties: { name: '明皇城', era: 3 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.362, 39.931],
          [116.403, 39.931],
          [116.403, 39.903],
          [116.362, 39.903],
          [116.362, 39.931],
        ]],
      },
    },

    palace: {
      type: 'Feature',
      properties: { name: '紫禁城', era: 3 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.3862, 39.9275],
          [116.3966, 39.9275],
          [116.3966, 39.9183],
          [116.3862, 39.9183],
          [116.3862, 39.9275],
        ]],
      },
    },
  },

  // Era 4: Qing Beijing 1644–1912
  {
    name: '清北京',
    color: '#2C6E6A',

    main: {
      type: 'Feature',
      properties: { name: '清北京城墙', era: 4 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.340, 39.943],
          [116.358, 39.943],
          [116.393, 39.943],
          [116.437, 39.943],
          [116.437, 39.932],
          [116.435, 39.921],
          [116.437, 39.900],
          [116.416, 39.900],
          [116.391, 39.899],
          [116.367, 39.900],
          [116.340, 39.900],
          [116.340, 39.921],
          [116.340, 39.940],
          [116.340, 39.943],
        ]],
      },
    },

    outer: {
      type: 'Feature',
      properties: { name: '清外城', era: 4 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.340, 39.900],
          [116.437, 39.900],
          [116.437, 39.868],
          [116.424, 39.868],
          [116.391, 39.874],
          [116.358, 39.868],
          [116.340, 39.868],
          [116.340, 39.900],
        ]],
      },
    },

    imperial: {
      type: 'Feature',
      properties: { name: '清皇城', era: 4 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.362, 39.931],
          [116.403, 39.931],
          [116.403, 39.903],
          [116.362, 39.903],
          [116.362, 39.931],
        ]],
      },
    },

    palace: {
      type: 'Feature',
      properties: { name: '紫禁城', era: 4 },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [116.3862, 39.9275],
          [116.3966, 39.9275],
          [116.3966, 39.9183],
          [116.3862, 39.9183],
          [116.3862, 39.9275],
        ]],
      },
    },
  },
]
