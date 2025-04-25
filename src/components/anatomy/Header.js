import React, { Component } from 'react'

//Style
import Style from '../../Style'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: 'rgba(50, 98, 186, 1)'
        }
    }
    /**
     * Change button color on mouse over
     */
    mouseOver() {
        console.log(this.state.background)
        this.setState({
            background: 'rgba(50, 98, 186, 0.8)'
        })
    }
    
    /**
     * Change button color on mouse out
     */
     mouseOut() {
        console.log(this.state.background)
        this.setState({
            background: 'rgba(50, 98, 186, 1)'
        })
    }
    render() {
        let {changeYears, generateYears} = this.props
        return <header style={Style.header}>
            <div style={{float:'left', width: '234px'}}>
            <h4 style={Style.h4}>Formula 1</h4>
            </div>
            <div style={Style.form}>
                <input style={Style.input} placeholder="Start year" type="number" maxLength="4" onChange={event => changeYears(event, 'start')}/>
                <input style={Style.input}  placeholder="End year" type="number"  onChange={event => changeYears(event, 'end')}/>
                <button 
                    style={Object.assign({background: this.state.background},Style.button)} 
                    onMouseOver={this.mouseOver.bind(this)} 
                    onMouseOut={this.mouseOut.bind(this)}
                    onClick={event => generateYears()}>Generate</button>
            </div>
        </header>

    }
}
export default Header