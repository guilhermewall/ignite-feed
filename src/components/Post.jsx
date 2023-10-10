import { useState } from "react";
import Avatar from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

const Post = (props) => {
  const [comment, setComment] = useState(["Post muito bacana, bom dms!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const handlerSubmit = () => {
    event.preventDefault();
    setComment([...comment, newCommentText]);
    setNewCommentText("");
  };

  const handlerNewComment = () => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentDelete) => {
    const commentsWithoutDeletedOne = comment.filter((elem) => {
      return elem !== commentDelete;
    });

    setComment(commentsWithoutDeletedOne);
  };

  const handlerNewCommentInvalid = () => {
    event.target.setCustomValidity("Esse campo é obrigatorio!");
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/guilhermewall.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Guilherme Wallace</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 19:50h" dateTime="2023-08-26 19:50:06">
          Poblicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form onSubmit={handlerSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handlerNewComment}
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário"
          onInvalid={handlerNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comment.map((elem, index) => {
          return (
            <Comment
              key={elem}
              content={elem}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
export default Post;
