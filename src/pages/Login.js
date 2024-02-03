import app from '../Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useCurrentUser } from '../UserContext';

function SignInSignUp() {
    const [login, setLogin] = useState(true);
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [oldEmail, setOldEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [role, setRole] = useState('solver');
    const { currentUser, setCurrentUser } = useCurrentUser();


    const auth = getAuth(app);
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

    const logInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User loggged in successfully with email:", user.email);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // Handle sign-in errors here
                alert(`Failed to sign in: ${errorMessage}`);
            });
    };

    const handleSignUp = () => {
        if (name && newEmail && newPassword && newEmail.includes('@') && newEmail.includes('.')) {
            if (role === 'solver') {
                // // Add user to 'solvers' collection
                // const db = app.firestore();
                // addDoc(collection(db, "solvers"), {
                //     name: name,
                //     email: newEmail,
                //     role: role
                // })
                //     .then((docRef) => {
                //         console.log("Document written with ID: ", docRef.id);
                //     })
                //     .catch((error) => {
                //         console.error("Error adding document: ", error);
                //     });
                setCurrentUser('solver');
            } else {
                // // Add user to 'publishers' collection
                // const db = app.firestore();
                // addDoc(collection(db, "publishers"), {
                //     name: name,
                //     email: newEmail,
                //     role: role
                // })
                //     .then((docRef) => {
                //         console.log("Document written with ID: ", docRef.id);
                //     })
                //     .catch((error) => {
                //         console.error("Error adding document: ", error);
                //     });
                setCurrentUser('publisher');
            }

            // createUser(newEmail, newPassword);
        } else {
            console.error("Error signing up.");
            alert("Please fill all fields to sign up.");
        }
    };

    const handleLogIn = () => {
        if (oldEmail && oldEmail.includes('@') && oldEmail.includes('.') && oldPassword) {
            setCurrentUser('publisher');
            // logInUser(oldEmail, oldPassword);
        } else {
            console.error("Error logging in.");
            alert("Please fill all fields to log in.");
        }
    };

    return (
        <div className="container mt-2 mx-auto pt-10 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-2/5">
                {login &&
                    <>
                        <div className={`flex flex-col justify-center p-8 ${login ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            <h1 className="font-bold text-xl mb-5">Sign in</h1>
                            <input type="email" placeholder="Email" value={oldEmail} className="input-field mb-4 p-2 border rounded" onChange={(e) => setOldEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={oldPassword} className="input-field mb-4 p-2 border rounded" onChange={(e) => setOldPassword(e.target.value)} />
                            {/* <h1 onClick={() => setLogin(false)} className="text-indigo-300 mb-4 hover:text-indigo-600">Forgot your password?</h1> */}
                            <h1 className="mb-4 pt-2">
                                <span> Don't have an account? </span>
                                <span onClick={() => setLogin(false)} className="cursor-pointer text-indigo-400 hover:text-indigo-600">
                                    Create an account
                                </span>
                            </h1>
                            <button onClick={handleLogIn} className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition-colors">Sign In</button>
                        </div>
                    </>
                }
                {!login &&
                    <>

                        <div className={`flex flex-col justify-center p-8 ${login ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                            <h1 className="font-bold text-xl mb-5">Create Account</h1>
                            {/* <span className="text-sm mb-5">Use your email for registration</span> */}
                            <input type="text" placeholder="Name" value={name} className="input-field mb-4 p-2 border rounded" onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder="Email" value={newEmail} className="input-field mb-4 p-2 border rounded" onChange={(e) => setNewEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={newPassword} className="input-field mb-4 p-2 border rounded" onChange={(e) => setNewPassword(e.target.value)} />
                            <div className="flex">
                                <button onClick={() => setRole('solver')} className={`font-bold py-2 px-4 rounded transition-colors w-1/2 mr-2 ${role === 'solver' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-400 border text-emerald-600'}`}>Solver</button>
                                <button onClick={() => setRole('publisher')} className={`font-bold py-2 px-4 rounded transition-colors w-1/2 ml-2 ${role === 'publisher' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-400 border text-emerald-600'}`}>Publisher</button>
                            </div>
                            <h1 className="mb-4 pt-2">
                                <span> Already have an account? </span>
                                <span onClick={() => setLogin(true)} className="cursor-pointer text-indigo-400 hover:text-indigo-600">
                                    Log in
                                </span>
                            </h1>
                            <button onClick={handleSignUp} className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition-colors">Sign Up</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default SignInSignUp;

