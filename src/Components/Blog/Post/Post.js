import React from 'react';
import style from './Post.module.css';



const Post = (props)=>{
	return(
		<div className={style.post}>
			<div className={style.img}><img src={props.img}/></div>
			<div className={style.topic}>{props.topic}</div>
			<div className={style.date}>{props.date}</div>
			<div className={style.text}>{props.text}</div>
			<div className={style.button}><button>Read more</button></div>
		</div>
		)
}

export default Post;
