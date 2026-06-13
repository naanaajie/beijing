const ITEMS = [
  { type: 'line', color: '#1D9E75', label: '漕渠/通惠河' },
  { type: 'line', color: '#3B8BD4', label: '引水渠/水系' },
  { type: 'dot',  color: '#C4862A', label: '辽' },
  { type: 'dot',  color: '#8B3A52', label: '金' },
  { type: 'dot',  color: '#4A4580', label: '元' },
  { type: 'dot',  color: '#3A6B35', label: '明' },
  { type: 'dot',  color: '#2C6E6A', label: '清' },
]

export default function Legend() {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '8px 16px',
      marginTop: 20, paddingTop: 16,
      borderTop: '0.5px solid #D8CFC4',
      fontSize: 11, color: '#7A6A58', alignItems: 'center',
    }}>
      {ITEMS.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {item.type === 'dot' ? (
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color }} />
          ) : (
            <div style={{ width: 20, height: 3, background: item.color, borderRadius: 2 }} />
          )}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
