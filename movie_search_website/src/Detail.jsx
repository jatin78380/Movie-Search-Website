const Detail =({selected,close})=>{
return (
    <>
     <div className=" container ">
            <div className="row">
       <div className="col12">

       <img src={selected.Poster} alt="Image of the Movie that you selected for detail" />
       </div>
            <div className="detail"> 
            <h3>{selected.Title}</h3>
            <p> Year: {selected.Year}</p>
            <p> Imdb Rating of the Movie : {selected.imdbRating}</p>
            <h3>Movie Genre: {selected.Genre}</h3>
            <p> {selected.Plot}</p>
            <h4>Actors in the movie:{selected.Actors}</h4>
            <button onClick={close} className="btn1"> Close</button>
          
            
            </div>
           
            

            </div>
           
        </div>
    
    </>
)
}
export default Detail;