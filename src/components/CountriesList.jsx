import React from 'react'
import { Link } from 'react-router-dom'



function CountriesList(props) {
  const {countries} = props

  return (

        <div lassName="col-5" style={{maxheight: "90vh", overflow: "scroll"}}>


            {countries.map((country) => {
              return (
                <div className="list-group">

                <img  style={{height: "30px", width:"30px"}}
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={country.name.common}
                />

                  <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                  <p>{country.name.common}</p>
                  </Link>
                </div>
              )
            })}
      </div>
              

)}

export default CountriesList

/*
                        <div className="col-5" style={{maxheight: "90vh", overflow: "scroll"}} >
            <div className="list-group" >
            <Link className="list-group-item list-group-item-action" to="/ABW"
                >🇦🇼 Aruba</Link>
              <Link className="list-group-item list-group-item-action" to="/AFG"
                >🇦🇫 Afghanistan</Link>
              <Link className="list-group-item list-group-item-action" to="/AGO"
                >🇦🇴 Angola</Link>
              <Link className="list-group-item list-group-item-action" to="/AIA"
                >🇦🇮 Anguilla</Link>
              <Link className="list-group-item list-group-item-action" to="/ALA"
                >🇦🇽 Åland Islands</Link>
              <Link className="list-group-item list-group-item-action" to="/ALB"
                >🇦🇱 Albania</Link>
              <Link className="list-group-item list-group-item-action" to="/AND"
                >🇦🇩 Andorra</Link>
              <Link className="list-group-item list-group-item-action" to="/ARE"
                >🇦🇪 United Arab Emirates</Link>
              <Link className="list-group-item list-group-item-action" to="/ARG"
                >🇦🇷 Argentina</Link>
              <Link className="list-group-item list-group-item-action" to="/ARM"
                >🇦🇲 Armenia</Link>
              <Link className="list-group-item list-group-item-action" to="/ASM"
                >🇦🇸 American Samoa</Link>
              <Link className="list-group-item list-group-item-action" to="/ATA"
                >🇦🇶 Antarctica</Link>
              <Link className="list-group-item list-group-item-action" to="/FLK"
                >🇫🇰 Falkland Islands</Link>
              <Link
                className="list-group-item list-group-item-action active"
                href="/FRA"
                >🇫🇷 France</Link>
              <Link className="list-group-item list-group-item-action" to="/ZWE"
                >🇿🇼 Zimbabwe</Link>
            </div>
            </div>
 */