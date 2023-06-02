const Card = (props) => {
  const { name, imoji, description } = props
  return (
    <div className="card">
      <h1 className="imoji">{imoji}</h1>
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
    </div>
  )
}

export default Card
