import React from 'react'
import style from './Start.module.css';
import AboutStart from './AboutStart/AboutStart.js';
import WorkStart from './WorkStart/WorkStart.js';
import PeopleStart from './PeopleStart/PeopleStart.js';
import LastpostStart from './LastpostStart/LastpostStart.js';
import ContactStart from './ContactStart/ContactStart.js';
import {Router} from 'react-router-dom';


const Start = (props)=>{
	return(
		<div>
			<AboutStart/>
			<WorkStart/>
			<PeopleStart/>
			<LastpostStart/>
			<ContactStart/>
		</div>
		)
}

export default Start;

