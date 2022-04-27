import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";  

function Navbar () {
    let navigate = useNavigate();
    const logOut = async () => {
        await signOut(auth);
        navigate("/");
    }
    return (
        <>
            <div className="flex flex-col m-4">
                <Link className="text-3xl active font-bold" to={"/"}>BearWear</Link>
                <div className="text-right">
                    <div className="">
                        <button onClick={logOut}>Log Out</button>
                    </div>
                </div>
            </div>
        </>
       
    );
};

export default Navbar;