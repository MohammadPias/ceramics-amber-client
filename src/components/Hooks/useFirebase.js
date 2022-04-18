import { useEffect, useState } from 'react';
import firebaseInit from '../Authentication/Firebase/firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    getUserByEmail,
    signOut,

} from "firebase/auth";

const useFirebase = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false)

    firebaseInit()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // Google Sign in
    const handleGoogleSignIn = (navigate, destination) => {
        setLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {
                setLoading(false);
                navigate(destination)
                setUser(result.user);
                const newUser = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL
                };
                updateUser(newUser, 'PUT');
                setError('');
            }).catch((error) => {
                setError(error.message)
            });

    };

    // Sign up by Email Password
    const handleSignup = (email, password, name, photoUrl, navigate, destination) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');

                // update display name
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    // Profile updated!
                    setUser(userCredential.user);
                }).catch((error) => {
                    setError(error.message)
                });

                const newUser = {
                    displayName: name,
                    email: email,
                    photoURL: photoUrl
                };
                updateUser(newUser, 'POST')
                navigate('/login')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    };
    // sign in by email password
    const handleSignin = (email, password, navigate, destination) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('')
                navigate(destination)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    };
    // delete user
    const handleDeleteUser = (email) => {

    }


    // Sign out
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    // keep on-auth state change
    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(true)
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false);
            return () => unsubscribe;
        });
    }, []);

    // update user to database
    const updateUser = (newUser, method) => {
        fetch('https://agile-escarpment-29078.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newUser)
        })
    };

    // check admin
    useEffect(() => {
        fetch(`https://agile-escarpment-29078.herokuapp.com/users/admin/${user.email}`)
            .then(res => res.json())
            .then(result => setAdmin(result.isAdmin))
    }, [user?.email])
    return {
        user,
        error,
        loading,
        admin,
        handleGoogleSignIn,
        handleSignup,
        handleSignin,
        handleSignOut,
        handleDeleteUser
    }
};

export default useFirebase;