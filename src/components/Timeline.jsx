import { motion } from 'framer-motion'
import { ERA_META } from '../data/eras'

const ERA_COLORS = ['#C4862A', '#8B3A52', '#4A4580', '#3A6B35', '#2C6E6A']
const ERA_BORDER = ['#A06820', '#6B2A3E', '#3A3570', '#2A5125', '#1C5E5A']

export default function Timeline({ currentEra, onSetEra }) {
  // 计算时间段持续时长
  const durations = ERA_META.map(e => e.end - e.start)
  const total = durations.reduce((a, b) => a + b, 0)

  return (
    <div style={{
      display: 'flex',
      margin: '0 0 16px',
      background: '#F5F0E8',
      border: '1px solid var(--border)',
      borderRadius: '0',
      overflow: 'hidden',
      height: '72px',
    }}>
      {ERA_META.map((era, i) => {
        const widthPct = (durations[i] / total * 100).toFixed(1) + '%'
        const isActive = currentEra === i
        const color = ERA_COLORS[i]

        return (
          <motion.button
            key={i}
            onClick={() => onSetEra(i)}
            whileHover={{ backgroundColor: !isActive ? 'rgba(196, 134, 42, 0.08)' : undefined }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: widthPct,
              padding: '12px 8px 10px',
              border: 'none',
              borderRight: i < ERA_META.length - 1 ? `1px solid var(--border)` : 'none',
              borderBottom: isActive ? `3px solid ${color}` : '3px solid transparent',
              background: isActive ? '#FDF8F2' : '#F5F0E8',
              cursor: 'pointer',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s',
            }}
          >
            <motion.span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '13px',
                fontWeight: isActive ? 700 : 400,
                color: isActive ? color : '#8A7A6A',
              }}
              animate={{ opacity: isActive ? 1 : 0.8 }}
              transition={{ duration: 0.25 }}
            >
              {era.name}
            </motion.span>
            <motion.span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '9px',
                letterSpacing: '0.1em',
                color: isActive ? ERA_BORDER[i] : '#ADA090',
                marginTop: '3px',
                fontWeight: 300,
              }}
              animate={{ opacity: isActive ? 1 : 0.8 }}
              transition={{ duration: 0.25 }}
            >
              {era.years}
            </motion.span>
          </motion.button>
        )
      })}
    </div>
  )
}
