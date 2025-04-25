import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//My Components
import Root from './Root'
class App extends Component {
    render() {
        return <Root/>
    }
}
ReactDOM.render(<App />, document.getElementById('app'))