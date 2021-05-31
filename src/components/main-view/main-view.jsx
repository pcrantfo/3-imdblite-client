import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export default class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    onLoggedIn(user) {
        this.setState({
            user
        });
    }
    
    render() {
        const { movies, selectedMovie, user } = this.state;

        if (!user) return <LoginView onLoggedIn = {user => this.onLoggedIn(user)} />

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie = {selectedMovie}
                    onBackClick = {newSelectedMovie => {
                        this.setSelectedMovie(newSelectedMovie);
                    }}/>
                    : movies.map(movie => (
                        <MovieCard key = {movie._id} 
                        movieData = {movie}
                        onMovieClick = {(newSelectedMovie) => {
                            this.setSelectedMovie(newSelectedMovie)
                        }}/>
                    ))
                }
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://imdblite.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
}