// src/App.js

import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import AlbumListPage from './pages/album-list-page';
import AlbumFormPage from './pages/album-form-page';

class App extends Component {
    render() {
        return (
            <Container>
                <div className="ui two item menu">
                    <NavLink className="item" activeClassName="active" exact to="/">
                        Albums List
                    </NavLink>
                    <NavLink className="item" activeClassName="active" exact to="/albums/new">
                        Add Album
                    </NavLink>
                </div>
                <Route exact path="/" component={AlbumListPage}/>
                <Route path="/albums/new" component={AlbumFormPage}/>
                <Route path="/albums/edit/:_id" component={AlbumFormPage}/>
            </Container>
        );
    }
}

export default App;
