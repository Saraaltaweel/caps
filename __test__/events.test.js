'use strict';

const driver=require('../driver');
const vendor=require('../vendor');

console.log=jest.fn();

describe('test the vendor',()=>{
    const payload={
        event:'pickup',
        time:'2020-03-06T18:27:17.732Z',
        payload:{
            store: '1-206-flowers',
            orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
            customer: 'Jamal Braun',
            address: 'Schmittfort, LA',
        },
    };

    it('vendor should console.log',()=>{
        vendor.thankYou(payload);
        expect(console.log).toHaveBeenCalled();
    })

    
    it('driver pickup should console.log',()=>{
        driver.pickup(payload);
        expect(console.log).toHaveBeenCalled();
    })
    it('driver deliverd should console.log',()=>{
        driver.deliverd(payload);
        expect(console.log).toHaveBeenCalled();
    })
    
})

