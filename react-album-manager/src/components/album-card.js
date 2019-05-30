// src/components/album-card.js

import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function AlbumCard({album, deleteAlbum}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name='user outline'/> {album.title}
                </Card.Header>
                <Card.Description>
                    <p><Icon name='phone'/> {album.year}</p>
                    <p><Icon name='mail outline'/>{album.condition} </p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Button basic color="green">Edit</Button>
                    <Button basic color="red">Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}

AlbumCard.propTypes = {
    album: PropTypes.object.isRequired
}

