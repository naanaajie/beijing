import Map from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import RingRoads from './rings/RingRoads'
import EraLayer from './eras/EraLayer'

const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY

const INITIAL_VIEW = {
  longitude: 116.3912,
  latitude: 39.9060,
  zoom: 10.8,
}

export default function MapSVG({ currentEra, ringVis, onShowInfo }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    }}>

      {/* Layer 1: Real map tile from MapTiler */}
      <Map
        initialViewState={INITIAL_VIEW}
        style={{ width: '100%', height: '100%' }}
        mapStyle={`https://api.maptiler.com/maps/dataviz-light/style.json?key=${MAPTILER_KEY}`}
        interactive={false}
        attributionControl={false}
      />

      {/* Layer 2: Parchment overlay blend */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: '#F5EFE0',
        opacity: 0.18,
        pointerEvents: 'none',
        mixBlendMode: 'multiply',
      }}/>

      {/* Layer 3: SVG city walls + annotations */}
      <svg
        viewBox="0 0 680 580"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX={8} refY={5}
            markerWidth={5} markerHeight={5} orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke"
              strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
          </marker>

          {/* Wall glow effect - subtle soft edge */}
          <filter id="wall-glow" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Water glow effect */}
          <filter id="water-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Yongding River label (always visible, faint) */}
        <path d="M18 520 Q68 500 118 495 Q178 488 228 500 Q278 512 328 505 Q368 500 408 508"
          fill="none" stroke="#3B8BD4" strokeWidth={2.5} strokeOpacity={0.25} strokeLinecap="round"/>
        <text x={60} y={514} fontSize={9} fontFamily="var(--font-sans)"
          fill="#185FA5" fillOpacity={0.5} textAnchor="middle" fontStyle="italic" letterSpacing="0.04em">永定河</text>

        {/* West hills label with mountain icon */}
        <g opacity="0.6">
          {/* Mountain peak icons */}
          <path d="M 18 48 L 25 36 L 32 48 Z"
            fill="#9A8A6A" fillOpacity="0.4" stroke="#8A7A5A" strokeWidth="0.5"/>
          <path d="M 26 48 L 35 32 L 44 48 Z"
            fill="#9A8A6A" fillOpacity="0.3" stroke="#8A7A5A" strokeWidth="0.5"/>
          {/* Label text */}
          <text x={50} y={46}
            fontSize={8} fontFamily="var(--font-sans)"
            fill="#7A6A4A" fontWeight={300} fillOpacity={0.55}>
            西山→
          </text>
        </g>

        {/* Compass - Top Right */}
        <g transform="translate(628,50)" style={{ pointerEvents: 'none' }}>
          <circle cx={0} cy={0} r={16} fill="white" fillOpacity={0.7}
            stroke="var(--text-secondary)" strokeWidth={0.5}/>
          <text fontSize={9} fontFamily="var(--font-sans)"
            fill="var(--text-secondary)" textAnchor="middle" fontWeight={300}>
            <tspan x={0} y={-4}>北</tspan>
            <tspan x={0} y={13}>南</tspan>
            <tspan x={-11} y={4}>西</tspan>
            <tspan x={11} y={4}>东</tspan>
          </text>
        </g>

        {/* Scale bar */}
        <g transform="translate(52,562)">
          <line x1={0} y1={0} x2={70} y2={0} stroke="var(--text-secondary)" strokeWidth={1}/>
          <line x1={0} y1={-3} x2={0} y2={3} stroke="var(--text-secondary)" strokeWidth={1}/>
          <line x1={70} y1={-3} x2={70} y2={3} stroke="var(--text-secondary)" strokeWidth={1}/>
          <text x={35} y={-6} fontSize={8} fontFamily="var(--font-sans)"
            fill="var(--text-secondary)" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>约 5 km</text>
        </g>

        {/* Modern ring roads (conditionally rendered) */}
        <RingRoads ringVis={ringVis} />

        {/* Tiananmen reference dot */}
        <circle cx={304} cy={278} r={3} fill="var(--text-secondary)" fillOpacity={0.5}/>
        <text x={312} y={296} fontSize={8} fontFamily="var(--font-sans)"
          fill="var(--text-secondary)" fillOpacity={0.6} textAnchor="start" fontWeight={300}>天安门</text>

        {/* Era layers with Framer Motion animation */}
        <EraLayer currentEra={currentEra} onShowInfo={onShowInfo} />
      </svg>

      {/* Attribution - required by MapTiler */}
      <div style={{
        position: 'absolute',
        bottom: '4px',
        right: '8px',
        fontSize: '9px',
        color: '#999',
        pointerEvents: 'none',
        background: 'rgba(255,255,255,0.6)',
        padding: '2px 4px',
        borderRadius: '2px',
      }}>
        © MapTiler © OpenStreetMap
      </div>

    </div>
  )
}
