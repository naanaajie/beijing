import RingRoads from './rings/RingRoads'
import EraLayer from './eras/EraLayer'

export default function MapSVG({ currentEra, ringVis, onShowInfo }) {
  return (
    <svg
      viewBox="0 0 720 580"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}
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
          <filter id="water-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Terrain gradient - simulates elevation from west mountains to eastern plain */}
          <linearGradient id="terrain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#D4C4A8" stopOpacity="0.55"/>
            <stop offset="45%"  stopColor="#F5F0E8" stopOpacity="0"/>
            <stop offset="100%" stopColor="#EEE8DC" stopOpacity="0.15"/>
          </linearGradient>

          {/* Mountain glow - radial from northwest, fading toward center */}
          <radialGradient id="mountain-glow" cx="0%" cy="0%" r="55%" fx="0%" fy="0%">
            <stop offset="0%"   stopColor="#B8A882" stopOpacity="0.35"/>
            <stop offset="40%"  stopColor="#C8B896" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#F5F0E8" stopOpacity="0"/>
          </radialGradient>

          {/* Plain glow - subtle brightness in southeast */}
          <radialGradient id="plain-glow" cx="100%" cy="100%" r="50%">
            <stop offset="0%"   stopColor="#E8E0C8" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#F5F0E8" stopOpacity="0"/>
          </radialGradient>

          {/* Mountain contour clipping to prevent overflow into southeast */}
          <clipPath id="mountain-clip">
            <rect x="0" y="0" width="260" height="280"/>
          </clipPath>
        </defs>

        {/* Background - Parchment */}
        <rect width={720} height={580} fill="#F5F0E8"/>

        {/* Terrain gradient - elevation simulation */}
        <rect width={680} height={580} fill="url(#terrain-gradient)"/>

        {/* Plain glow - subtle southeastern brightness */}
        <rect width={680} height={580} fill="url(#plain-glow)"/>

        {/* ==================== */}
        {/* Western mountains terrain layer */}
        {/* ==================== */}

        {/* Mountain glow radiance */}
        <rect width={680} height={580} fill="url(#mountain-glow)"/>

        {/* Contour lines representing mountain ridges - northwest quadrant */}
        <g clipPath="url(#mountain-clip)" opacity="1">
          {/* Primary ridge - innermost, sharpest */}
          <ellipse
            cx={-40} cy={-30} rx={95} ry={72}
            fill="none"
            stroke="#9A8A6A" strokeWidth={0.8} strokeOpacity={0.22}
          />

          {/* Secondary ridge */}
          <ellipse
            cx={-40} cy={-30} rx={148} ry={115}
            fill="none"
            stroke="#9A8A6A" strokeWidth={0.7} strokeOpacity={0.17}
          />

          {/* Tertiary ridge */}
          <ellipse
            cx={-40} cy={-30} rx={210} ry={165}
            fill="none"
            stroke="#9A8A6A" strokeWidth={0.6} strokeOpacity={0.13}
          />

          {/* Quaternary ridge - foothills */}
          <ellipse
            cx={-40} cy={-30} rx={280} ry={225}
            fill="none"
            stroke="#9A8A6A" strokeWidth={0.5} strokeOpacity={0.09}
          />

          {/* Outermost ridge - mountain base */}
          <ellipse
            cx={-40} cy={-30} rx={355} ry={295}
            fill="none"
            stroke="#9A8A6A" strokeWidth={0.4} strokeOpacity={0.06}
          />
        </g>

        {/* Mountain silhouette lines - ridgelines extending from northwest */}
        <path
          d="M 0 80 Q 30 55 55 45 Q 80 35 95 20"
          fill="none"
          stroke="#8A7A5A" strokeWidth={0.6} strokeOpacity={0.15}
          strokeLinecap="round"
        />

        {/* Second ridgeline */}
        <path
          d="M 0 140 Q 40 115 70 100 Q 100 85 118 65"
          fill="none"
          stroke="#8A7A5A" strokeWidth={0.5} strokeOpacity={0.1}
          strokeLinecap="round"
        />

        {/* Yongding River origin guide - from western mountains flowing east */}
        <path
          d="M 5 420 Q 25 400 50 385 Q 75 365 95 340 Q 112 318 125 295"
          fill="none"
          stroke="#A8C4D4" strokeWidth={1.2} strokeOpacity={0.12}
          strokeLinecap="round"
        />

        {/* ==================== */}
        {/* Terrain layer complete */}
        {/* ==================== */}

        {/* Yongding River (always visible, faint) */}
        <path d="M18 520 Q68 500 118 495 Q178 488 228 500 Q278 512 328 505 Q368 500 408 508"
          fill="none" stroke="#3B8BD4" strokeWidth={2.5} strokeOpacity={0.18} strokeLinecap="round"/>
        <text x={60} y={514} fontSize={9} fontFamily="var(--font-sans)"
          fill="#185FA5" fillOpacity={0.4} textAnchor="middle" fontStyle="italic" letterSpacing="0.04em">永定河</text>

        {/* West hills label with mountain icon */}
        <g opacity="0.55">
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
          {/* Arrow indicator */}
          <line x1={50} y1={50} x2={38} y2={56}
            stroke="#8A7A5A" strokeWidth="0.8" strokeOpacity="0.5"
            markerEnd="url(#arr)"/>
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
          fill="var(--text-secondary)" fillOpacity={0.55} textAnchor="start" fontWeight={300}>天安门</text>

        {/* Era layers with Framer Motion animation */}
        <EraLayer currentEra={currentEra} onShowInfo={onShowInfo} />
    </svg>
  )
}
