import {getTotal,getPercentage,cumulative, getTwenty} from './index';

const dummyArray = [{num:1},{num:2},{num:3},{num:4}];

test('Sums up an array', () => {        
    expect(getTotal(dummyArray,"num")).toBe(10);
});

test('Calculates the percentage',()=>{
    expect(getPercentage(25,100)).toBe(25);
})

test('Sums up partially',()=>{
    expect(cumulative(2,dummyArray,"num")).toBe(6);
})


test('Gives the 20% index',()=>{
    expect(getTwenty(dummyArray)).toBe(1);
})