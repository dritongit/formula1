import React, { Component } from 'react'

//My Components
import Header from './components/anatomy/Header'
import SideBar from './components/SideBar'
import Content from './components/Content'
import Footer from './components/anatomy/Footer'

//Style
import Style from './Style'

let lastYear = new Date().getFullYear() - 1

class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startYear: 2000,
            endYear: lastYear,
            currentYear: 2005,
            years: []
        }
    }

    /**
     * Generate years when component did mount
     */
    componentDidMount() {
        this.generateYears()
    }

    /**
     * Change Years from SideBar
     * @param {e} Event
     * @param {type} String - 'start' || end
     */
    changeYears(e, type) {
        let length = e.target.value.length
        if(length === 4) {
            switch (type) {
                case 'start':
                    this.setState({
                        startYear: e.target.value
                    })
                    break
                default:
                    this.setState({
                        endYear: e.target.value
                    })
            }
        }
    }

    /**
     * Change Current year
     * @param {currentYear} Int
     */
    changeCurrentYear(currentYear) {
        this.setState({
            currentYear
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.currentYear !== this.state.currentYear) {
            console.log('currentYear: ', this.state.currentYear)
        }
    } 

    /**
     * Generate Years - array
     */
    generateYears() {
        let {startYear, endYear} = this.state
        let results = []
        let i
        for(i = startYear; i <= endYear; i++) {
            results.push(i)
        }
        this.setState({
            years: results
        })
    }

    render() {
        return <div style={Style.entirebody}>
            <Header 
                changeYears={this.changeYears.bind(this)} 
                generateYears={this.generateYears.bind(this)}/>
            <section style={Style.container}>
                <SideBar years={this.state.years}
                        currentYear={this.state.currentYear}
                        changeCurrentYear={this.changeCurrentYear.bind(this)}/>
                <Content  currentYear={this.state.currentYear}/>
            </section>
            <Footer />
        </div>
    }
}
export default Root