import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useParams} from 'react-router-dom'



function CountryDetails() {
    const [oneCountry, setOneCountry] = useState(null)
    const {countryId} = useParams()
    
    const getFromApi = async () => {
        try {
            const apiCall = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        
            setOneCountry(apiCall.data)
          } catch (error) {
            console.log(error)
          }
        }

        useEffect(() => {
            getFromApi()
          }, [countryId]);

  return (
    <div className="col-7">
    {oneCountry && (
        <>
        <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
            alt={oneCountry.name.common}
        />

            <p> Country: {oneCountry.name.common}</p>
            <p> Capital: {oneCountry.capital}</p>
            <p> Area: {oneCountry.area}</p>
            <p>Borders: </p>
            {oneCountry.borders.map((country) => {
                return (
                    <p>{country}</p>
                )
            })}

        </>
        )}
    </div>
  )
}

export default CountryDetails

/* 
<h1>France</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width: "30%"}}>Capital</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
            551695 km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li><Link to="/AND">Andorra</Link></li>
              <li><Link to="/BEL">Belgium</Link></li>
              <li><Link to="/DEU">Germany</Link></li>
              <li><Link to="/ITA">Italy</Link></li>
              <li><Link to="/LUX">Luxembourg</Link></li>
              <li><Link to="/MCO">Monaco</Link></li>
              <li><Link to="/ESP">Spain</Link></li>
              <li><Link to="/CHE">Switzerland</Link></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
 */