export async function getStaticProps() {
	const data = await fetch(``);
	return {
		props: {
			data,
		},
	};
}
