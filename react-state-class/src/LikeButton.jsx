import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false); // Fixed: "false" not "fasle"  and we can also create a multiple hooks but it always work inside the function
  let [clicks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
  };

  let likeStyle = {
    color: "red",
  };

  return (
    <div>
      <p>Clicks ={clicks}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i> // Fixed: "className" not "class"
        ) : (
          <i className="fa-regular fa-heart"></i> // Fixed: "className" not "class"
        )}
      </p>
    </div>
  );
}
