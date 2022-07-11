import React from 'react';
import classes from './Gallery.module.scss';
import Image from 'next/image';
type Gall = {
	images: any;
};
interface Image {
	boton: {
		title: string;
		url: string;
		target: string;
	};
	image: {
		url: string;
	};
	title: string;
}
const Gallery = ({ images }: Gall) => {
	return (
		<div className={classes.container}>
			<div className={classes.containerGallery}>
				{images.images.map((image: Image, i: number) => (
					<article key={i}>
						<div className={classes.landingImage}>
							<Image
								src={image.image.url}
								objectFit='cover'
								objectPosition='center'
								layout='fill'
								alt={image.title}
								priority
							/>
						</div>
						<div className={classes.content}>
							<h2>{image.title}</h2>
							<a href={image.boton.url} target='_blank' rel='noreferrer'>
								{image.boton.title}
							</a>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default Gallery;
