import classes from './Initiatives.module.scss';
import Image from 'next/image';
import React from 'react';
import { ImageType } from './GalleryIntro';
import { Link } from './Intro';

interface Initiative {
	title: string;
	initiative: {
		image: ImageType;
		link: Link;
	}[];
}
const Initiatives = (props: any) => {
	const initiatives: Initiative = props.initiatives;
	return (
		<section className={classes.container}>
			<h2>{initiatives.title}</h2>
			<div>
				{initiatives.initiative.map((initiative, i) => (
					<article key={i}>
						<figure>
							<Image
								src={initiative.image.url}
								alt={initiative.image.alt}
								layout='fill'
							/>
						</figure>
						<a href={initiative.link.url} target={initiative.link.target}>
							{initiative.link.title}
						</a>
					</article>
				))}
			</div>
		</section>
	);
};

export default Initiatives;
