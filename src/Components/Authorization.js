// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword,
//      signInWithEmailAndPassword,
//      onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../firebase-config"; 

// function Authentication() {
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPw, setRegisterPw] = useState("");
//     const [signInEmail, setSignInEmail] = useState("");
//     const [signInPw, setSignInPw] = useState("");

//     const[user, setUser] = useState({});
//     let navigate = useNavigate();

//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     })
    
//     const register = async () => {
//         try {
//             const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPw);
//             console.log(user);
//             navigate("/Home")

//         } catch (error) {
//             console.log(error.message);
//         }
//     }

//     const signIn = async () => {
//         try {
//             const user = await signInWithEmailAndPassword(auth, signInEmail, signInPw);
//             console.log(user);
//             navigate("/Home")

//         } catch (error) {
//             console.log(error.message);
//         }
//     }

//     const logOut = async () => {
//         await signOut(auth);
//         navigate("/");
//     }

//     return (
//         <div className="flex flex-col">  
        
//             {user?.email}

//             <div className="flex flex-col">
//                 <div>Sign Up</div>
//                 <input type="text" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)} />
//                 <input type="password" placeholder="Password" onChange={(e) => setRegisterPw(e.target.value)}/>
//                 <button onClick={register}>Submit</button>
//             </div>
            

//             <div className="flex flex-col">
//                 <div>Sign In</div>
//                 <input type="text" placeholder="Email" onChange={(e) => setSignInEmail(e.target.value)}/>
//                 <input type="password" placeholder="Password" onChange={(e) => setSignInPw(e.target.value)}/>
//                 <button onClick={signIn}>Submit</button>
//             </div>

//             <button onClick={logOut}>Log Out</button>
//         </div>
//     )

// }
// export default Authentication