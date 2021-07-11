'use strict';

const events=require('./events');

function pickup(payload){
    console.log(`DRIVER: picked up ${payload.payload.orderId}`);
    setTimeout(()=>{
        events.emit('inTransit,payload');

    })
}

function deliverd(payload){
    payload.events='inTransit';
    payload.time=new Date();
    console.log('event',payload);
    setTimeout(()=>{
        events.emit('deliverd',payload);

    })
}
module.exports={
    pickup,deliverd
}