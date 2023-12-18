import style from "../styles/LikeButton.module.css"
import { useState } from 'react'

function LikeButton() {
  const [likeButton, setLikeButton] = useState("🤍");
  const handleClick = (emoji) => {
    setLikeButton (emoji)
  }

  return <button className={style["likeButton"]} onClick={() => handleClick("❤️")}>{likeButton}</button>

}


export default LikeButton


