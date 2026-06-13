/**
 * GhostWalls — 朝代演进的幽灵轮廓
 * 根据当前朝代，渲染前 1-2 个朝代的淡色轮廓
 */

const WALL_DATA = [
  {
    name: '辽',
    color: '#C4862A',
    rect: { x: 118, y: 298, w: 196, h: 166 },
  },
  {
    name: '金',
    color: '#8B3A52',
    rect: { x: 88, y: 258, w: 276, h: 216 },
  },
  {
    name: '元',
    color: '#4A4580',
    rect: { x: 148, y: 88, w: 336, h: 356 },
  },
  {
    name: '明',
    color: '#3A6B35',
    rect: { x: 174, y: 160, w: 254, h: 196 },
  },
  {
    name: '清',
    color: '#2C6E6A',
    rect: { x: 174, y: 160, w: 254, h: 196 },
  },
]

export default function GhostWalls({ eraIndex }) {
  // 辽代是第一个朝代，没有幽灵
  if (eraIndex === 0) return null

  const ghosts = []

  // 上上个朝代，淡且虚线
  if (eraIndex >= 1 && WALL_DATA[eraIndex - 1]) {
    ghosts.push({
      wall: WALL_DATA[eraIndex - 1],
      strokeOpacity: 0.2,
      fillOpacity: 0.03,
      dasharray: '5 4',
    })
  }

  // 上上个朝代，更淡，仅看轮廓线
  if (eraIndex >= 2 && WALL_DATA[eraIndex - 2]) {
    ghosts.push({
      wall: WALL_DATA[eraIndex - 2],
      strokeOpacity: 0.1,
      fillOpacity: 0.015,
      dasharray: '3 5',
    })
  }

  return (
    <>
      {ghosts.map(({ wall, strokeOpacity, fillOpacity, dasharray }, i) => (
        <g key={i}>
          {/* 朝代轮廓 */}
          <rect
            x={wall.rect.x}
            y={wall.rect.y}
            width={wall.rect.w}
            height={wall.rect.h}
            rx={4}
            fill={wall.color}
            fillOpacity={fillOpacity}
            stroke={wall.color}
            strokeWidth={1.2}
            strokeOpacity={strokeOpacity}
            strokeDasharray={dasharray}
          />
          {/* 朝代标签 */}
          <text
            x={wall.rect.x + wall.rect.w / 2}
            y={wall.rect.y - 7}
            fontSize={8}
            fontFamily="var(--font-sans)"
            fill={wall.color}
            fillOpacity={Math.min(strokeOpacity * 1.8, 0.45)}
            textAnchor="middle"
            letterSpacing="0.05em"
          >
            {wall.name}朝城墙
          </text>
        </g>
      ))}
    </>
  )
}
