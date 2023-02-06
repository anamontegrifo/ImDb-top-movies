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
				font-family: 'Roboto', sans-serif;
				display: flex;
				width: 500px;
				height: 250px;
				margin-bottom: 5px;
				padding: 10px;
				background-color: #04293a;
			}
			.card-info {
				padding: 10px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 60%;
			}
			.card-title {
				font-family: 'Righteous', cursive;
				font-size: 20px;
			}
			.box-container {
				display: flex;
				justify-content: space-evenly;
			}
			.card-crew {
				font-family: 'Roboto', sans-serif;
			}
			img {
				height: 100%;
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
							<p class="card-title">#${movie.rank} ${movie.title}</p>
							<p class="card-crew">Crew: ${movie.crew}</p>
							<div class="box-container">
								<light-box title="Year" text="${movie.year}"></light-box>
								<light-box
									title="Rating"
									text=" ${movie.imDbRating}"
								></light-box>
							</div>
						</div>
					</div>
				`;
			})}
		`;
	}
}
customElements.define('movie-card', MovieCard);
