import { LitElement, html, css } from 'lit';

export class MovieList extends LitElement {
	static get properties() {
		return {
			movies: { type: Array },
		};
	}

	constructor() {
		super();
		this.movies = [];
		this.addEventListener('ApiData', (e) => {
			this.dataFormat(e.detail.data);
		});
	}

	dataFormat(data) {
		let moviesArray = [];
		data['items'].map((movie) => {
			moviesArray.push({
				rank: movie.rank,
				title: movie.title,
				year: movie.year,
				image: movie.image,
				crew: movie.crew,
				imDbRating: movie.imDbRating,
			});
		});
		this.movies = moviesArray;
		console.log('las pelis', this.movies);
	}

	static get styles() {
		return css`
			.container {
				display: flex;
				flex-direction: column;
				background-color: #c69749;
				padding: 20px;
			}
		`;
	}

	render() {
		return html`
			<get-data
				url="https://imdb-api.com/en/API/Top250Movies/k_tmzc8fjq"
				method="GET"
			></get-data>
			<header-list></header-list>
			<movie-card class="container" .list="${this.movies}"></movie-card>
		`;
	}
}

customElements.define('movie-list', MovieList);
