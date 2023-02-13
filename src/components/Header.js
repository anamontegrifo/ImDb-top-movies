import { LitElement, html, css } from 'lit';
import './filter/InputFilter.js';

export class HeaderList extends LitElement {
  static get properties() {
    return {
      inputValue: { type: String },
      logoURL: { type: String },
      logoAlt: { type: String },
      headline: { type: String },
    };
  }

  constructor() {
    super();
    this.inputValue = '';
    this.logoURL = '';
    this.logoAlt = '';
    this.headline = '';
  }

  static get styles() {
    return css`
      .header {
        display: flex;
        padding: 15px;
        font-family: 'Righteous', cursive;
      }
      img {
        height: 100px;
        margin-right: 10px;
      }
    `;
  }

  render() {
    return html`
      <div class="header">
        <img src="${this.logoURL}" alt="${this.logoAlt}" />
        <h1>${this.headline}</h1>
      </div>
    `;
  }
}

customElements.define('header-list', HeaderList);
