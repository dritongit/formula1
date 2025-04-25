import React, {Component} from 'react'

//Style
import Style from '../Style'
class SideBar extends Component {

    renderYears(item, key) {
         let {currentYear, changeCurrentYear} = this.props
         let color = currentYear === item ? '#4285f4' : '#616161'

        return <li key={key} style={Style.li} >
                        <a style={Object.assign({color: color}, Style.a)} href="#" onClick={event => changeCurrentYear(item)}>{item}</a>
                    </li>
    }
    render() {
        let {years} = this.props
        console.log('years', years)
        return <section style={Style.sidebar}>    
                <nav style={Style.nav}>    
                    {years.map(this.renderYears.bind(this))}
                </nav>
                </section>
    }
}
export default SideBar