import firebase from 'firebase';

export const initializeFirebase = () => {
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
}

export const askForPermissioToReceiveNotifications = async () => {
    try {

        const messaging = firebase.messaging();

        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('user token: ', token);

        return token;
    } catch (error) {
        console.error(error);
    }
}
