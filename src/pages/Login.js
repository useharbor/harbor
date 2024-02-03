// import React from 'react';

// export default function Home() {
//     return (
//         <div className="App">
//             <header className="bg-indigo-300">
//                 YAY
//             </header>
//         </div>
//     );
// }

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import React, { useState } from 'react';

function SignInSignUp() {
    const [login, setLogin] = useState(true);


    const auth = getAuth();
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // Additional actions upon successful signup, if needed
                console.log("User created successfully with email:", user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Handle errors here
                console.error("Error creating user:", errorCode, errorMessage);
            });
    };

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <div className="container mt-2 mx-auto pt-10 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-2/5">
                {!login &&
                    <>

                        <div className={`flex flex-col justify-center p-8 ${login ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                            <h1 className="font-bold text-xl mb-5">Create Account</h1>
                            {/* <span className="text-sm mb-5">Use your email for registration</span> */}
                            <input type="text" placeholder="Name" className="input-field mb-4 p-2 border rounded" />
                            <input type="email" placeholder="Email" className="input-field mb-4 p-2 border rounded" />
                            <input type="password" placeholder="Password" className="input-field mb-4 p-2 border rounded" />
                            <h1 className="mb-4">
                                <span onClick={() => setLogin(true)} className="cursor-pointer text-indigo-300 hover:text-indigo-600">
                                    Already have an account?
                                </span>
                            </h1>
                            <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition-colors">Sign Up</button>
                        </div>
                    </>

                }

                {login &&
                    <>
                        <div className={`flex flex-col justify-center p-8 ${login ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            <h1 className="font-bold text-xl mb-5">Sign in</h1>
                            <input type="email" placeholder="Email" className="input-field mb-4 p-2 border rounded" />
                            <input type="password" placeholder="Password" className="input-field mb-4 p-2 border rounded" />
                            {/* <h1 onClick={() => setLogin(false)} className="text-indigo-300 mb-4 hover:text-indigo-600">Forgot your password?</h1> */}
                            <h1 className="mb-4">
                                <span onClick={() => setLogin(false)} className="cursor-pointer text-indigo-300 hover:text-indigo-600">
                                    Don't have an account?
                                </span>
                            </h1>
                            <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition-colors">Sign In</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default SignInSignUp;

