import React from 'react'
import "../../public/Css/Tabs.css"

function Tabs({ repos, user }) {
  return (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <p className="nav-link mb-0 active">Repositories {repos.length}</p>
            </li>

            <li className="nav-item">
                <a
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="nav-link mb-0"
                    href={`https://github.com/${user.login}?tab=packages`}>
 <p className="nav-link mb-0 active" >Packages</p>
 {/* Packages */}
                </a>
               
            </li>
            
            <li className="nav-item">
                <a target="_blank"
        rel="noopener noreferrer"
        className="nav-link mb-0"
        href={`https://github.com/orgs/${user.login}/people`}>
        <p className="nav-link mb-0 active" >People</p></a>
                
            </li>

            <li className="nav-item"> 
                <a  target="_blank"
                rel="noopener noreferrer"
                className="nav-link mb-0"
        href={`https://github.com/${user.login}?tab=projects`}> 
        <p className="nav-link mb-0 active" >Projects</p></a>
               
            </li>
        </ul>
    </div>
  )
}

export default Tabs