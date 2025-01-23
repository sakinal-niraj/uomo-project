// type of data
export interface NumStr {
    id: number;
    label: string;
}

// Company
export const comapnyData: NumStr[] = [
    {id:1,label:'About Us'},
    {id:2,label:'Careers'},
    {id:3,label:'Affiliates'},
    {id:4,label:'Blog'},
    {id:5,label:'Contact Us'},
]


// Shop
export const shopData: NumStr[] = [
    {id:1,label:'New Arrivals'},
    {id:2,label:'Accessories'},
    {id:3,label:'Men'},
    {id:4,label:'Women'},
    {id:5,label:'Shop All'},
];


// Help
export const helpData: NumStr[] = [
    {id:1, label:'Customer Service'},
    {id:2, label:'My Account'},
    {id:3, label:'Find a store'},
    {id:4, label:'Legal & Privacy'},
    {id:5, label:'Contact'},
    {id:6, label:'Gift Card'},
]


// Opening time
export const openingData: NumStr[] = [
    {id:1, label:'Mon - Fri: 8AM - 9PM'},
    {id:2, label:'Sat: 9AM - 8PM'},
    {id:3, label:'Sun: Closed'},
]