import React from 'react';
import style from './ContactStart.module.css';
import Wrapper from './../../Wrapper/Wrapper.js';



const ContactStart = (props)=>{
	return(
		<div className={style.contact}>
			<Wrapper topic='Contant us' subtopic='Work With Us'/>
			<div className='conteiner'>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10161.59023590024!2d30.483675063071466!3d50.452321136966724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce89e733eb73%3A0xefab92b85131aeab!2z0YPQuy4g0JTQvNC40YLRgNC40LXQstGB0LrQsNGPLCAzOSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1630495131975!5m2!1sru!2sua" 
				allowfullscreen="" loading="lazy"></iframe>
				<div className={style.info}>
					<div className={style.first_info}>
						<div className={style.location}>
							<span>location</span>
							<div className={style.loc_info}>198 West 21th Street, New York, NY 10010</div>
						</div>
						<div className={style.fax}>
							<span>fax</span>
							<div className={style.fax_info}> +88 (0) 202 0000 000<br/> +88 (0) 202 0000 000</div>
						</div>
					</div>
					<div className={style.second_info}>
						<div className={style.phone}>
							<span>phone</span>
							<div className={style.phone_info}>+88 (0) 101 0000000 <br/> +88 (0) 101 0000000</div>
						</div>
						<div className={style.email}>
							<span>email</span>
							<div className={style.email_info}>elegant@elegant.com commercial@elegant.com</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default ContactStart;