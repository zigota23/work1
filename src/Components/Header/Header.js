import React,{useEffect,useState} from 'react';
import style from './Header.module.css';
import common_img from '../../img/header-img.png';
import about_logo from '../../img/about_logo.png';
import blog_logo from '../../img/blog_logo.png';
import work_logo from '../../img/work_logo.png';
import contact_logo from '../../img/contact_logo.png';
import logo from '../../img/logo.png';
import {withRouter} from 'react-router-dom';
import WebMenu from './../Menu/Menu.js';



const Header = (props)=>{

	const [status,editStatus] = useState(false);
	useEffect(()=>{},[status]);
	useEffect(()=>{if(status)editStatus(!status);},[props.location.pathname]);


	let logo_photo = null;
	switch(props.location.pathname){
		case '/about':{
			logo_photo = about_logo;
			break;
		}
		case '/blog':{
			logo_photo = blog_logo;
			break;
		}
		case '/work':{
			logo_photo = work_logo;
			break;
		}
		case '/contact':{
			logo_photo = contact_logo;
			break;
		}

		default: logo_photo = common_img
	}
	return(
		<header>
			<div className={style.header_img}><img src={logo_photo}/></div>
			<WebMenu status={status}/>
			<div className={style.header_menu}>
				<div className={style.logo}><img src={logo}/></div>
				<div className={style.menu_burger} onClick={()=>{editStatus(!status)}}><span>menu</span><div className={style.burger}/></div>
			</div>
			{logo_photo == common_img?<div className={style.header_main_text}><h1>Say <span>Holoa</span> to your Portfolio</h1></div>:false}
		</header>
		)
}

export default withRouter(Header);
