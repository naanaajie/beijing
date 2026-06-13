import { motion } from 'framer-motion'

export default function RingRoads({ ringVis }) {
  return (
    <>
      {/* 2nd Ring - follows Ming city wall footprint */}
      {ringVis['2'] && (
        <motion.g
          id="ring-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <path
            d="M188 158 L428 158 Q445 158 445 175 L445 348 Q445 360 428 360 L188 360 Q172 360 172 348 L172 175 Q172 158 188 158 Z"
            fill="none" stroke="#A09080" strokeWidth={1.8} strokeOpacity={0.55} strokeDasharray="10 5"
          />
          <text x={446} y={165} fontSize={10} fontFamily="var(--font-sans)"
            fill="#907060" fillOpacity={0.8} textAnchor="start" fontWeight={500}>二环</text>
        </motion.g>
      )}

      {/* 3rd Ring */}
      {ringVis['3'] && (
        <motion.g
          id="ring-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <ellipse cx={304} cy={272} rx={200} ry={188}
            fill="none" stroke="#A09080" strokeWidth={1.8} strokeOpacity={0.5} strokeDasharray="10 5"/>
          <text x={506} y={200} fontSize={10} fontFamily="var(--font-sans)"
            fill="#907060" fillOpacity={0.8} textAnchor="start" fontWeight={500}>三环</text>
        </motion.g>
      )}

      {/* 4th Ring */}
      {ringVis['4'] && (
        <motion.g
          id="ring-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <ellipse cx={304} cy={285} rx={288} ry={260}
            fill="none" stroke="#A09080" strokeWidth={1.8} strokeOpacity={0.45} strokeDasharray="10 5"/>
          <text x={594} y={228} fontSize={10} fontFamily="var(--font-sans)"
            fill="#907060" fillOpacity={0.8} textAnchor="start" fontWeight={500}>四环</text>
        </motion.g>
      )}

      {/* 5th Ring - partly outside viewBox */}
      {ringVis['5'] && (
        <motion.g
          id="ring-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <ellipse cx={304} cy={300} rx={390} ry={348}
            fill="none" stroke="#A09080" strokeWidth={1.8} strokeOpacity={0.4} strokeDasharray="10 5"/>
          <text x={620} y={270} fontSize={10} fontFamily="var(--font-sans)"
            fill="#907060" fillOpacity={0.8} textAnchor="start" fontWeight={500}>五环</text>
        </motion.g>
      )}
    </>
  )
}
