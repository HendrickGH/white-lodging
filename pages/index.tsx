import type { NextPage } from 'next';
import Head from 'next/head';
import Communities from '../components/Communities';
import Gallery from '../components/Gallery';
import Hospitalarians from '../components/Hospitalarians';
import Initiatives from '../components/Initiatives';
import Intro from '../components/Intro';
import News from '../components/News';
import Travel from '../components/Travel';
import { App } from '../types';
const Home: NextPage<App> = ({ data }) => {
	const Modules: JSX.Element[] = data.map((module, i) => {
		const { acf_fc_layout, ...rest } = module;
		if (module.acf_fc_layout === 'pictures_intro') {
			return <Intro key={i} thrive={rest} />;
		}
		if (module.acf_fc_layout === 'gallery') {
			return <Gallery key={i} images={rest} />;
		}
		if (module.acf_fc_layout === 'grid_container') {
			return <Communities key={i} communities={rest} />;
		}
		if (module.acf_fc_layout === 'initiatives') {
			return <Initiatives key={i} initiatives={rest} />;
		}
		if (module.acf_fc_layout === 'news') {
			return <News key={i} news={rest} />;
		}
		if (module.acf_fc_layout === 'over_image') {
			return <Hospitalarians key={i} hospitalarians={rest} />;
		}
		if (module.acf_fc_layout === 'multi_image') {
			return <Travel key={i} travel={rest} />;
		} else {
			return <div key={i}></div>;
		}
	});
	return (
		<main>
			<Head>
				<title>White lodging!</title>
			</Head>
			{Modules}
		</main>
	);
};

export async function getStaticProps() {
	const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/pages/37');
	const { acf } = await res.json();
	return {
		props: {
			data: acf.modules,
		},
	};
}

export default Home;
