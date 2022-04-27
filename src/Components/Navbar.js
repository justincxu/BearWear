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
          {/* <div style={{ 
            backgroundImage: `url("https://t4.ftcdn.net/jpg/03/01/16/41/240_F_301164174_cwkA3lQmphf1wwemWEA6TYpmxtC4Fdnh.jpg")`,  
            marginTop: "8px" ,backgroundSize:'cover', backgroundPosition: 'center', height: '120px'

          }}> */}
          
                <div className="m-4">
                <div className="flex flex-col">
                    <Link className="text-3xl active font-bold" to={"/"}>BearWear</Link>
                    <div className="text-right">
                        <div className="">
                            <button onClick={logOut}>Log Out</button>
                        </div>
                    </div>
                </div>
                </div>
            {/* </div> */}
        </>    
    );
};

export default Navbar;