//bütün bağlantı işlemlerini burada hazırlayacağız

import io from "socket.io-client";

let socket;  //socket adında değişken oluşturduk.


export const init =() =>{ // bu init fonk. bağlantı sağlayacağım yerde kullanacağım (yani app js üzerinde)
    console.log("sunucuya bağlanılıyor ...")
    
    socket=io("http://localhost:3000",{
        transports: ["websocket"],
    });  //buraya direkt endpoint verirseniz oraya ilgili bağlantıyı gerçekleştirir

    socket.on("connect",() => console.log("sunucuya bağlantı başarıyla gerçekleşti ..."))
};


//backend e bir meseja göndermek için gerekli olan fonk

export const send = (color) =>{  //bir rengi parametre olarak alıcak iletecek o yüzden burada hemen verdik parametreyi

    socket.emit("newColor",color )  //emit : clientta isek backend e , backend de isek client a data göndermeyi sağlıyor.
                    //2 parametre alır. hangi kanala göndereceksin ve data ne
}


//kanala abone olmak
export const subscriber = (cb) => {
    socket.on("receive", (color) =>{  //socket.on backend den gelen kanalı dinliyor. gelen kanal receive şuan
                                        //back end den bir renk gelecek onu logladık
        console.log(color)
        cb(color)
    })
}