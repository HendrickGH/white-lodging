export interface Module {
	acf_fc_layout:
		| 'header'
		| 'gallery'
		| 'pictures_intro'
		| 'over_image'
		| 'multi_image'
		| 'grid_container'
		| 'news'
		| 'initiatives';
}
export interface App {
	data: Module[];
}
