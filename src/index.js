// Udemy Modern React with Redux
// Get geolocation and determine season based on hemisphere v1
// v2 show / hide error, loading or latitude. change latitude hemisphere and set season based on month

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import './Spinner';
import Spinner from "./Spinner";

if (module.hot) {
    module.hot.accept();
}

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // The line below replaces the state constructor but delivers the exact same result once transpiled
    state = {lat: null, errorMessage: ''}

    /*  // this constructor statement is no longer required, use the shorthand instead
        constructor(props) {
            super(props);

            this.state = {lat: null};

            window.navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState({lat: position.coords.latitude});
                },
                (err) => console.log(err)
            );
        } */

    // component.DidMount should be used for changes to data, instead of in the constructor
    // so the above statement to get the geolocation moves into this statement (best practice)
    // componentDidMount() runs *only once* after the app has rendered, also see shorthand version below
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        // If there is an error message show only the error
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error Message: {this.state.errorMessage}</div>;
        }
        // If the browser returns the location show the latitude
        if (!this.state.errorMessage && this.state.lat) {
            // return <div>Latitude: {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat}/>
        }

        //This will show loading while it waits for the browser to return the position or error
        return <Spinner message="Please accept location request"/>
    }

    render() {
        return (
            <div className="custom-border">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
