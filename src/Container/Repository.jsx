import React from 'react'
import "../../public/Css/Repository.css"


function Repository({ user, repo }) {
  return (
    <div className="repo">
      <div>
        <div className="title">
        {/* className="fa fa-book pr-1" */}
          <i  />
          <a
            href={`https://github.com/${repo.full_name}`}
            target="_blank"
            rel="noopener norefferer"
            className='repo-name-anchor'
          >
            <span className='repo-link'>{repo.name}</span>
          </a>
        </div>
        <span className="description">{repo.description}</span>
      </div>
      <div className="d-flex">
        <div className="subitem">
          <i className="fa fa-code pr-1" />
          <span>{repo.language}<span>:Language</span></span>
        </div>
        <div className="subitem">
          <i className="fa fa-star pr-1" />
          <span>{repo.stargazers_count}<span>:Count</span></span>
        </div>
        <div className="subitem">
          <i className="fa fa-code-fork pr-1" />
          <span>{repo.forks_count}<span>:Forks</span></span>
        </div>
      </div>
    </div>
  )
}

export default Repository