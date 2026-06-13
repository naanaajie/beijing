const RINGS = [
  { id: '2', label: '二环', color: '#A09080' },
  { id: '3', label: '三环', color: '#A09080' },
  { id: '4', label: '四环', color: '#A09080' },
  { id: '5', label: '五环', color: '#A09080' },
]

export default function RingControls({ ringVis, onToggleRing, onToggleAll }) {
  const anyOn = Object.values(ringVis).some(v => v)

  return (
    <div>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
        color: '#7A6A58', letterSpacing: '0.08em',
        margin: '0 0 10px', textTransform: 'uppercase',
      }}>
        环路
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {RINGS.map(ring => {
          const on = ringVis[ring.id]
          return (
            <div
              key={ring.id}
              onClick={() => onToggleRing(ring.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
            >
              {/* 线条预览 */}
              <svg width={28} height={10} style={{ flexShrink: 0 }}>
                <line
                  x1={0} y1={5} x2={28} y2={5}
                  stroke={on ? ring.color : '#D0C4B8'}
                  strokeWidth={1.5}
                  strokeDasharray="5 3"
                  strokeOpacity={on ? 0.9 : 0.4}
                />
              </svg>
              {/* 标签 */}
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: 12,
                color: on ? '#4A3C30' : '#B0A090',
                textDecoration: on ? 'none' : 'line-through',
                transition: 'color .2s',
              }}>
                {ring.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* 全部显示/隐藏 */}
      <button
        onClick={onToggleAll}
        style={{
          marginTop: 10, fontSize: 11,
          color: '#9A8A78', background: 'none',
          border: 'none', cursor: 'pointer', padding: 0,
          fontFamily: 'var(--font-sans)',
        }}
      >
        {anyOn ? '全部隐藏' : '全部显示'}
      </button>
    </div>
  )
}
