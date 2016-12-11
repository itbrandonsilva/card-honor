import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { AppComponent } from './AppComponent';
import { store } from '../web-state/store';

export class RootComponent extends Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <AppComponent />
            </Provider>
        )
    }
};