import React from 'react'
import {Bookmark} from 'lucide-react'

function Components(props) {
  return (
    <div> 
        <div className="card">
           
        <div className="top">
           <img src={props.logo} alt="hello" />
             <button>Save<Bookmark size={10}/></button>
        </div>
        <div className="center">
          <h3> {props.company} <span>{props.post}</span></h3>
          <h2>{props.role}</h2>
          <div className="info">
            <h4>{props.tag}</h4>
            <h4>{props.tags}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
          <h3>{props.pay}</h3>
          <p>{props.company.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div></div>
  )
}

export default Components