import React from 'react';

import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;

        return (
            <Card>
                <Card.Img 
                    variant="top" 
                    src={ movieData.imgURL } 
                />
                <Card.Body>
                    <Card.Title>{ movieData.title }</Card.Title>
                    <Row className="button-row">
                        <Button 
                            onClick = {() => 
                                onMovieClick(movieData)}
                            variant="link"
                        >Open
                        </Button>
                        <Button variant="link">
                            <i className="far fa-heart"></i>
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

MovieCard.propTypes = {
    movieData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imgURL: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};