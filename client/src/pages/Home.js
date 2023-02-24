import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Home({user, currentUser}) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);

    const params = useParams();
    const {id} = params;
    useEffect(() => {
        fetch(`/users/${id}`)
        .then(r => {
            if(r.ok){
                r.json()
                .then(user => {
                    setUser(user) 
                    setLoading(false)
                })
            } else {
                r.json()
                .then(data => setErrors(data.error));
            }
        });
    });

    useEffect(() => {
        fetch ("/users") 
        .then (r => r.json())
        .then (setUser => user);
    }, []); 

    if(loading) return <h1>Loading...</h1>
    if(errors) return <h1>{errors}</h1>
    return ( 
        <>
        if (currentUser == user) {
            <div>
                <Header>Hello, ${currentUser.user}</Header>
                <h1>Don't forget to do your dailies!</h1>
                <h1>Current ursus time is 10:00 PM - 2:00 PM & 5:00PM - 9:00 PM PST</h1>
            </div>
        }
        </>
    )
}
export default Home; 