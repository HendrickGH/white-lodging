import React from 'react';
import Image from 'next/image';
import classes from './GalleryIntro.module.scss';
export type ImageType = {
	ID: number;
	alt: string;
	date: string;
	url: string;
};
export interface GalleryIntro {
	images: ImageType[];
}
const GalleryIntro = ({ images }: GalleryIntro) => {
	const [women, man, deans, water] = images;
	if (images.length < 4) return <div>Something went wrong!</div>;
	return (
		<figure className={classes.container}>
			<div className={classes.first}>
				<Image
					src={women.url}
					width={141}
					height={100}
					layout='intrinsic'
					objectFit='cover'
					alt=''
				/>
			</div>
			<div className={classes.second}>
				<Image
					src={man.url}
					width={280}
					height={100}
					layout='intrinsic'
					objectFit='cover'
					alt=''
				/>
			</div>
			<div className={classes.third}>
				<Image
					src={deans.url}
					width={350}
					height={100}
					layout='intrinsic'
					objectFit='cover'
					alt=''
				/>
			</div>
			<div className={classes.fourth}>
				<Image
					src={water.url}
					width={350}
					height={100}
					layout='intrinsic'
					objectFit='cover'
					alt=''
				/>
			</div>
		</figure>
	);
};

export default GalleryIntro;
