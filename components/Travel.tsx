import React from 'react';
import { ImageType } from './GalleryIntro';
import { Link } from './Intro';
import Image from 'next/image';
import classes from './Travel.module.scss';
interface TravelType {
	container: {
		background_image: ImageType;
		text: string;
		thrive_container: {
			title: string;
			button: {
				link: Link;
			}[];
		};
		title: string;
	};
	image_pattern: {
		image: ImageType;
	}[];
}
const Travel = (props: any) => {
	const travel: TravelType = props.travel.container;
	return (
		<section className={classes.container}>
			<div className={classes.left}>
				<div className={classes.background} role='background'></div>
				<div className={classes.leftContainer}>
					<div className={classes.containerInfo}>
						<h2>{travel.container.title}</h2>
						<p>{travel.container.text}</p>
					</div>
					<div className={classes.containerThrive}>
						<h2>{travel.container.thrive_container.title}</h2>
						<div>
							{travel.container.thrive_container.button.map((button, i) => {
								return (
									<a key={i} href={button.link.url} target={button.link.target}>
										{button.link.title}
									</a>
								);
							})}
						</div>
					</div>
				</div>
				<figure>
					<Image
						src={travel.container.background_image.url}
						alt={travel.container.background_image.alt}
						layout='fill'
						objectFit='cover'
					/>
				</figure>
			</div>
			<div className={classes.imagesThrive}>
				{travel.image_pattern.map(({ image }, i) => {
					return (
						<div key={i}>
							<Image src={image.url} alt={image.alt} layout='fill' />
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Travel;
