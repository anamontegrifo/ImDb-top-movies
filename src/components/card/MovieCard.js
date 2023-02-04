import { LitElement, html, css } from 'lit';

export class MovieCard extends LitElement {
	static get properties() {
		return {
			list: { type: Array },
		};
	}

	constructor() {
		super();
	}

	static get styles() {
		return css`
			.card {
				font-family: 'Righteous', cursive;
				display: flex;
				flex-direction: row;
				border: 1px solid black;
				width: 500px;
				height: 300px;
				margin-bottom: 5px;
				background-color: #04293a;
			}
			.card-info {
				padding: 10px;
			}
			.card-rank {
				font-size: 30px;
			}
			.box-container {
				display: flex;
				justify-content: space-evenly;
			}
			img {
				width: 200px;
			}
			p {
				color: white;
			}
		`;
	}

	render() {
		return html`
			${this.list.map((movie) => {
				return html`
					<div class="card">
						<img src=${movie.image} alt="movie image" />
						<div class="card-info">
							<p class="card-rank">#${movie.rank}</p>
							<p class="card-title">${movie.title}</p>
							<p class="card-year">${movie.year}</p>
							<div class="box-container">
								<light-box text="${movie.year}"></light-box>
								<light-box text=" ${movie.imDbRating}"></light-box>
							</div>
						</div>
					</div>
				`;
			})}
		`;
	}
}
customElements.define('movie-card', MovieCard);
