'use strict';

const events=require('./events');

function pickup(payload){
    console.log(`DRIVER: picked up ${payload.payload.orderId}`);
    setTimeout(()=>{
        events.emit('inTransit,payload',payload);

    }, 1000)
}

function deliverd(payload){
    payload.events='inTransit';
    payload.time=new Date().toDateString();
    console.log('event',payload);
    setTimeout(()=>{
        events.emit('deliverd',payload);

    }, 3000)
}
module.exports={
    pickup,deliverd
}