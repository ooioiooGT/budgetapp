
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword , GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import { signOut } from "firebase/auth";
import { getFirestore, doc , setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDecGMFOsezi_vDNtv0k-ucQUYgWibWfBs",
  authDomain: "coludphoto.firebaseapp.com",
  projectId: "coludphoto",
  storageBucket: "coludphoto.appspot.com",
  messagingSenderId: "368641555436",
  appId: "1:368641555436:web:b88e6dc2cb64da37c31ec9",
  measurementId: "G-DCC5804W5K"
};

const app = initializeApp(firebaseConfig);
export const FIREBASE_auth = getAuth(app);
export const FIREBASE_db = getFirestore(app);

export let userid;

export const handellogin = async(email, password)=> { 
    try{
        await signInWithEmailAndPassword(FIREBASE_auth, email , password)
        userid = await FIREBASE_auth.currentUser.uid;
        console.log(userid);
        alert ('Login sucess! ')
        
    }catch(error){
        alert('Faild: '+ error)
    }
}

export const handelsignup = async(email, password) =>{
    try {
        await createUserWithEmailAndPassword(FIREBASE_auth, email, password)
        userid =  await FIREBASE_auth.currentUser.uid;
        console.log(userid);
        alert('Register sucess! ')
    }catch(error){
        ('Faild:' + error)
    }

}

export const googlesignin = async () => {
    const provider = await GoogleAuthProvider();
    try {
        await signInWithRedirect(FIREBASE_auth, provider);
        alert('success Signin')
    } catch (error) {
        alert('Failed: ' + error.message);
    }
}

export const handleSignOut = async () => {
    try {
      await signOut(FIREBASE_auth);
      console.log('User signed out successfully');
      // Here you can navigate the user back to the login screen or perform other actions
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };


// export const userid = FIREBASE_auth.currentUser.uid


export const adddata = async ( fName , lName) =>{
    await setDoc(doc(FIREBASE_db,'user',userid)),{
        fname: fName,
        lname: lName,
    }
}