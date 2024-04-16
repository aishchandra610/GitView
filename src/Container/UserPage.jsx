import React, { useEffect, useState } from 'react';
import Navbar from "../Component/Navbar";
import Userinfo from './Userinfo';
import Tabs from './Tabs';
import Repositories from './Repositories';
import { getUserData , getUserRepo } from '../api/api';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import "../../public/Css/UserPage.css"

function UserPage() {

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    const { username } = useParams(); // Destructure the username from useParams()
    
    useEffect(() => {
        // Fetch user data and repos when component mounts
        fetchUser();
        fetchRepos();
    }, [username]); // Include username in the dependency array

    async function fetchUser() {
        try {
            const { data } = await getUserData(username); // Use username directly here
            setUser(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            // Handle error, maybe show a message to the user
        }
    }

    async function fetchRepos() {
        try {
            const { data } = await getUserRepo(username); // Use username directly here
            setRepos(data);
        } catch (error) {
            console.error("Error fetching user repos:", error);
            // Handle error, maybe show a message to the user
        }
    }

    return (
        <>
            {user ? (
                <div className='main-user-page'>
                    
                    <Navbar user={user} />
            
                    <div className="container">
                        <Userinfo user={user} />
                        <Tabs repos={repos} user={user} />
                        <Repositories repos={repos} user={user} />
                    </div>
                </div>
            ) : (
                <Loading />
            )} 
        </>
    );
}

export default UserPage;




