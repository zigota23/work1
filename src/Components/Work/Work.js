import React from 'react';
import style from './Work.module.css';
import Wrapper from './../Wrapper/Wrapper.js';
import gallery1 from './../../img/gallery/gallery1.png';
import gallery2 from './../../img/gallery/gallery2.png';
import gallery3 from './../../img/gallery/gallery3.png';
import gallery4 from './../../img/gallery/gallery4.png';
import gallery5 from './../../img/gallery/gallery5.png';
import gallery6 from './../../img/gallery/gallery6.png';
import gallery7 from './../../img/gallery/gallery7.png';
import gallery8 from './../../img/gallery/gallery8.png';






const Work = (props)=>{
	return(
		<div className={style.work}>
			<Wrapper topic='What we do' subtopic='Show Your Amazing Work'/>
			<div className={style.gallery}>
				<div className={style.first_gallery}>
					<div className={style.gallery_photo}><img src={gallery1}/></div>
					<div className={style.gallery_photo}><img src={gallery2}/></div>
					<div className={style.gallery_photo}><img src={gallery3}/></div>
					<div className={style.gallery_photo}><img src={gallery4}/></div>
				</div>
				<div className={style.second_gallery}>
					<div className={style.gallery_photo}><img src={gallery5}/></div>
					<div className={style.gallery_photo}><img src={gallery6}/></div>
					<div className={style.gallery_photo}><img src={gallery7}/></div>
					<div className={style.gallery_photo}><img src={gallery8}/></div>
				</div>
			</div>
		</div>
		)
}

export default Work;