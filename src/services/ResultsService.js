// Third party for API - whatwg-fetch
import 'whatwg-fetch'
let API_ENDPOINT = 'http://ergast.com/api'

// Result Service Class
class ResulstsService {
	
    /**
    * Fetch Results for each year, using third party module
    */
	fetchResulstsForYear(year) {
        let limit = 1000
        let offset = 0
        console.log('getting results', `${API_ENDPOINT}/f1/${year}/results.json?limit=${limit}&offset=${offset}`)
		return fetch(`${API_ENDPOINT}/f1/${year}/results.json?limit=${limit}&offset=${offset}`)
            .then(response => {
              if (response.status >= 200 && response.status < 300) {
                return response
              } else {
                return response.json().then((body) => {
                  let message = body && body.message
                  if(_.isArray(message)) {
                    message = message.join(", ")
                  }
                  throw {
                    code: response.status,
                    message: message || response.statusText
                  }
                })
            }
        })
        .then(response => response.json())
        .then(json => {
        	console.log('json', json)
        	return this._formatResponse(json)
        })
	}


	_formatResponse(json) {
        let races = json.MRData.RaceTable.Races
        let champion = this._extractChampionFrom(races)
        return {
        	races: races,
        	champion
        }
	}

    /**
    * Find the Champion, by adding points for each driver and grouped by points
    */
	_extractChampionFrom(races) {
        let groupedResults = []
        let max = 0
        races.forEach(race => {
            let results = race.Results || []
            results.forEach(result => {
                let driver = result.Driver
                let points = parseInt(result.points)

                let found = groupedResults.find(which => which.driver.driverId === driver.driverId)
                if (found) {
                    points += found.points
                    groupedResults = groupedResults.map(next => {
                        if(next.driver.driverId === driver.driverId) {
                            return Object.assign({}, next, {
                                points
                            })
                        }
                        return next
                    })
                } else {
                    groupedResults = [...groupedResults, {
                        driver,
                        points
                    }]
                }
                max = Math.max(max, points)
            })
        })
        
        if(groupedResults.length === 0) {
            return null
        }
        console.log('grouped', groupedResults)
        return groupedResults.find(which => which.points === max)
    }
}

export default ResulstsService