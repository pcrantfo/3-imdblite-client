import React from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

        if (!user) return <LoginView onLoggedIn = {user => this.onLoggedIn(user)} />;

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <Row className="main-view justify-content-md-center">
                <Col className="justify-content-md-center" md={12}>
                    <h1>Movies</h1>
                </Col>
                {selectedMovie
                    ? (
                        <Col md={10}>
                            <MovieView movie = {selectedMovie} 
                                onBackClick = {newSelectedMovie => {
                                    this.setSelectedMovie(newSelectedMovie);
                            }}/>
                        </Col>
                    )
                    : (
                        movies.map(movie => (
                            <Col md={3}>
                                <MovieCard key = {movie._id} 
                                    movieData = {movie}
                                    onMovieClick = {(newSelectedMovie) => {
                                        this.setSelectedMovie(newSelectedMovie)
                                }}/>
                            </Col>
                        ))
                    )
                }
            </Row>
        );
    }
}