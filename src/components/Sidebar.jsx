import { motion, AnimatePresence } from 'framer-motion'
import { ERA_META, ERA_DESCS, ERA_HOOKS, ERA_RING_NOTES } from '../data/eras'

const ERA_COLORS = ['#C4862A', '#8B3A52', '#4A4580', '#3A6B35', '#2C6E6A']
const ERA_BORDER = ['#A06820', '#6B2A3E', '#3A3570', '#2A5125', '#1C5E5A']

const RING_ITEMS = [
  { id: '2', label: '二环' },
  { id: '3', label: '三环' },
  { id: '4', label: '四环' },
  { id: '5', label: '五环' },
]

export default function Sidebar({ currentEra, ringVis, onToggleRing, onToggleAll, info, layerVis }) {
  const era = ERA_META[currentEra]
  const color = ERA_COLORS[currentEra]
  const borderColor = ERA_BORDER[currentEra]
  const description = ERA_DESCS[currentEra]
  const hook = ERA_HOOKS[currentEra]
  const ringNotes = ERA_RING_NOTES[currentEra]
  const anyRingOn = Object.values(ringVis).some(v => v)

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        width: '320px',
        background: 'var(--panel-bg)',
        backdropFilter: 'blur(20px)',
        borderLeft: `1px solid var(--border)`,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow)',
        margin: 0,
        padding: '20px 0',
      }}
    >
      {/* Ring controls section */}
      <div style={{ paddingLeft: '20px', paddingRight: '20px', marginBottom: '16px' }}>
        <div style={{
          fontSize: '11px',
          fontWeight: 500,
          color: '#7A6A58',
          letterSpacing: '0.08em',
          marginBottom: '8px',
          textTransform: 'uppercase',
        }}>
          图层
        </div>

        {/* Ring controls - horizontal line preview style */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {RING_ITEMS.map(ring => {
            const on = ringVis[ring.id]
            return (
              <div
                key={ring.id}
                onClick={() => onToggleRing(ring.id)}
                style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}
              >
                {/* Line preview */}
                <svg width={20} height={8} style={{ flexShrink: 0 }}>
                  <line
                    x1={0} y1={4} x2={20} y2={4}
                    stroke={on ? color : '#D0C4B8'}
                    strokeWidth={1.5}
                    strokeDasharray="4 2"
                    strokeOpacity={on ? 0.9 : 0.4}
                  />
                </svg>
                {/* Label */}
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: 11,
                  color: on ? '#4A3C30' : '#B0A090',
                  textDecoration: on ? 'none' : 'line-through',
                  transition: 'color .2s',
                  whiteSpace: 'nowrap',
                }}>
                  {ring.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* Toggle All */}
        <button
          onClick={onToggleAll}
          style={{
            fontSize: 11,
            color: '#9A8A78', background: 'none',
            border: 'none', cursor: 'pointer', padding: 0,
            fontFamily: 'var(--font-sans)',
          }}
        >
          {anyRingOn ? '全部隐藏' : '全部显示'}
        </button>
      </div>

      {/* Divider */}
      <hr style={{
        border: 'none',
        borderTop: '1px solid var(--border)',
        margin: '0',
        height: '1px',
      }} />

      {/* Era info section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`era-${currentEra}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{ padding: '16px 20px' }}
        >
          {/* Era title and years */}
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            fontWeight: 700,
            color: color,
            margin: '0 0 4px',
          }}>
            {era.name}
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: '#ADA090',
            margin: '0 0 12px',
            fontWeight: 300,
          }}>
            {era.years}
          </p>

          {/* Hook quote */}
          <blockquote style={{
            margin: '0 0 12px',
            paddingLeft: '12px',
            borderLeft: `2px solid ${color}`,
            fontFamily: 'var(--font-serif)',
            fontSize: '14px',
            fontStyle: 'italic',
            color: '#4A3C30',
            lineHeight: 1.6,
          }}>
            {hook}
          </blockquote>

          {/* Full description */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            lineHeight: 1.7,
            color: '#5C5040',
            margin: '0 0 12px',
          }}>
            {description}
          </p>

          {/* Ring notes */}
          <div style={{
            background: '#F0EBE2',
            borderRadius: '0',
            padding: '12px 14px',
          }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              color: '#7A6A58',
              letterSpacing: '0.08em',
              margin: '0 0 8px',
              textTransform: 'uppercase',
            }}>
              与现代环路对照
            </p>
            {ringNotes.map((note, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                <span style={{ color: color, fontSize: '10px', marginTop: '2px', flexShrink: 0, fontWeight: 600 }}>•</span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  color: '#5C5040',
                  lineHeight: 1.5,
                }}>
                  {note}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Divider */}
      <hr style={{
        border: 'none',
        borderTop: '1px solid var(--border)',
        margin: '0',
        height: '1px',
      }} />

      {/* Click info section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`click-${info.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{ padding: '16px 20px', flex: 1 }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 500,
            color: '#7A6A58',
            letterSpacing: '0.08em',
            margin: '0 0 8px',
            textTransform: 'uppercase',
          }}>
            关键地点
          </p>

          {info.title === '← 点击地图标记查看详情' ? (
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              color: '#ADA090',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.6,
            }}>
              点击地图上的彩色标记查看详情
            </p>
          ) : (
            <>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '14px',
                fontWeight: 600,
                color: color,
                margin: '0 0 6px',
              }}>
                {info.title}
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: '#5C5040',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {info.body}
              </p>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
