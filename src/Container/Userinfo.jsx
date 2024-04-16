import React from 'react'
import "../../public/Css/Userinfo.css"

function Userinfo({user}) {
  return (
    <div className="user-infos">
        
        <img src={user.avatar_url}
                width='50' height='50'
                className="p-2 avatar"
            alt="" />
        <div  className="user"> 
            <h5>{user.name} </h5>
            
            { user.location &&(
            <div className="info">
                <i className="fa fa-map-marker pr-1"/>
                <span>{user.location} Location</span>
            </div>
            )}
            
            { user.blog &&
            (<div className="info">
            <i className="fa fa-globe pr-1" />
                <span>{user.blog} Blog</span>
            </div>
            )}

            {user.email &&(
            <div className="info">
            <i className="fa fa-envelope pr-1" />
                <span>{user.email} Email</span>
            </div>
            )}

            {user.followers && (
            <div className="info">
            <i className="fa fa-group" />
                <span>{user.followers} Followers</span>
            </div>
            )}

            {user.following &&(
            <div className="info">
            <i className="fa fa-heart pr-1" />
                <span>{user.following} Following</span>
            </div>
            )}
        </div>
    </div>
  )
}

export default Userinfo