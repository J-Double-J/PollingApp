import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [signInUser, setSignInUser] = useState('');
    const [signInPass, setSignInPass] = useState('');

    const [createUser, setCreateUser] = useState('');
    const [createPass, setCreatePass] = useState('');

    const changeSignInUser = (event) => {
        setSignInUser(event.target.value);
    };

    const changeSignInPass = (event) => {
        setSignInPass(event.target.value)
    }

    const sendSignInRequest = async () => {
            const loginRequest = {
                "Username": signInUser,
                "Password": signInPass
            };

            try {
                const response = await fetch('/authentication', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginRequest)
                });
                const jsonData = await response.status;
                console.log('Status:', jsonData);
            }
            catch (error) {
                console.error('Error:', error);
                throw error;
            }
    }

    const changeCreateUser = (event) => {
        setCreateUser(event.target.value);
    };

    const changeCreatePass = (event) => {
        setCreatePass(event.target.value)
    }

    const sendCreateAccountRequest = async () => {
        const createAccountRequest = {
            "Username": createUser,
            "Password": createPass
        };

        try {
            const response = await fetch('/authentication/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(createAccountRequest)
            });
            const jsonData = await response.status;
            console.log('Status Code:', jsonData);
        }
        catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    return (
        <>
            <div>
                <label>
                    Username
                    <input name="username" value={signInUser} onChange={changeSignInUser} />
                </label>
                <label>
                    Password
                    <input name="password" value={signInPass} onChange={changeSignInPass} />
                </label>
                <button onClick={sendSignInRequest}>Sign in</button>
            </div><div>
                    <label>
                        Username
                    <input name="username" value={createUser} onChange={changeCreateUser } />
                    </label>
                    <label>
                        Password
                    <input name="password" value={createPass} onChange={changeCreatePass } />
                    </label>
                <button onClick={sendCreateAccountRequest }>Sign up</button>
            </div>
        </>
    );
}

export default App;