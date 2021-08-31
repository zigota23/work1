import React from 'react';
import style from './About.module.css';
import Wrapper from './../Wrapper/Wrapper.js'

const About = (props)=>{

	const wrapperText = 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc, fiant sollemnes in futurum.'

	return(
		<div className={style.about}>
			<Wrapper topic='Wro we are' subtopic='Tell The World About Yourself' text={wrapperText} />
			<div className={style.about_button}>
				<button>Read More About Us</button>
			</div>
		</div>
		)
}

export default About;