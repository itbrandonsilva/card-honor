import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterComponent } from './RegisterComponent';

class AppComponent extends Component<null, null> {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <RegisterComponent />
            </div>
        )
    }
}

let ConnectedAppComponent = connect()(AppComponent);

export { ConnectedAppComponent as AppComponent };