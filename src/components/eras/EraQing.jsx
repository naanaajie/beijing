import GhostWalls from './GhostWalls'

export default function EraQing({ onShowInfo }) {
  return (
    <>
      <GhostWalls eraIndex={4} />
      {/* Outer city */}
      <rect x={174} y={356} width={254} height={106} rx={3}
        fill="#0F6E56" fillOpacity={0.07} stroke="#0F6E56"
        strokeWidth={1.5} strokeOpacity={0.5} strokeDasharray="6 3"/>

      {/* Inner city */}
      <rect x={174} y={160} width={254} height={196} rx={3}
        fill="#0F6E56" fillOpacity={0.07} stroke="#0F6E56" strokeWidth={2.2} strokeOpacity={0.75} filter="url(#wall-glow)"/>
      <text x={301} y={153} fontSize={12} fontFamily="var(--font-sans)"
        fill="#085041" textAnchor="middle" fontWeight={600} letterSpacing="0.06em">清北京</text>

      {/* Imperial city */}
      <rect x={244} y={206} width={116} height={114} rx={2}
        fill="#0F6E56" fillOpacity={0.1} stroke="#0F6E56"
        strokeWidth={1} strokeOpacity={0.4} strokeDasharray="5 2"/>

      {/* Forbidden City */}
      <rect x={268} y={226} width={68} height={74} rx={2}
        fill="#1D9E75" fillOpacity={0.18} stroke="#0F6E56" strokeWidth={1.5}/>
      <text x={302} y={266} fontSize={10} fontFamily="var(--font-sans)"
        fill="#04342C" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">紫禁城</text>

      {/* Shichahai */}
      <ellipse cx={262} cy={176} rx={17} ry={10}
        fill="#3B8BD4" fillOpacity={0.28} stroke="#3B8BD4" strokeWidth={1} strokeOpacity={0.4}/>
      <text x={262} y={179} fontSize={10} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">什刹海</text>

      {/* Beihai */}
      <ellipse cx={254} cy={248} rx={13} ry={20}
        fill="#3B8BD4" fillOpacity={0.28} stroke="#3B8BD4" strokeWidth={1} strokeOpacity={0.45}/>

      {/* Kunming Lake (Summer Palace) */}
      <ellipse cx={70} cy={116} rx={36} ry={25}
        fill="#3B8BD4" fillOpacity={0.18} stroke="#3B8BD4" strokeWidth={0.8} strokeOpacity={0.4}/>
      <text x={70} y={120} fontSize={10} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">昆明湖</text>

      {/* Kunyu He aqueduct (Summer Palace → Shichahai) */}
      <path d="M84 122 Q110 132 134 143 Q162 156 192 164 Q220 172 256 174 Q259 174 262 174"
        fill="none" stroke="#3B8BD4" strokeWidth={1.4} strokeOpacity={0.05} filter="url(#water-glow)" strokeLinecap="round"/>
      <path d="M84 122 Q110 132 134 143 Q162 156 192 164 Q220 172 256 174 Q259 174 262 174"
        fill="none" stroke="#3B8BD4" strokeWidth={1.8} strokeOpacity={0.25} strokeLinecap="round" filter="url(#water-glow)"/>
      <path className="cfs" d="M84 122 Q110 132 134 143 Q162 156 192 164 Q220 172 256 174 Q259 174 262 174"
        fill="none" stroke="#3B8BD4" strokeWidth={1.8} strokeOpacity={0.6} strokeLinecap="round"/>
      <text x={148} y={142} fontSize={9} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="middle" fontStyle="italic" letterSpacing="0.04em">昆玉河引水</text>

      {/* Tonghui River */}
      <path d="M362 183 Q402 180 448 182 Q508 185 566 191 Q616 196 660 201"
        fill="none" stroke="#1D9E75" strokeWidth={2.6} strokeOpacity={0.05} filter="url(#water-glow)" strokeLinecap="round"/>
      <path d="M362 183 Q402 180 448 182 Q508 185 566 191 Q616 196 660 201"
        fill="none" stroke="#1D9E75" strokeWidth={3.2} strokeOpacity={0.22} strokeLinecap="round" filter="url(#water-glow)"/>
      <path className="cf" d="M362 183 Q402 180 448 182 Q508 185 566 191 Q616 196 660 201"
        fill="none" stroke="#1D9E75" strokeWidth={3.2} strokeOpacity={0.7} strokeLinecap="round"/>
      <text x={498} y={172} fontSize={9} fontFamily="var(--font-sans)"
        fill="#085041" textAnchor="middle" fontStyle="italic" letterSpacing="0.04em">通惠河 → 通州</text>
      <circle cx={660} cy={201} r={5} fill="#1D9E75" fillOpacity={0.7} stroke="#fff" strokeWidth={1}/>
      <text x={655} y={215} fontSize={8} fontFamily="var(--font-sans)" fill="#085041" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>通州</text>

      {/* Central axis */}
      <line x1={302} y1={160} x2={302} y2={462}
        stroke="#0F6E56" strokeWidth={0.8} strokeOpacity={0.28} strokeDasharray="3 4"/>

      {/* Landmark: Forbidden City */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '故宫（清代）',
        '清顺治入关后沿用明宫，乾隆年间大修增建。故宫范围与今日相同，位于二环内核心，南门（午门）即今天安门广场北端。'
      )}>
        <circle cx={302} cy={252} r={9} fill="#085041" fillOpacity={0.85} stroke="#fff" strokeWidth={1.5}/>
        <text x={302} y={256} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>宫</text>
      </g>

      {/* Landmark: Summer Palace */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '颐和园 · 位置说明',
        '颐和园（清漪园）在今四环至五环之间的西北方向，海淀区境内。昆明湖水经昆玉河引入城内什刹海水系，是贯通西郊皇家园林与城内水系的重要纽带。'
      )}>
        <circle cx={70} cy={90} r={7} fill="#0F6E56" fillOpacity={0.85} stroke="#fff" strokeWidth={1.5}/>
        <text x={70} y={94} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>园</text>
        <text x={70} y={80} fontSize={8} fontFamily="var(--font-sans)" fill="#085041" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>颐和园</text>
      </g>

      {/* Landmark: Yuanmingyuan ruins */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '圆明园 · 位置说明',
        '圆明园在今四环以外、五环以内的西北方向，海淀区中关村科学城附近。1860年遭英法联军焚毁后，今为圆明园遗址公园。'
      )}>
        <circle cx={76} cy={163} r={6} fill="#D85A30" fillOpacity={0.8} stroke="#fff" strokeWidth={1.5}/>
        <text x={76} y={167} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>遗</text>
        <text x={76} y={181} fontSize={8} fontFamily="var(--font-sans)" fill="#993C1D" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>圆明园</text>
      </g>

    </>
  )
}
