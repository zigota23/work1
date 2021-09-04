import React from 'react';
import style from './Post.module.css';
import {NavLink} from  'react-router-dom';


const Post = (props)=>{
	return(
		<div className={style.post}>
			<div className={style.img}><img src={props.img}/></div>
			<div className={style.topic}>{props.topic}</div>
			<div className={style.date}>{props.date}</div>
			<div className={style.text}>{props.text}</div>
			{!props.post&&<NavLink to='/post'><div className={style.more_button+' '+'common_button'}><button>Read more</button></div></NavLink>}
		</div>
		)
}

export default Post;
