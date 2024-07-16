const Card = (props) => {
  return (
    <div className="border-slate-950 border-4 rounded-lg p-4 text-justify font-mono m-2 text-2xl">
        <h1 className="text-4xl font-black text-center">{props.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus optio quas, dolores dolorem libero sunt alias expedita vitae est error eaque non magni voluptatum iusto suscipit veritatis officia quibusdam.</p>
    </div>
  )
}

export default Card