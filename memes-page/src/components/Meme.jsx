let i = 1

const Meme = () => {
    return(
        <div className="mem">
            <div className="memes">
                <img className="meme" src={"memes/meme"+i+".jpg"} alt="meme" width="500" height="560"></img>
            </div>
            <div className="memes">
                <img className="meme" src="memes/meme2.jpg" alt="meme" width="500" height="560"></img>
            </div>
        </div>
    )
}
export default Meme