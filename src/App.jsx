import { useState, useRef, useEffect } from 'react'
import Timeline from './components/Timeline'
import Sidebar from './components/Sidebar'
import MapSVG from './components/MapSVG'
import { ERA_META } from './data/eras'

const DEFAULT_INFO = {
  title: '← 点击地图标记查看详情',
  body: '选择上方朝代，点击彩色标记查看历史说明。右侧信息框显示该朝代城墙与现代环路的对照关系。',
}

export default function App() {
  const [currentEra, setCurrentEra] = useState(3) // 默认明代
  const [ringVis, setRingVis] = useState({ '2': true, '3': true, '4': true, '5': true })
  const [info, setInfo] = useState(DEFAULT_INFO)
  const mapContainerRef = useRef(null)
  const [layerVis] = useState({ wall: true, river: true, landmark: true })

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentEra(prev => Math.max(0, prev - 1))
        setInfo(DEFAULT_INFO)
      }
      if (e.key === 'ArrowRight') {
        setCurrentEra(prev => Math.min(4, prev + 1))
        setInfo(DEFAULT_INFO)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const handleSetEra = (idx) => {
    setCurrentEra(idx)
    setInfo(DEFAULT_INFO)
  }

  const handleToggleRing = (r) => {
    setRingVis(prev => ({ ...prev, [r]: !prev[r] }))
  }

  const handleToggleAll = () => {
    const anyOn = Object.values(ringVis).some(v => v)
    setRingVis({ '2': !anyOn, '3': !anyOn, '4': !anyOn, '5': !anyOn })
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      fontFamily: 'var(--font-sans)',
      background: '#FAF6EF',
    }}>
      <h2 style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        北平历史地理：五朝城墙 + 现代环路对照图
      </h2>

      {/* Top: Timeline */}
      <Timeline currentEra={currentEra} onSetEra={handleSetEra} />

      {/* Main: Flex container for map + sidebar */}
      <div style={{
        display: 'flex',
        flex: 1,
        minHeight: 0,
        gap: 0,
        overflow: 'hidden',
        alignItems: 'stretch',
      }}>
        {/* Left: Map area */}
        <div
          ref={mapContainerRef}
          style={{
            flex: 1,
            minWidth: 0,
            position: 'relative',
            background: '#F5F0E8',
            borderRight: `1px solid var(--border)`,
            margin: 0,
            padding: 0,
            borderRadius: '0',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MapSVG
            currentEra={currentEra}
            ringVis={ringVis}
            onShowInfo={(title, body) => setInfo({ title, body })}
          />

          {/* North Compass - Top Right */}
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            fontSize: '24px',
            color: 'var(--text-secondary)',
            opacity: 0.6,
          }}>
            ↑
          </div>

        </div>

        {/* Right: Sidebar */}
        <Sidebar
          currentEra={currentEra}
          ringVis={ringVis}
          onToggleRing={handleToggleRing}
          onToggleAll={handleToggleAll}
          info={info}
          layerVis={layerVis}
        />
      </div>
    </div>
  )
}
