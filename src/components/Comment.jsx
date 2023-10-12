import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";
import { useState } from "react";

export const Comment = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handlerDeleteComment = () => {
    onDeleteComment(content);
  };

  const handlerLikeComment = () => {
    // sempre que eu for fazer a atualização de um state q depende dele mesmo use a segunda forma
    // setLikeCount(likeCount + 1);

    setLikeCount((state) => {
      return state + 1;
    });
    // aqui eu tambem poderia dar um push ex:

    // setLikeCount((state)=>{
    //   return [...state, "item_2"]
    // })
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/guilhermewall.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Wallace</strong>
              <time
                title="14 de setembro às 22:28h"
                dateTime="2023-09-14 22:28:03"
              >
                Publicado Agora
              </time>
            </div>

            <button onClick={handlerDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handlerLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
