let memes = [
  {
    id: 1,
    title: "Mem 1",
    upvotes: 7,
    downvotes: 1,
    img: "memes/meme1.jpg",
  },
  {
    id: 2,
    title: "Mem 2",
    upvotes: 3,
    downvotes: 0,
    img: "memes/meme2.jpg",
  },
  //   {
  //     id: 3,
  //     title: "Mem 3",
  //     upvotes: 0,
  //     downvotes: 0,
  //     img: "memes/meme3.jpg",
  //   },
  //   {
  //     title: "Mem 4",
  //     upvotes: 0,
  //     downvotes: 0,
  //     img: "memes/meme4.jpg",
  //   },
  {
    title: "Mem 5",
    upvotes: 0,
    downvotes: 2,
    img: "memes/meme5.jpg",
  },
  //   {
  //     title: "Mem 6",
  //     upvotes: 0,
  //     downvotes: 0,
  //     img: "memes/meme6.jpg",
  //   },
];

const sum = (up, down) => {
  return up - down;
};

const Meme = () => {
  return memes.map((element) => (
    <div className="memes">
      <img
        key={element.id}
        className="meme"
        src={element.img}
        alt="meme"
        width="500"
        height="560"
      ></img>
      <button
        onClick={() => {
          element.upvotes = element.upvotes + 1;
          console.log(element.upvotes);
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          element.downvotes = element.downvotes + 1;
          console.log(element.downvotes);
        }}
      >
        Down
      </button> {sum(element.upvotes, element.downvotes)}
      {console.log(element.upvotes)}
    </div>
  ));
};
export default Meme;

// const Meme = () => {
//     return(
//         <div className="mem">
//             <div className="memes">
//                 <img className="meme" src={"memes/meme"+i+".jpg"} alt="meme" width="500" height="560"></img>
//             </div>
//             <div className="memes">
//                 <img className="meme" src="memes/meme2.jpg" alt="meme" width="500" height="560"></img>
//             </div>
//         </div>
//     )
// }
// export default Meme
