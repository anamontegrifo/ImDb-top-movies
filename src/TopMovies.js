import { LitElement, html, css } from 'lit';
import './components/Header.js';
import './components/MovieList.js';
import './data/GetData.js';

class TopMovies extends LitElement {
  static properties = {
    movies: { type: Array },
    filteredMovies: { type: Array },
    inputValue: { type: String },
  };

  constructor() {
    super();
    this.movies = [];
    this.filteredMovies = [];
    this.inputValue = '';
    this.addEventListener('ApiData', e => {
      this.dataFormat(e.detail.data);
    });
  }

  dataFormat(data) {
    const moviesArray = [];
    // eslint-disable-next-line array-callback-return
    data.items.map(movie => {
      moviesArray.push({
        rank: movie.rank,
        title: movie.title,
        year: movie.year,
        image: movie.image,
        crew: movie.crew,
        imDbRating: movie.imDbRating,
      });
    });

    // eslint-disable-next-line no-multi-assign
    this.movies = this.filteredMovies = moviesArray;
  }

  filterArray(ev) {
    this.inputValue = ev.detail.toLocaleLowerCase();
    this.filteredMovies = this.movies.filter(each =>
      each.title.toLocaleLowerCase().includes(this.inputValue)
    );
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--top-movies-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
		 <get-data
        url="https://imdb-api.com/en/API/Top250Movies/k_2f0gbnvc/"
      ></get-data>
      <header-list
        logoURL="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        logoAlt="imDb Logo"
				headline="Top 250 movies"
      ></header-list>
			<input-filter
        .value="${this.inputValue}"
        @change="${this.filterArray}"
        labelTitle="Is your favourite movie here?"
        placeholder="Seven samurai"
      ></input-filter>
        <movie-list .movies="${this.filteredMovies}"></movie-list>
      </main>
    `;
  }
}

customElements.define('top-movies', TopMovies);
