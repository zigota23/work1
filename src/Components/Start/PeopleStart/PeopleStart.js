import React from 'react';
import style from './PeopleStart.module.css';
import Wrapper from './../../Wrapper/Wrapper.js';
import man1 from './../../../img/man/man1.png';
import man2 from './../../../img/man/man2.png';
import man3 from './../../../img/man/man3.png';



const PeopleStart = (props)=>{

	const createMan = (photo,position,name,about)=>{
		return(
				<div className={style.man}>
					<div className={style.man_photo}><img src={photo}/></div>
					<div className={style.man_position}>{position}</div>
					<div className={style.man_name}>{name}</div>
					<div className={style.man_about}>{about}</div>
				</div>	
			)
	}

	const aboutMan = 'Lorem ipsum dolor sit amet, conse tetuer adi piscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.';

	const wrapperText = 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'

	return(
		<div className={style.people}>
			<Wrapper topic='Who we are' subtopic='The Amazing People Behind This' text={wrapperText}/>
			<div className={style.people_list}>
				{createMan(man1,'ceo','Tobias Schneider',aboutMan)}
				{createMan(man2,'designer','Jack Knife',aboutMan)}
				{createMan(man3,'developer','Ricki Hall',aboutMan)}
			</div>
		</div>
		)
}

export default PeopleStart;