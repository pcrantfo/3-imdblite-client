import React from 'react';
import PropTypes from 'prop-types';

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;
        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.imageURL} />
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.title}</span>
                </div>
                <span className="label">Description: </span>
                <span className="value">{movie.description}</span>
                <button onClick={() => {
                    onBackClick(null);
                }}>Back</button>
            </div>
        );
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};