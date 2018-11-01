import React,{Component} from 'react';

export default class Header extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="text-center">{this.props.titulo}</h1>
            </div>
        );
    }
}