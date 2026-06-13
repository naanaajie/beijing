import { motion } from 'framer-motion'

export default function InfoPanel({ title, body }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        border: `1px solid var(--border)`,
        borderRadius: 'var(--radius-md)',
        padding: '16px',
        background: 'white',
        minHeight: '80px',
        marginBottom: '16px',
        boxShadow: 'var(--shadow)',
      }}
    >
      <motion.p
        key={`title-${title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut', delay: 0.05 }}
        style={{
          fontSize: '15px',
          fontWeight: 600,
          margin: '0 0 8px',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-serif)',
        }}
      >
        {title}
      </motion.p>
      <motion.p
        key={`body-${body}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut', delay: 0.08 }}
        style={{
          fontSize: 'var(--font-size-caption)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {body}
      </motion.p>
    </motion.div>
  )
}
