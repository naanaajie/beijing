import GhostWalls from './GhostWalls'

export default function EraLiao({ onShowInfo }) {
  return (
    <>
      <GhostWalls eraIndex={0} />
      {/* City wall */}
      <rect x={118} y={298} width={196} height={166} rx={4}
        fill="#EF9F27" fillOpacity={0.09} stroke="#EF9F27" strokeWidth={2.2} strokeOpacity={0.75} filter="url(#wall-glow)"/>
      <text x={216} y={292} fontSize={12} fontFamily="var(--font-sans)"
        fill="#BA7517" textAnchor="middle" fontWeight={600} letterSpacing="0.06em">辽南京城墙</text>

      {/* Imperial city */}
      <rect x={165} y={335} width={76} height={64} rx={2}
        fill="#EF9F27" fillOpacity={0.15} stroke="#EF9F27"
        strokeWidth={1} strokeOpacity={0.5} strokeDasharray="4 2"/>
      <text x={203} y={370} fontSize={10} fontFamily="var(--font-sans)" fill="#BA7517" textAnchor="middle" fontWeight={400} letterSpacing="0.04em">皇城</text>

      {/* Sanggan River tributary */}
      <path d="M18 505 Q55 488 95 478 Q125 472 155 458 Q172 448 188 435"
        fill="none" stroke="#3B8BD4" strokeWidth={1.8} strokeOpacity={0.05} filter="url(#water-glow)" strokeLinecap="round"/>
      <path d="M18 505 Q55 488 95 478 Q125 472 155 458 Q172 448 188 435"
        fill="none" stroke="#3B8BD4" strokeWidth={2.2} strokeOpacity={0.3} strokeLinecap="round" filter="url(#water-glow)"/>
      <path className="cfs" d="M18 505 Q55 488 95 478 Q125 472 155 458 Q172 448 188 435"
        fill="none" stroke="#3B8BD4" strokeWidth={2.2} strokeOpacity={0.65} strokeLinecap="round"/>
      <text x={82} y={474} fontSize={9} fontFamily="var(--font-sans)" fill="#0C447C" textAnchor="middle" fontStyle="italic" letterSpacing="0.04em">桑干河支流</text>

      {/* Landmark: Yanjing capital */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '辽南京 · 位置说明',
        '辽南京大致在今二环路西南角至宣武门一带，城市主体位于现代二环路以内偏西南。城市面积约21平方公里，相当于今天二环内面积的约60%，且偏向西南方向，与今日北京城市中心有明显偏移。'
      )}>
        <circle cx={286} cy={358} r={7} fill="#884F0B" fillOpacity={0.85} stroke="#fff" strokeWidth={1.5}/>
        <text x={286} y={362} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>都</text>
        <text x={305} y={362} fontSize={8} fontFamily="var(--font-sans)" fill="#BA7517" textAnchor="start" fontWeight={300} fillOpacity={0.55}>燕京</text>
      </g>

      {/* Landmark: Minzhong Temple */}
      <g style={{ cursor: 'pointer' }} onClick={() => onShowInfo(
        '悯忠寺（法源寺）',
        '建于唐代，辽代为皇家礼佛重地，约在今宣武门内大街西侧，处于辽南京城内西南部，对应现代二环以内宣武区一带。'
      )}>
        <circle cx={148} cy={408} r={6} fill="#EF9F27" fillOpacity={0.9} stroke="#fff" strokeWidth={1.2}/>
        <text x={148} y={412} fontSize={8} fontFamily="var(--font-sans)" fill="#fff" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>寺</text>
        <text x={148} y={426} fontSize={8} fontFamily="var(--font-sans)" fill="#BA7517" textAnchor="middle" fontWeight={300} fillOpacity={0.55}>悯忠寺</text>
      </g>

    </>
  )
}
