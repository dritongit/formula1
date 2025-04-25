import React from 'react'

//Style
import Style from '../Style'

// This Component represent Winners
class WinnerRow extends React.Component {

    render() {
        let { item, champion } = this.props
        let results = item.Results || []
        let winner = results.find(next => next.position == 1)

        // When missing the winner: Do not show the row
        if(!winner) {
            return <div style={{ display: 'none' }} />
        }
        
        let constructor = winner.Constructor
        let driver = winner.Driver
        let time = winner.Time
        let isChampion = false
        let isHighlighted = champion.driver.driverId === driver.driverId ? 'rgb(66, 133, 244)' : 'rgb(97, 97, 97)'
        
        return <div style={Object.assign({color: isHighlighted}, Style.row)}>
                        <span style={Style.detail}>{driver.givenName + ' ' + driver.familyName}</span>
                        <span style={Style.detail}>{item.raceName}</span>
                        <span style={Style.detail}>{time.time}</span>
                        <span style={Style.detail}>{winner.points}</span>
                    </div>
        
    }
}

export default WinnerRow;