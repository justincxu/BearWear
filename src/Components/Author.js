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
     <div class="text-center text-5xl mt-40 font-bold">
          BearWear
     </div>
          <div class="text-center">
               digitialize your closet
          </div>
          <div class="flex flex-col justify-center items-center mt-8">    
          <img class= "object-scale-down h-48 w-96" src={bearlogo}></img>
     <div class="space-x-20 space-y-30 border-solid" >
          <Link class="space-x-30" to={"/SignIn"}>SignIn</Link>
          <Link class="space-x-30" to={"/SignUp"}>SignUp</Link>
     </div>
</div>
</>
)
}

export default Author;