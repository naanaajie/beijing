import GhostWalls from './GhostWalls'

export default function EraMing({ onShowInfo }) {
  return (
    <>
      <GhostWalls eraIndex={3} />
      {/* Outer city (south, Jiajing addition) */}
      <rect x={174} y={356} width={254} height={106} rx={3}
        fill="#3B6D11" fillOpacity={0.07} stroke="#3B6D11"
        strokeWidth={1.5} strokeOpacity={0.55} strokeDasharray="6 3"/>
      <text x={301} y={472} fontSize={9} fontFamily="var(--font-sans)"
        fill="#3B6D11" textAnchor="middle" fontStyle="italic" letterSpacing="0.04em">外城（嘉靖增筑）</text>

      {/* Inner city */}
      <rect x={174} y={160} width={254} height={196} rx={3}
        fill="#3B6D11" fillOpacity={0.08} stroke="#3B6D11" strokeWidth={2.2} strokeOpacity={0.78} filter="url(#wall-glow)"/>
      <text x={301} y={153} fontSize={12} fontFamily="var(--font-sans)"
        fill="#27500A" textAnchor="middle" fontWeight={600} letterSpacing="0.06em">明北京内城</text>

      {/* Imperial city */}
      <rect x={244} y={206} width={116} height={114} rx={2}
        fill="#3B6D11" fillOpacity={0.12} stroke="#3B6D11"
        strokeWidth={1} strokeOpacity={0.5} strokeDasharray="5 2"/>

      {/* Forbidden City */}
      <rect x={268} y={226} width={68} height={74} rx={2}
        fill="#639922" fillOpacity={0.2} stroke="#3B6D11" strokeWidth={1.5}/>
      <text x={302} y={266} fontSize={10} fontFamily="var(--font-sans)"
        fill="#173404" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">紫禁城</text>

      {/* Beihai */}
      <ellipse cx={254} cy={248} rx={13} ry={20}
        fill="#3B8BD4" fillOpacity={0.25} stroke="#3B8BD4" strokeWidth={1} strokeOpacity={0.4}/>

      {/* Shichahai */}
      <ellipse cx={262} cy={176} rx={17} ry={10}
        fill="#3B8BD4" fillOpacity={0.28} stroke="#3B8BD4" strokeWidth={1} strokeOpacity={0.4}/>
      <text x={262} y={179} fontSize={10} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">什刹海</text>

      {/* Tonghui River */}
      <path d="M368 183 Q408 180 452 183 Q508 186 562 192 Q612 197 660 202"
        fill="none" stroke="#1D9E75" strokeWidth={2.6} strokeOpacity={0.05} filter="url(#water-glow)" strokeLinecap="round"/>
      <path d="M368 183 Q408 180 452 183 Q508 186 562 192 Q612 197 660 202"
        fill="none" stroke="#1D9E75" strokeWidth={3.2} strokeOpacity={0.22} strokeLinecap="round" filter="url(#water-glow)"/>
      <path className="cf" d="M368 183 Q408 180 452 183 Q508 186 562 192 Q612 197 660 202"
        fill="none" stroke="#1D9E75" strokeWidth={3.2} strokeOpacity={0.7} strokeLinecap="round"/>
      <text x={498} y={174} fontSize={9} fontFamily="var(--font-sans)"
        fill="#085041" textAnchor="middle" fontStyle="italic" letterSpacing="0.04em">通惠河（明代）</text>
      <circle cx={660} cy={202} r={5} fill="#1D9E75" fillOpacity={0.7} stroke="#fff" strokeWidth={1}/>
      <text x={655} y={216} fontSize={8} fontFamily="var(--font-sans)" fill="#085041" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>通州</text>

      {/* Central axis */}
      <line x1={302} y1={160} x2={302} y2={462}
        stroke="#3B6D11" strokeWidth={0.8} strokeOpacity={0.28} strokeDasharray="3 4"/>

      {/* Landmark: Forbidden City */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '紫禁城（故宫）',
        '明永乐十八年（1420年）建成，南北长961米，东西宽753米。故宫位于今二环内中心，其南门午门约在今天安门广场北侧，是北京南北中轴线的核心。'
      )}>
        <circle cx={302} cy={252} r={9} fill="#27500A" fillOpacity={0.85} stroke="#fff" strokeWidth={1.5}/>
        <text x={302} y={256} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>宫</text>
      </g>

      {/* Landmark: Dongbianmen gate */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '东便门 · 漕运终点',
        '明代漕船终点在东便门外（城墙东南角），即今东二环与两广路交叉口附近，正好在现代二环路上。漕船不能入城，须在此换车马转运，是明代漕运的重要瓶颈。'
      )}>
        <rect x={428} y={352} width={20} height={14} rx={2}
          fill="#3B6D11" fillOpacity={0.7} stroke="#27500A" strokeWidth={0.5}/>
        <text x={438} y={363} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>门</text>
        <text x={438} y={378} fontSize={8} fontFamily="var(--font-sans)" fill="#27500A" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>东便门</text>
      </g>

      {/* Landmark: Temple of Heaven */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '天坛',
        '永乐十八年建成，位于今外城东部，对应现代二环至三环之间的崇文区（现东城区南部）。天坛公园至今保留，是研究明代外城范围的重要坐标。'
      )}>
        <circle cx={322} cy={406} r={7} fill="#639922" fillOpacity={0.85} stroke="#fff" strokeWidth={1.5}/>
        <text x={322} y={410} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>坛</text>
        <text x={322} y={424} fontSize={8} fontFamily="var(--font-sans)" fill="#3B6D11" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>天坛</text>
      </g>

    </>
  )
}
