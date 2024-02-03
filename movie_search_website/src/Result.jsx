const Result = ({result,openDetail}) => {
    return (
        <>
        <div className=" container ">
            <div className="result " onClick={e=>openDetail(result.imdbID)}>

            <img src={result.Poster} alt="" />
            <h3>{result.Title}</h3>
            </div>
           
        </div>
        
        
        
        </>
    )

}
export default Result;
