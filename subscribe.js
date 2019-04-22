import axios from 'axios';
export default function subscribePush(){
    navigator.serviceWorker.ready.then(registration => {
        if(!registration.pushManager){
            alert("Push notification is not supported")
            return
        }
       
        const applicationServerKey = urlBase64ToUint8Array('BHdr03Mr4ZU7A2C0kfLCtFQ_Dsl3vFVZL251jtAwVJC_bwKm9p8XIPD38x0BR7mgKjVACAhuCi6LTWWa1gMfOqM=');
        
        registration.pushManager
            .subscribe({
                userVisibleOnly: true,
                applicationServerKey: converted
            })
    })
}