import { LitElement, html, css } from 'lit';

export class MovieList extends LitElement {
	static get properties() {
		return {
			movies: { type: Array },
			filteredMovies: { type: Array },
			inputValue: { type: String },
		};
	}

	constructor() {
		super();
		this.movies = [];
		this.filteredMovies = [];
		this.inputValue = '';
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
	}

	filterArray(e) {
		this.inputValue = e.detail.toLocaleLowerCase();

		this.filteredMovies = this.movies.filter((each) =>
			each.title.toLocaleLowerCase().includes(this.inputValue)
		);
		this.movies = this.filteredMovies;
	}

	static get styles() {
		return css`
			.container {
				display: flex;
				flex-direction: column;
				padding: 20px;
			}
		`;
	}

	render() {
		return html`
			<get-data
				url="https://imdb-api.com/en/API/Top250Movies/k_2f0gbnvc/"
			></get-data>
			<header-list></header-list>
			<input-filter
				.value="${this.inputValue}"
				@change="${this.filterArray}"
				labelTitle="Is your favourite movie here?"
			></input-filter>
			<movie-card class="container" .list="${this.movies}"></movie-card>
		`;
	}
}

customElements.define('movie-list', MovieList);
