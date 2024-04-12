import { useEffect, useState } from 'react';
import './App.css';

function App() {
    return (
        <body>
            <div>
                <label>
                    Username
                    <input name="username"/>
                </label>
                <label>
                    Password
                    <input name="password"/>
                </label>
                <button>Sign in</button>
            </div>
            <div>
                <label>
                    Username
                    <input name="username" />
                </label>
                <label>
                    Password
                    <input name="password" />
                </label>
                <button>Sign up</button>
            </div>
        </body>
    );
}

export default App;