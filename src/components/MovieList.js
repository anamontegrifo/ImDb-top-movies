/* eslint-disable array-callback-return */
import { LitElement, html, css } from 'lit';
import './card/MovieCard.js';

export class MovieList extends LitElement {
  static get properties() {
    return {
      movies: { type: Array },
    };
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
      <movie-card class="container" .movies="${this.movies}"></movie-card>
    `;
  }
}

customElements.define('movie-list', MovieList);
