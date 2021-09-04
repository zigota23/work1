import React from 'react';
import style from './Contact.module.css';
import Wrapper from './../Wrapper/Wrapper.js';
import photo from './../../img/contact_img.png';


const Contact = (props)=>{

	const text = "Good design as little design as possible. Good design is to chance. My goal is making something memorable and especially the consumer. Good design is aesthetic. Care and aesthetic. Good design emphasises the consumer. It does not only functional.";

	return(
		<div className={style.contact}>
			<Wrapper topic='this is it' subtopic='Contact Us'/>
			<div className='conteiner'>
				<div className={style.info}>
					<div className={style.first_row}>
						<div className={style.title}><div><span>Rua Serpa Pinto,<br/>Lisbon, Portugal</span></div></div>	
						<div className={style.photo}><img src={photo}/></div>	
					</div>	
					<div className={style.second_row}>
						<div className={style.text}>{text}</div>	
						<div className={style.phone}><div><span>+88 (0) 101 0000 000<br/> +88 (0) 101 0000 000</span></div></div>	
					</div>	
				</div>
				<div className={style.email_button+' '+'common_button'}><button>Shote us an Email</button></div>
			</div>
		</div>
		)
}

export default Contact;