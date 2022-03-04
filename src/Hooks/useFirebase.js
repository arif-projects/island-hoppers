import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();


const useFirebase=()=>{
    const [users,setUsers] = useState({});
    const[isLoading,setIsLoading] = useState(true);

    const auth = getAuth();


    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)

        .then(result =>{
            setUsers(result.user);
        })
        .finally(()=>setIsLoading(false));

    }
//observ user state changed
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUsers(user);
            }
            else{
                setUsers({ });
            }
            setIsLoading(false);
        });
        return ()=> unsubscribed;
    },[])



    const logOut = ()=>{
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false));
    }

    return {
        users,
        signInUsingGoogle,
        isLoading,
        logOut
    }
}


export default useFirebase;