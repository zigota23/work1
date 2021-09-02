import React from 'react'
import style from './Content.module.css';
import Start from './../Start/Start.js';
import About from './../About/About.js';
import {Route} from 'react-router-dom'
	

const Content = (props)=>{
	return(
		<div>	
			<Route exact path='/' component={()=><Start/>}/>
			<Route path='/about' component={()=><About/>}/>
			<Route path='/blog' component={()=><div/>}/>
		</div>
		)
}

export default Content;	