const Result = ({result}) => {
    return (
        <>
        <div className=" container result">
            <img src={result.Poster} alt="" />
        </div>
        <div className=" container result "> 
        <h3>{result.Title}</h3>
        </div>
        
        
        </>
    )

}
export default Result;
