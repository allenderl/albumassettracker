// src/components/album-list.js

import React from 'react';
import { Card } from 'semantic-ui-react';
import AlbumCard from './album-card';

export default function AlbumList({albums}){

    const cards = () => {
        return albums.map(album => {
            return (
                <AlbumCard key={album._id} album={album}/>
            )
        })
    }

    return (
        <Card.Group>
            { cards() }
        </Card.Group>
    )
}