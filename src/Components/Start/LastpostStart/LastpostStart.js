import React from 'react';
import style from './LastpostStart.module.css';
import Wrapper from './../../Wrapper/Wrapper.js';
import post_photo from './../../../img/post_photo.png';
import {NavLink} from 'react-router-dom';



const LastpostStart = (props)=>{

	const postText = 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores.';

	return(
		<div className={style.last_post}>
			<Wrapper topic='Last Post' subtopic='We Like To Write'/>
			<div className={style.conteiner}>
				<div className={style.post}>
					<div className={style.post_photo}><img src={post_photo}/></div>
					<div className={style.post_info}>
						<div className={style.post_data}>14 september 2020</div>
						<div className={style.post_name}>Change Your Space</div>
						<div className={style.post_text}>{postText}</div>
						<NavLink to='/post'><div className={style.post_button+' '+'common_button'}><button>Read</button></div></NavLink>
					</div>
				</div>
				<NavLink to='/blog'><div className='common_button' onClick={()=>{window.scrollTo(0,0)}}><button>More From Our Blog</button></div></NavLink>
			</div>
		</div>
		)
}

export default LastpostStart;