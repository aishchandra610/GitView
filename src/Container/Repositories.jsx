import React from 'react'
import "../../public/Css/Repositories.css"
import Repository from './Repository'

function Repositories({user,repos}) {
  return (
    <section className="repositories">
    {repos.map((repo) => (
      <Repository key={repo.id} repo={repo} user={user} />
      
    ))}
  </section>
  )
}

export default Repositories