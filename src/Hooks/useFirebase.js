import {
    getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
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

    // Create signIn With Email And Password function
    const signUpWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    };

    //  update user name
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
        })
    }
    // create login with password and email function
    const logInWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

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
    }, []);

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
        signUpWithPassword,
        logInWithPassword,
        updateName,
        LogOut
    };
};

export default UseFirebase;