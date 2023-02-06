import { LitElement, html, css } from 'lit';

export class HeaderList extends LitElement {
	constructor() {
		super();
	}
	static get styles() {
		return css`
			.header {
				display: flex;
				padding: 15px;
				font-family: 'Righteous', cursive;
			}
			img {
				height: 60px;
				margin-right: 10px;
			}
		`;
	}

	render() {
		return html`
			<div class="header">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
					alt="imDb logo"
				/>
				<h1>Top 250 movies</h1>
			</div>
		`;
	}
}

customElements.define('header-list', HeaderList);
