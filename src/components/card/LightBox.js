import { LitElement, html, css } from 'lit';

export class LightBox extends LitElement {
	static get properties() {
		return {
			text: { type: String },
			title: { type: String },
		};
	}

	constructor() {
		super();
	}

	static get styles() {
		return css`
			.box {
				font-family: 'Righteous', cursive;
				background-color: #f9dc01;
				height: 40px;
				width: 60px;
				border-radius: 5px;
				text-align: center;
			}
			.text {
				margin: 0;
				font-size: 20px;
			}
			.title {
				margin: 0;
				font-size: 12px;
			}
		`;
	}

	render() {
		return html`
			<div class="box">
				<p class="text">${this.text}</p>
				<p class="title">${this.title}</p>
			</div>
		`;
	}
}

customElements.define('light-box', LightBox);
