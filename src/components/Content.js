import React, { Component } from 'react'

//Services 
import ResultsService from '../services/ResultsService'

//Chunk component
import WinnerRow from './WinnerRow'

//Style
import Style from '../Style'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            winner: null,
            isLoading: false,
            error: null
        }
    }


    /**
    * Is invoked immediately after a component is mounted and will load the data
    */
    componentDidMount() {
        this.loadData()
    }

    /**
     * Is invoked immediately after updating occurs. This method is not called for the initial render.
     * When the year has been changed
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentYear !== this.props.currentYear) {
            this.loadData()
        }
    }

    /**
    * Load data from API
    */
    loadData() {
        let { currentYear } = this.props

        if (!currentYear) {
            return
        }
        // Reset States
        this.setState({
            isLoading: true,
            error: null,
            champion: null,
            items: []
        })

        let service = new ResultsService()
        // Do the api call
        return service.fetchResulstsForYear(currentYear)
            .then(this.onSuccess.bind(this), this.onError.bind(this))
    }

    onSuccess(response) {
        //Change States on success
        console.log('response', response)
        this.setState({
            items: response.races,
            champion: response.champion,
            isLoading: false
        })
    }

    onError(error) {
        this.setState({
            error: error.message || 'Failed to get the resulsts',
            isLoading: false
        })
    }  

    renderWinnerRow(item, index) {
        let { champion } = this.state
        return <WinnerRow key={index} champion={champion} item={item} />
    }

    renderChampion() {
        let { champion } = this.state
        console.log(champion)
        if (!champion) {
            return <div />
        }
        let driver = champion.driver

        return ( <div style={Style.row}>
                        <span style={Style.detail}>{driver.givenName + ' ' + driver.familyName}</span>
                        <span style={Style.detail}>--</span>
                        <span style={Style.detail}>--</span>
                        <span style={Style.detail}>{champion.points}</span>
                    </div>
        )
    }

    render() {
        let { items, isLoading, error } = this.state

        isLoading ? 'none' : 'block'
        return <section style={Object.assign({display: isLoading}, Style.content)}>
             <div style={Object.assign({padding: '0 10px'}, Style.champion)}>
                    <div  style={Style.title}>Champion</div>
                     <div style={Style.row}>
                       <span style={Style.detail}>Name</span>
                       <span style={Style.detail}>Constructor</span>
                       <span style={Style.detail}> -- </span>
                       <span style={Style.detail}>Points</span>
                    </div>
                   {this.renderChampion()}
                </div>
                <div style={{padding: '0 10px',marginTop: '50px'}}>
                    <div  style={Style.title}>Winners</div>
                    <div style={Object.assign({marginBottom: '10px'}, Style.row)}>
                        <span style={Style.detail}>Driver</span>
                        <span style={Style.detail}>Constructor</span>
                        <span style={Style.detail}>Time</span>
                        <span style={Style.detail}>Points</span>
                    </div>

                </div>
                <div style={Object.assign({padding: '10px'}, Style.winners)}>
                    {items.map(this.renderWinnerRow.bind(this))}
                </div>
        </section>

    }
}
export default Content