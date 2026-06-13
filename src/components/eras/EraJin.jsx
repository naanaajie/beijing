import GhostWalls from './GhostWalls'

export default function EraJin({ onShowInfo }) {
  return (
    <>
      <GhostWalls eraIndex={1} />
      {/* City wall */}
      <rect x={88} y={258} width={276} height={216} rx={4}
        fill="#D4537E" fillOpacity={0.13} stroke="#D4537E" strokeWidth={2.5} strokeOpacity={0.88} filter="url(#wall-glow)"/>
      <text x={226} y={252} fontSize={12} fontFamily="var(--font-sans)"
        fill="#993556" textAnchor="middle" fontWeight={600} letterSpacing="0.06em">金中都城墙</text>

      {/* Imperial city */}
      <rect x={172} y={302} width={106} height={86} rx={2}
        fill="#D4537E" fillOpacity={0.15} stroke="#D4537E"
        strokeWidth={1} strokeOpacity={0.5} strokeDasharray="4 2"/>
      <text x={225} y={348} fontSize={10} fontFamily="var(--font-sans)" fill="#993556" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">皇城</text>

      {/* Qionghua Island lake */}
      <ellipse cx={296} cy={242} rx={15} ry={21}
        fill="#3B8BD4" fillOpacity={0.22} stroke="#3B8BD4" strokeWidth={1} strokeOpacity={0.45}/>
      <text x={296} y={246} fontSize={10} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">琼华岛</text>

      {/* SE canal */}
      <path d="M660 448 Q580 458 510 438 Q460 426 408 432 Q368 437 338 455 Q308 472 288 474 Q268 476 248 468 Q224 458 208 443"
        fill="none" stroke="#3B8BD4" strokeWidth={2.8} strokeOpacity={0.28} strokeLinecap="round" filter="url(#water-glow)"/>
      <path className="cf" d="M660 448 Q580 458 510 438 Q460 426 408 432 Q368 437 338 455 Q308 472 288 474 Q268 476 248 468 Q224 458 208 443"
        fill="none" stroke="#3B8BD4" strokeWidth={2.8} strokeOpacity={0.65} strokeLinecap="round"/>

      {/* Jin Kou He (aqueduct from Yongding) */}
      <path d="M18 362 Q52 357 80 360 Q100 362 118 368 Q138 375 158 380 Q178 384 196 380"
        fill="none" stroke="#3B8BD4" strokeWidth={1.6} strokeOpacity={0.05} filter="url(#water-glow)" strokeLinecap="round"/>
      <path d="M18 362 Q52 357 80 360 Q100 362 118 368 Q138 375 158 380 Q178 384 196 380"
        fill="none" stroke="#3B8BD4" strokeWidth={2} strokeOpacity={0.28} strokeLinecap="round" filter="url(#water-glow)"/>
      <path className="cfs" d="M18 362 Q52 357 80 360 Q100 362 118 368 Q138 375 158 380 Q178 384 196 380"
        fill="none" stroke="#3B8BD4" strokeWidth={2} strokeOpacity={0.62} strokeLinecap="round"/>
      <text x={55} y={352} fontSize={9} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="middle" fontStyle="italic" letterSpacing="0.04em">金口河</text>

      {/* Landmark: Lugou Bridge */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '卢沟桥 · 漕运咽喉',
        '金大定年间建成（1192年），位于今三环到四环之间的西南方向，丰台区境内。是金中都连接中原的陆路要冲，今桥仍保存完好，与卢沟桥镇相邻。'
      )}>
        <rect x={104} y={447} width={30} height={12} rx={2}
          fill="#D4537E" fillOpacity={0.7} stroke="#993556" strokeWidth={0.5}/>
        <text x={119} y={457} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>桥</text>
        <text x={119} y={472} fontSize={8} fontFamily="var(--font-sans)" fill="#993556" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>卢沟桥</text>
      </g>

      {/* Landmark: Palace */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '金中都 · 位置说明',
        '金中都范围比辽南京更大，四面均有扩展，北墙约在今二环至三环之间的白纸坊一带，东墙约在今二环内虎坊桥，南墙超出今三环，西墙在今西三环附近。城市整体仍偏向西南，与今日北京中心区（故宫）相差约3公里。'
      )}>
        <circle cx={226} cy={325} r={8} fill="#993556" fillOpacity={0.85} stroke="#fff" strokeWidth={1.5}/>
        <text x={226} y={329} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>宫</text>
      </g>

    </>
  )
}
