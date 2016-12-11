import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class RegisterComponent extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password_c: ''
        };
    }

    render() {
        return (
            <form>
                <input type="email" value={this.state.email} onChange={(e: any) => this.setState({email: e.target.value})} placeholder="Email Address" />
                <input type="password" value={this.state.password} onChange={(e: any) => this.setState({password: e.target.value})} placeholder="*********" />
                <input type="password" value={this.state.password_c} onChange={(e: any) => this.setState({password_c: e.target.value})} placeholder="*********" />
            </form>
        );
    }
}

export { RegisterComponent };