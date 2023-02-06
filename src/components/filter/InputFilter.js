import { LitElement, html, css } from 'lit';

export class InputFilter extends LitElement {
	static get properties() {
		return {
			value: { type: String },
			labelTitle: { type: String },
			placeholder: { type: String },
		};
	}

	constructor() {
		super();
	}

	static get styles() {
		return css`
			:host {
				font-family: 'Roboto', sans-serif;
				padding: 15px;
			}
		`;
	}

	_filterItem(e) {
		this.value = e.currentTarget.value;
		this.dispatchEvent(
			new CustomEvent('change', {
				detail: this.value,
				bubbles: true,
				composed: true,
			})
		);
	}

	render() {
		return html`
			<label
				>${this.labelTitle}
				<input
					@input="${this._filterItem}"
					type="text"
					value="${this.value}"
					placeholder="${this.placeholder}"
				/>
			</label>
		`;
	}
}

customElements.define('input-filter', InputFilter);
