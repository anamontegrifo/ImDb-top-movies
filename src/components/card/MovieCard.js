import { LitElement, html, css } from 'lit';
import './LightBox.js';

export class MovieCard extends LitElement {
  static get properties() {
    return {
      movies: { type: Array },
    };
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
        font-size: 20px;
      }
      .card-title {
        font-family: 'Righteous', cursive;
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
      ${this.movies.length === 0
        ? html`<h1>Sorry, the movie you choose isn´t here!</h1>`
        : this.movies.map(
            movie => html`
              <div class="card">
                <img src=${movie.image} alt="official movie poster" />
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
            `
          )}
    `;
  }
}
customElements.define('movie-card', MovieCard);
