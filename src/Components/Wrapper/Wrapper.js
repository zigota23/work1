import React from 'react';
import style from './Wrapper.module.css';



const Wrapper = (props)=>{

	return(
		<div className={style.wrapper}>
			{props.topic&&<div className={style.topic}>{props.topic}</div>}
			{props.subtopic&&<div className={style.subtopic}>{props.subtopic}</div>}
			{props.text&&<div className={style.text}>{props.text}</div>}
		</div>
		)
}

export default Wrapper;