import {
    getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializAuthentication from "../Firebase/firebase.init";




initializAuthentication();

const UseFirebase = () => {
    // Create state for update data
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // Create GoogleAuthProvider and auth 
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // create SignInWithGoogle function
    const SignInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    };


    // Create onAuth Change function
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[]);

    // Create Logout function
    const LogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => {
                setIsLoading(false);
            })
    };

    // Return Value from here
    return {
        SignInWithGoogle,
        isLoading,
        setIsLoading,
        user,
        LogOut
    };
};

export default UseFirebase;