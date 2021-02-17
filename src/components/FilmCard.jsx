const FilmCard = ({ title, release_date, rt_score }) => {
  return (
    <div className='card shadow'>
      <div className='card-body'>
        <h3>{title}</h3>
        <p className='card-text'>Released: {release_date}</p>
        <p className='card-text'>Rotten Tomatoes Score: {rt_score}</p>
      </div>
    </div>
  )
}

export default FilmCard
