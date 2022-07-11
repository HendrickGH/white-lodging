import React from 'react';
import classes from './Intro.module.scss';
import GalleryIntro from '../components/GalleryIntro';
import { ImageType } from '../components/GalleryIntro';
export type Link = {
	title: string;
	url: string;
	target: string;
};
interface Intro {
	subtitle: string;
	button: Link;
	gallery: ImageType[];
	text: string;
	title: string;
	title_underlined: string;
}
const Intro = (props: any) => {
	const intro: Intro = props.thrive;
	return (
		<section className={classes.intro}>
			<div className={classes.info}>
				<p title='environment'>{intro.subtitle}</p>
				<h2>
					{intro.title} <span>{intro.title_underlined}</span>
				</h2>
				<p>{intro.text}</p>
				<button>{intro.button.title}</button>
			</div>
			<GalleryIntro images={intro.gallery} />
		</section>
	);
};

export default Intro;
