import React from 'react';
import { Link } from './Intro';
import { ImageType } from './GalleryIntro';
import Image from 'next/image';
import classes from './Hospitalarians.module.scss';
interface HospitalariansType {
	button: Link;
	image_hero: ImageType;
	text: string;
	title: string;
}

const Hospitalarians = (props: any) => {
	const hospitalarians: HospitalariansType = props.hospitalarians;
	return (
		<section className={classes.container}>
			<article>
				<div>
					<h2>{hospitalarians.title}</h2>
					<blockquote>
						<p>{hospitalarians.text}</p>
						<a
							href={hospitalarians.button.url}
							target={hospitalarians.button.target}
						>
							{hospitalarians.button.title}
						</a>
					</blockquote>
				</div>
				<figure>
					<Image
						src={hospitalarians.image_hero.url}
						alt={hospitalarians.image_hero.alt}
						layout='fill'
						objectFit='cover'
					/>
				</figure>
			</article>
		</section>
	);
};

export default Hospitalarians;
