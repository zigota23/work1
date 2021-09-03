import React from 'react';
import style from './Menu.module.css';
import {NavLink} from 'react-router-dom';


const Menu = (props)=>{
	return(
		<div className={props.status?style.menu:style.menu_disable}>
			<NavLink to='/about'><div className={props.status?style.point:style.point_disable}>About</div></NavLink>
			<NavLink to='/blog'><div className={props.status?style.point:style.point_disable}>Blog</div></NavLink>
			<NavLink to='/work'><div className={props.status?style.point:style.point_disable}>Work</div></NavLink>
			<NavLink to='/contact'><div className={props.status?style.point:style.point_disable}>Contant</div></NavLink>
		</div>
		)
}

export default Menu;