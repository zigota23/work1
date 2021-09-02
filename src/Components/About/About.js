import React from 'react';
import style from './About.module.css';
import Wrapper from './../Wrapper/Wrapper.js';
import img from './../../img/services_img.png'


const About = (props)=>{

	const textWrapper = "That's an interesting thing about design defines so much more than what products have a very minimalist way. From a designer's point of being so many ways, but very complicated the defining what products become in many of the other four parts? True simplicity. I think there is very complicated problems without letting people have always thought about the absence of design defines so much that seem to mean so much of consequence is a profound and its context. There's no other four parts? Powerpoint. Great design is to perform the way beyond the leading edge in terms of defining what we also acknowledge that it has a product that effort. Great design makes it does not the essential, so much more than the design is honest!";
	return(
		<div className={style.about}>
			<Wrapper text={textWrapper}/>
			<div className={style.services}>
				<div className={style.services_img}><img src={img}/></div>
				<div className={style.services_info}>
					<div className={style.topic}>Services</div>
					<div className={style.services_text}>
						<div className={style.text1}>We’ll work with you to define a strong visual identity. One that communicates your values through a cohesive story and brings your business to life in print and online.</div>
						<ul className={style.text2}>
							<li>Branding</li>
							<li>Visual Identity</li>
							<li>Web & Digital Design</li>
							<li>Annual Reports</li>
							<li>Books & Brochures</li>
							<li>Programs & Editorial</li>
							<li>Creative Consultancy</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		)
}

export default About;