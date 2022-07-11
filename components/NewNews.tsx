import React from 'react';
import classes from './NewNews.module.scss';
import { New } from './News';
const NewNews = (props: New) => {
	const [month, day, year] = props.date.split(' ');
	return (
		<article className={classes.item}>
			<aside>
				<p>{month}</p>
				<p>{day}</p>
				<p>{year}</p>
			</aside>
			<div>
				<div>
					<h4>{props.title}</h4>
					<p>{props.notice}</p>
				</div>
				<a href={props.link.url} target={props.link.target}>
					{props.link.title}
				</a>
			</div>
		</article>
	);
};

export default NewNews;
