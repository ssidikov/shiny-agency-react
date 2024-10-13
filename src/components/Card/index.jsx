function Card({ label, title, picture }) {
  return (
    <div className="card">
      <span>{label}</span>
      <img src={picture} alt={title} className="avatar" />
    </div>
  )
}
