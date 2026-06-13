import GhostWalls from './GhostWalls'

export default function EraYuan({ onShowInfo }) {
  return (
    <>
      <GhostWalls eraIndex={2} />
      {/* City wall */}
      <rect x={148} y={88} width={336} height={356} rx={4}
        fill="#534AB7" fillOpacity={0.07} stroke="#534AB7" strokeWidth={2.2} strokeOpacity={0.72} filter="url(#wall-glow)"/>
      <text x={316} y={82} fontSize={12} fontFamily="var(--font-sans)"
        fill="#3C3489" textAnchor="middle" fontWeight={600} letterSpacing="0.06em">元大都城墙</text>

      {/* Imperial city */}
      <rect x={244} y={192} width={136} height={130} rx={3}
        fill="#534AB7" fillOpacity={0.1} stroke="#534AB7"
        strokeWidth={1} strokeOpacity={0.5} strokeDasharray="5 2"/>

      {/* Palace city */}
      <rect x={268} y={226} width={88} height={66} rx={2}
        fill="#534AB7" fillOpacity={0.15} stroke="#534AB7" strokeWidth={1.2} strokeOpacity={0.7}/>
      <text x={312} y={262} fontSize={10} fontFamily="var(--font-sans)" fill="#26215C" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">宫城</text>

      {/* Jishuitan (Shichahai) */}
      <ellipse cx={276} cy={162} rx={25} ry={14}
        fill="#3B8BD4" fillOpacity={0.35} stroke="#3B8BD4" strokeWidth={1.5} strokeOpacity={0.6}/>
      <text x={276} y={166} fontSize={10} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">积水潭</text>

      {/* Taiye lake */}
      <ellipse cx={258} cy={226} rx={14} ry={22}
        fill="#3B8BD4" fillOpacity={0.28} stroke="#3B8BD4" strokeWidth={1} strokeOpacity={0.45}/>

      {/* Baifu aqueduct (from Changping) */}
      <path d="M18 92 Q62 100 98 118 Q132 135 166 152 Q196 168 226 165 Q250 163 276 162"
        fill="none" stroke="#3B8BD4" strokeWidth={1.8} strokeOpacity={0.05} filter="url(#water-glow)" strokeLinecap="round"/>
      <path d="M18 92 Q62 100 98 118 Q132 135 166 152 Q196 168 226 165 Q250 163 276 162"
        fill="none" stroke="#3B8BD4" strokeWidth={2.2} strokeOpacity={0.28} strokeLinecap="round" filter="url(#water-glow)"/>
      <path className="cfs" d="M18 92 Q62 100 98 118 Q132 135 166 152 Q196 168 226 165 Q250 163 276 162"
        fill="none" stroke="#3B8BD4" strokeWidth={2.2} strokeOpacity={0.68} strokeLinecap="round"/>
      <circle cx={18} cy={92} r={4} fill="#3B8BD4" fillOpacity={0.6}/>
      <text x={24} y={88} fontSize={9} fontFamily="var(--font-sans)" fill="#0C447C" fontStyle="italic" letterSpacing="0.04em">白浮泉</text>
      <text x={96} y={110} fontSize={9} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="start" fontStyle="italic" letterSpacing="0.04em">白浮泉引水渠</text>

      {/* Tonghui River (Grand Canal into city) */}
      <path d="M276 162 Q308 164 338 168 Q372 174 408 178 Q452 182 498 186 Q556 192 618 198 Q644 201 664 204"
        fill="none" stroke="#1D9E75" strokeWidth={3} strokeOpacity={0.05} filter="url(#water-glow)" strokeLinecap="round"/>
      <path d="M276 162 Q308 164 338 168 Q372 174 408 178 Q452 182 498 186 Q556 192 618 198 Q644 201 664 204"
        fill="none" stroke="#1D9E75" strokeWidth={3.8} strokeOpacity={0.22} strokeLinecap="round" filter="url(#water-glow)"/>
      <path className="cff" d="M276 162 Q308 164 338 168 Q372 174 408 178 Q452 182 498 186 Q556 192 618 198 Q644 201 664 204"
        fill="none" stroke="#1D9E75" strokeWidth={3.8} strokeOpacity={0.72} strokeLinecap="round"/>
      <text x={458} y={170} fontSize={9} fontFamily="var(--font-sans)" fill="#085041" textAnchor="middle" fontStyle="italic" letterSpacing="0.04em">通惠河 → 通州</text>
      <circle cx={664} cy={204} r={5} fill="#1D9E75" fillOpacity={0.7} stroke="#fff" strokeWidth={1}/>
      <text x={659} y={218} fontSize={8} fontFamily="var(--font-sans)" fill="#085041" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>通州</text>

      {/* North earth wall highlight */}
      <rect x={150} y={90} width={332} height={7} rx={2} fill="#534AB7" fillOpacity={0.2} stroke="#534AB7" strokeWidth={0.5}/>
      <text x={484} y={106} fontSize={8} fontFamily="var(--font-sans)" fill="#3C3489" textAnchor="start" fontWeight={300} fillOpacity={0.55}>土城（北墙遗址）</text>

      {/* Landmark: Bell-Drum Tower */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '中心台（钟鼓楼）· 位置说明',
        '元大都北墙在今北土城路一带（三环北路附近），南墙约在今长安街南侧，东西墙约在今二环内侧。元大都是历史上第一个与今日北京市中心基本重合的都城，鼓楼位置至今未变。'
      )}>
        <rect x={303} y={148} width={22} height={22} rx={3}
          fill="#534AB7" fillOpacity={0.8} stroke="#fff" strokeWidth={1.5}/>
        <text x={314} y={163} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>中</text>
        <text x={314} y={182} fontSize={8} fontFamily="var(--font-sans)" fill="#3C3489" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>中心台</text>
      </g>

      {/* Landmark: Jishuitan canal terminus */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '积水潭 · 漕运终点',
        '通惠河将漕粮从通州运至城内积水潭，即今什刹海一带。积水潭在元代面积远大于今日，约占今德胜门至西直门一带，在三环以内、二环以内偏北位置。'
      )}>
        <circle cx={276} cy={142} r={6} fill="#3B8BD4" fillOpacity={0.85} stroke="#fff" strokeWidth={1.5}/>
        <text x={276} y={146} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>港</text>
        <text x={276} y={130} fontSize={8} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>漕运终点</text>
      </g>

    </>
  )
}
