import React from 'react'
import '../css/Mentoring.css'
import {Link} from 'react-router-dom'

function Discuss() {
  return (
    <div>

        <div className="demo-inline-spacing bn-main">
            <button type="button" className="btn btn- bn-mentoring" > <Link to ="/mentoring"><h6 className='bn-word'>Roadmap</h6></Link></button>
            <button type="button" className="btn btn- bn-mentoring"><Link to ="/resources"><h6 className='bn-word'>Resources</h6></Link></button>
            <button type="button" className="btn btn-secondary bn-mentoring-main"><Link to ="/discuss"><h6 className='bn-word-main'>Discuss</h6></Link></button>
          </div>
    </div>
  )
}

export default Discuss