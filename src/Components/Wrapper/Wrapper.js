import React from 'react';
import style from './Wrapper.module.css';



const Wrapper = (props)=>{

	return(
		<div className={style.wrapper}>
			<div className={style.topic}>{props.topic}</div>
			<div className={style.subtopic}>{props.subtopic}</div>
			{props.text&&<div className={style.text}>{props.text}</div>}
		</div>
		)
}

export default Wrapper;