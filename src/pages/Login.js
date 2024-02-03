import app from '../Firebase';
import React, { useState } from 'react';
import { useCurrentUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


function SignInSignUp() {
    const [login, setLogin] = useState(true);
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [oldEmail, setOldEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [role, setRole] = useState('solver');
    const { currentUser, setCurrentUser } = useCurrentUser();
    const navigate = useNavigate();
    const db = firebase.firestore();

    async function findUser(email) {
        console.log("Finding user with email:", email);
        const emailUsersSnapshot = await db.collection("Roles").where("email", "==", email).get();
        if (emailUsersSnapshot.size > 1) {
            // const firstUser = emailUsersSnapshot.docs[0].data();
            return null;
        }
        // console.log("First user's name:", emailUsersSnapshot.docs[0].data().name);
        return emailUsersSnapshot.docs;
    }

    const handleSignUp = async () => {
        if (name && newEmail && newPassword && newEmail.includes('@') && newEmail.includes('.')) {
            const docs = await findUser(newEmail);
            if (!docs) {
                console.error("Found users with same email.");
                alert("Found users with same email.");
                return
            }
            if (docs.length === 0) {
                if (role === 'solver') {
                    // user = createUser(newEmail, newPassword);
                    // Add user to 'solvers' collection
                    try {
                        await db.collection("Workers").add({
                            name: name,
                            email: newEmail,
                            user_id: newEmail,
                        });
                        setCurrentUser([newEmail, 'solver']);
                    } catch (error) {
                        console.error("Error adding solver document: ", error);
                        alert("Error adding solver document: ", error);
                        return
                    }
                } else {
                    // Add user to 'publishers' collection
                    // user = createUser(newEmail, newPassword);
                    try {
                        await db.collection("Publishers").add({
                            name: name,
                            email: newEmail,
                            user_id: newEmail,
                        });
                        setCurrentUser([newEmail, 'publisher']);
                    } catch (error) {
                        console.error("Error adding publisher document: ", error);
                        alert("Error adding publisher document: ", error);
                        return
                    }
                }

                try {
                    await db.collection("Roles").add({
                        name: name,
                        email: newEmail,
                        user_id: newEmail,
                        role: role,
                        password: newPassword,
                    });
                } catch (error) {
                    console.error("Error adding role document: ", error);
                    alert("Error adding role document: ", error);
                    return
                }
            } else if (docs.length === 1) {
                console.error("Email alreeady exists.");
                alert("Email already exists. Please log in.");
                return
            }
            navigate('/');
        } else {
            console.error("Error signing up.");
            alert("Please fill all fields to sign up.");
        }
    };

    const handleLogIn = async () => {
        if (oldEmail && oldEmail.includes('@') && oldEmail.includes('.') && oldPassword) {
            // setCurrentUser('publisher');
            const docs = await findUser(oldEmail);
            if (!docs) {
                console.error("Found users with same email.");
                alert("Found users with same email.");
                return
            }
            if (docs.length === 0) {
                console.error("Email does not exist.");
                alert("Email does not exist.");
            } else if (docs.length === 1) {
                if (oldPassword !== docs[0].data().password) {
                    console.error("Wrong password.");
                    alert("Wrong password.");
                    return
                }
                console.log("Logged in as: ", oldEmail);
                setCurrentUser([oldEmail, docs[0].data().role]);
                navigate('/');
            }
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
                            <h1 className="font-bold text-xl mb-5">Log In</h1>
                            <input type="email" placeholder="Email" value={oldEmail} className="input-field mb-4 p-2 border rounded" onChange={(e) => setOldEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={oldPassword} className="input-field mb-4 p-2 border rounded" onChange={(e) => setOldPassword(e.target.value)} />
                            {/* <h1 onClick={() => setLogin(false)} className="text-indigo-300 mb-4 hover:text-indigo-600">Forgot your password?</h1> */}
                            <h1 className="mb-4 pt-2">
                                <span> Don't have an account? </span>
                                <span onClick={() => setLogin(false)} className="cursor-pointer text-indigo-400 hover:text-indigo-600">
                                    Create an account
                                </span>
                            </h1>
                            <button onClick={handleLogIn} className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition-colors">Log In</button>
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
                                <button onClick={() => setRole('solver')} className={`font-bold py-2 px-4 rounded transition-colors w-1/2 mr-2 ${role === 'solver' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-400 border text-emerald-600'}`}>
                                    Solver
                                </button>
                                <button onClick={() => setRole('publisher')} className={`font-bold py-2 px-4 rounded transition-colors w-1/2 ml-2 ${role === 'publisher' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-400 border text-emerald-600'}`}>
                                    Publisher
                                </button>
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

