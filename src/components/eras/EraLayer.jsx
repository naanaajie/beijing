import { AnimatePresence, motion } from 'framer-motion'
import EraLiao from './EraLiao'
import EraJin from './EraJin'
import EraYuan from './EraYuan'
import EraMing from './EraMing'
import EraQing from './EraQing'

const ERA_COMPONENTS = [EraLiao, EraJin, EraYuan, EraMing, EraQing]

const variants = {
  enter: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 1.01,
    transition: {
      duration: 0.25,
      ease: 'easeIn',
    },
  },
}

export default function EraLayer({ currentEra, onShowInfo }) {
  const EraComponent = ERA_COMPONENTS[currentEra]

  return (
    <AnimatePresence mode="wait">
      <motion.g
        key={currentEra}
        variants={variants}
        initial="enter"
        animate="visible"
        exit="exit"
        style={{
          transformBox: 'view-box',
          transformOrigin: 'center',
        }}
      >
        <EraComponent onShowInfo={onShowInfo} />
      </motion.g>
    </AnimatePresence>
  )
}
