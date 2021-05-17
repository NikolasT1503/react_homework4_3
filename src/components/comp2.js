import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar, Button, Input } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

function Comp2() {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState([]);
  /* const [avatar, setAvatar] = useState(''); */

  /* const authors = ['Nikolas', 'Alex', 'Han Solo']; */

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  //const { TextArea } = Input;

  const myRef = React.createRef();

  let handler = () => {
    let current = count;
    current++;
    setCount(current);
  };

  let addComment = () => {
    let commentValue = myRef.current.value;
    let comments = [...comment, commentValue];
    setComment(comments);

    myRef.current.value = "";

  };

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <>
      <h1>State</h1>
      <div>
        <Button type="primary" onClick={handler}>This button change state</Button>
      </div>
      <div>Количество нажатий: {count}</div>
      <div>
        <textarea ref={myRef}></textarea>
      </div>
      <div>
        <Button type="primary" onClick={addComment}>Add Comment</Button>
      </div>
      <div>
        <ul>
          {comment.map((item, index) => (
            <Comment
              key={index.toString()}
              actions={actions}
              author='Han Solo'
              avatar={<Avatar src="https://source.unsplash.com/random" alt="Nikolas"/>}
              content={<p>{item}</p>}
              datetime={
                <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Comp2;
