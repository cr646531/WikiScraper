import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurr } from './store';

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
        this.props.setCurr(this.state.href);
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
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        setCurr: (curr)=> dispatch(setCurr(curr))
    };
};

// const mapStateToProps = ({ users })=> {
//     return {
//         users 
//     };
// };
  
// export default connect(mapStateToProps, mapDispatchToProps)(Users);

export default connect(null, mapDispatchToProps)(App);