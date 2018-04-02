import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database =  firebase.database();

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
        
//     });

// database.ref('expenses').push({
//     description: 'Internet Bill',
//     note: 'Note 1',
//     amount: 8250,
//     createdAt: 100
// });

// database.ref('notes/-L93LxyWKwVKqzxFh9gm').update({
//     body: 'Buy food'
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Native, Python'
// });

// const firebaseNotes = {
//     notes: {
//         ahdbaiwh:{
//             title: 'First Note',
//             body: 'This is my note'
//         }, 
//         ahdewrwf:{
//             title: 'Second Note',
//             body: 'This is my other note'
//         }

//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First Note',
//     body: 'This is my note'
// }, {
//     id: '45',
//     title: 'Second Note',
//     body: 'This is my other note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const personData = snapshot.val();
//     console.log(`${personData.name} is a ${personData.job.title} at ${personData.job.company}.`);
    
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(() => {
//         console.log('Error fetching Data.', e);
//     });

// database.ref().set({
//     name: 'Teja Maripuri',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Chicago',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch(() => {
//     console.log('This failed.');
// });

// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
// });

// database.ref().remove().then(() => {
//     console.log('Remove sucess');    
// }).catch(() => {
//     console.log('Remove Failed');
    
// });