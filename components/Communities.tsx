import Image from 'next/image';
import React from 'react';
import { ImageType } from './GalleryIntro';
import classes from './Communities.module.scss';
interface Communities {
	title: string;
	text: string;
	image: ImageType;
}
const Communities = (props: any) => {
	const communities: Communities = props.communities;

	return (
		<section className={classes.grid}>
			<div>
				<h2>{communities.title}</h2>
				<p>{communities.text}</p>
			</div>
			<figure>
				<Image src={communities.image.url} alt='' layout='fill' />
			</figure>
		</section>
	);
};

export default Communities;
