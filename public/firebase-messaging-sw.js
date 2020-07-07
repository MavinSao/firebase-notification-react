/* eslint-disable no-undef */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBLEt6ti8kRsIYcdG-u2M7De5Lni2QLlfY",
    authDomain: "react-notification-7c7be.firebaseapp.com",
    databaseURL: "https://react-notification-7c7be.firebaseio.com",
    projectId: "react-notification-7c7be",
    storageBucket: "react-notification-7c7be.appspot.com",
    messagingSenderId: "192957675150",
    appId: "1:192957675150:web:b0157a3491f12ef9b27bdf",
    measurementId: "G-M8BM9N1LK5"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();