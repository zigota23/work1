import React from 'react'
import style from './Content.module.css';
import Start from './../Start/Start.js';
import About from './../About/About.js';
import Blog from './../Blog/Blog.js';
import Work from './../Work/Work.js';
import Contact from './../Contact/Contact.js';
import Post from './../Post/Post.js';
import {Route} from 'react-router-dom'
	

const Content = (props)=>{

	const text = "Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.";

	return(
		<div>	
			<Route exact path='/' component={()=><Start/>}/>
			<Route path='/about' component={()=><About/>}/>
			<Route path='/blog' component={()=><Blog/>}/>
			<Route path='/work' component={()=><Work topic='our amazing work' subtopic='What We Do' text={text}/>}/>
			<Route path='/contact' component={()=><Contact/>}/>
			<Route path='/post' component={()=><Post/>}/>
		</div>
		)
}

export default Content;	