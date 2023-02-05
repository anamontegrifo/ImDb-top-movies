import { LitElement, html, css } from 'lit';

export class LightBox extends LitElement {
	static get properties() {
		return {
			text: { type: String },
		};
	}

	constructor() {
		super();
	}

	static get styles() {
		return css`
			.box {
				background-color: #f9dc01;
				height: 25px;
				width: 60px;
				border-radius: 5px;
				text-align: center;
				font-size: 20px;
			}
		`;
	}

	render() {
		return html` <div class="box">${this.text}</div> `;
	}
}

customElements.define('light-box', LightBox);
