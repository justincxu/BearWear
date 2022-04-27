import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Link } from 'react-router-dom'; 
import bearlogo from "../bearwearlogo.png";

function Author() {

return ( 
<>

     <div class="text-center text-5xl mt-36 font-bold">
          BearWear
     </div>
          <div class="text-center text-l">
               digitialize your closet
          </div>
          <div class="flex flex-col justify-center items-center mt-8">    
          <img class= "object-scale-down h-48 w-96" src={bearlogo}></img>
     <div class="space-x-24 space-y-30 border-solid m-10" >
          <Link class="space-x-30 mt-2 w-48 lg:w-3/4 p-2 border border-6 border-blue-800 rounded-3xl text-center hover:bg-sky-700 bg-sky-200" to={"/SignIn"}>Sign In</Link>
          <Link class="space-x-30 mt-2 w-48 lg:w-3/4 p-2 border border-6 border-blue-800 rounded-3xl text-center hover:bg-sky-700 bg-sky-200" to={"/SignUp"}>Sign Up</Link>
     </div>
</div>
</>
)
}

export default Author;