import React from 'react';
import style from './Header.module.css';
import common_img from '../../img/header-img.png';
import about_logo from '../../img/about_logo.png';
import logo from '../../img/logo.png';
import {withRouter} from 'react-router-dom';



const Header = (props)=>{
	let logo_photo = null;
	switch(props.location.pathname){
		case '/about':{
			logo_photo = about_logo;
			break;
		}

		default: logo_photo = common_img
	}
	return(
		<header>
			<div className={style.header_img}><img src={logo_photo}/></div>
			<div className={style.header_menu}>
				<div className={style.logo}><img src={logo}/></div>
				<div className={style.menu_burger}><span>menu</span><div className={style.burger}/></div>
			</div>
			<div className={style.header_main_text}><h1>Say <span>Holoa</span> to your Portfolio</h1></div>
		</header>
		)
}

export default withRouter(Header);
