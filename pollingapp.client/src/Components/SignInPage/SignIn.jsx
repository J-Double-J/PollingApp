import { useState } from 'react'
import './SignIn.css'

function SignIn() {
    const [signInUser, setSignInUser] = useState('');
    const [signInPass, setSignInPass] = useState('');

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

    return (
        <main>
            <h1>Data Pie Dreams</h1>
            <p>Welcome back to <em>Easy Data</em></p>
            <div className="form-container">
                <form>
                    <ul role="list">
                        <li>
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" value={signInUser} onChange={changeSignInUser} />
                            <a href="https://google.com">Forgot Username?</a>
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={signInPass} onChange={changeSignInPass} />
                            <a href="https://google.com">Forgot Password?</a>
                        </li>
                    </ul>

                    <button type="submit" onClick={sendSignInRequest}>Log In</button>
                    <p>New Baker? <a href="google.com">Create Account</a></p>
                </form>
            </div>
        </main>
        
  );
}

export default SignIn;