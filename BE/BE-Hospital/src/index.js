

import {doctorController} from './controllers/doctorController.js';
import { patientController } from './controllers/patientController.js';
import { managerController } from './controllers/managerCotroller.js';

import {
    getAuth, 
    signOut,    
    signInWithEmailAndPassword
} from 'firebase/auth';


const auth = getAuth();
let uid;
signOut(auth);
signInWithEmailAndPassword(auth, 'nguyenducanhtuan0602@gmail.com', '123456abc')
.then((cred) => {console.log('signInWithEmailAndPassword', cred.user.uid); uid = cred.user.uid})
.catch((error) => {console.log('error: ' + error)})

const managerAction = new managerController();
const date1 = new Date(2024, 5, 15); 
const date2 = new Date(2026, 5, 15); 
const date = new Date(2024, 3, 2); 

let action = await managerAction.addOnCallSchedule(date, '3goKrkzQIqSCoP1t64kNieRh8AG2');
//let action = await managerAction.updatePatient(date, 'dttam03@gmail.com', 'Tam', 'Male', '07803001034', 'Dang Tan', '0988965301');
//let action = await managerAction.deletePatient('07803001034');

console.log('ACTION: ', action);



// const app = new patientController();
// const myPromise = await app.addMedExamSch("hi", "hi", "3goKrkzQIqSCoP1t64kNieRh8AG2", "05420700984", );
// // console.log(myPromise);

  

