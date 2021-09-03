import React from 'react'
import style from './Start.module.css';
import AboutStart from './AboutStart/AboutStart.js';
import Work from './../Work/Work.js';
import PeopleStart from './PeopleStart/PeopleStart.js';
import LastpostStart from './LastpostStart/LastpostStart.js';
import ContactStart from './ContactStart/ContactStart.js';
import {Router} from 'react-router-dom';


const Start = (props)=>{
	return(
		<div>
			<AboutStart/>
			<Work topic='What we do' subtopic='Show Your Amazing Work'/>
			<PeopleStart/>
			<LastpostStart/>
			<ContactStart/>
		</div>
		)
}

export default Start;

