import React from 'react';
import style from './Header.module.css';
import common_img from '../../img/header-img.png';
import logo from '../../img/logo.png';



const Header = (props)=>{

	return(
		<header>
			<div className={style.header_img}><img src={common_img}/></div>
			<div className={style.header_menu}>
				<div className={style.logo}><img src={logo}/></div>
				<div className={style.menu_burger}><span>menu</span><div className={style.burger}/></div>
			</div>
			<div className={style.header_main_text}><h1>Say <span>Holoa</span> to your Portfolio</h1></div>
		</header>
		)
}

export default Header;
