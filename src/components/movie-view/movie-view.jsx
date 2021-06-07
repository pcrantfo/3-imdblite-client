import React from 'react';
import PropTypes from 'prop-types';

import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;
        return (
            <Media className="movie-view">
                <img 
                    width="50%"
                    height="auto"
                    className="align-self-center mr-3"
                    src={movie.imgURL} />
                <Media.Body>
                    <h2>{movie.title}</h2>
                    <div className="movie-body">
                        <span className="label">
                            <strong>Description: </strong>
                        </span>
                        <span className="value">{movie.description}</span>
                    </div>
                    <br></br>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => {
                            onBackClick(null);
                        }}>Back</Button>
                </Media.Body>
            </Media>
        );
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imgURL: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};