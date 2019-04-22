const check = () => {
    if(!('serviceWorker' in navigator)){
        throw new Error('No Service Worker Support')
    }
    if(!('PushManager' in window)){
        throw new Error('Push Manager not supported')
    }
}

const registerServiceWorker = async () => {
    console.log('service worker support');
    const swRegistration = await navigator.serviceWorker.register('service.js');
    return swRegistration;
}

const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request
    if(permission !== 'granted'){
        throw new Error('Permission not granted for Notification');
    }
}

const showLocalNotification = (title, body, swRegistration) => {
    const options = {
        body, 
    };
    swRegistration.showLocalNotification(title, options);
}

const main = async () => {
    check();
    const swRegistration = await registerServiceWorker();
    const permission = await requestNotificationPermission();
    showLocalNotification('This is title', 'this is message', swRegistration);
}

// main();
