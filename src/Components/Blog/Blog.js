import React from 'react';
import style from './Blog.module.css';
import post_img from './../../img/post_img.png';
import Post from './Post/Post.js';
import gallery2 from './../../img/gallery/gallery2.png';
import gallery3 from './../../img/gallery/gallery3.png';
import gallery4 from './../../img/gallery/gallery4.png';
import gallery5 from './../../img/gallery/gallery5.png';


const Blog = (props)=>{

	const post_text = "This looks. I want to complexity. That's come to testify to complexity. It's about an object, we kept going and i figured out some basic stuff that acknowledges its very minimalist way beyond the traditions of function from a clutterfree product that form and value on ideas and simplicity. What products have disconnected function of anything of the computer.";
	const post_topic = 'This is the Title of Your Post';
	const post_date = '14 september 2020'
	const arrPosts = [{post_img,post_topic,post_date,post_text},{post_img,post_topic,post_date,post_text}];

	const posts = arrPosts.map(item=>{
		return <Post img={item.post_img} topic={item.post_topic} date={item.post_date} text={item.post_text}/>
	})
	return(
		<div className={style.blog}>
			<div className={style.columns}>
				<div className={style.posts}>
					{posts}
				</div>
				<div className={style.info}>
					<div className={style.recent_post}>
						<div className={style.title}>Recent Post</div>
						<div className={style.info_text}>
							<ul>
								<li>This is the Title of Your Post</li>
								<li>This is the Title of Your Post</li>
								<li>This is the Title of Your Post</li>
								<li>This is the Title of Your Post</li>
								<li>This is the Title of Your Post</li>
							</ul>
						</div>
					</div>
					<div className={style.categories}>
						<div className={style.title}>Categories</div>
						<div className={style.info_text}>
							<ul>
								<li>Art</li>
								<li>Business</li>
								<li>Design</li>
								<li>Code</li>
							</ul>
						</div>
					</div>
					<div className={style.project}>
						<div className={style.title}>Project</div>
						<div className={style.info_imgs}>
							<div className={style.project_img}><img src={gallery2}/></div>
							<div className={style.project_img}><img src={gallery3}/></div>
							<div className={style.project_img}><img src={gallery4}/></div>
							<div className={style.project_img}><img src={gallery5}/></div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.load_button}>

			</div>
		</div>
		)
}

export default Blog;