
//recibiendo la prop 'image' podemos desesctructurar el title y la url
export const GifItem = ({title, url}) => {
    // console.log({title, url})
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
