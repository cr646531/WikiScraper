import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurr, loadLinks } from './store';

class App extends Component {

    constructor() {
        super();
        this.state = {
            href: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(ev) {
        this.setState({[ev.target.name]: ev.target.value});
    }

    onSave(ev) {
        ev.preventDefault();
        this.props.loadLinks(this.state.href);
    }

    render() {
        const { href } = this.state.href;

        return (
            <div>
                <br />
                <hr />
                <br />
                <br />
                <form onSubmit = { this.onSave }>
                    <input name="href" value={href} onChange={this.onChange} />
                    <button>Search</button>
                </form>
                <br />
                <hr />
                <br />
                <br />
                <ul>
                    {
                        this.props.links.map(link => (
                            <li key={link[3]}>{link[0]}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setCurr: (curr)=> dispatch(setCurr(curr)),
        loadLinks: (link)=> dispatch(loadLinks(link))
    };
};

const mapStateToProps = ({ links })=> {
    return {
        links 
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(null, mapDispatchToProps)(App);