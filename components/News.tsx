import React from 'react';
import classes from './News.module.scss';
import NewNews from './NewNews';
import { Link } from './Intro';
export type New = {
	date: string;
	link: Link;
	notice: string;
	title: string;
};
interface News {
	title: string;
	button: Link;
	new: New[];
}
const News = (props: any) => {
	const news: News = props.news;
	return (
		<section className={classes.container}>
			<header className={classes.header}>
				<h2>{news.title}</h2>
				<a href={news.button.url} target={news.button.target}>
					{news.button.title}
				</a>
			</header>
			<div className={classes.news}>
				{news.new.map((item, i) => {
					return <NewNews key={i} {...item} />;
				})}
			</div>
		</section>
	);
};

export default News;
