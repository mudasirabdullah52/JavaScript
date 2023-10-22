// Normal promise style
// console.log('person1: show ticket');
// console.log('person2: show ticket');

// const promiseWifeBringingTicket = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("ticket")
//     }, 3000);
// });
// promiseWifeBringingTicket.then((t) => {
//     console.log(`person3: show ${t}`);
// });
// console.log('person4: show ticket');
// console.log('person5: show ticket');


// some advance example

// console.log('person1: show ticket');
// console.log('person2: show ticket');

// const promiseWifeBringingTicket = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("ticket")
//     }, 3000);
// });
// const getPopcorn = promiseWifeBringingTicket.then((t) => {
//     console.log('wife: i have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: in am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} pepcorn`));
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('Husband: i got popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i Need buuter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`));
// });

// getButter.then((t) => console.log(t))
// console.log('person4: show ticket');
// console.log('person5: show ticket');

// ****%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%55above colde using async and wait function%%%

// console.log('person1: show ticket');
// console.log('person2: show ticket');

// const preMovie = async () => {
//     const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("ticket"), 3000);
//     });

//     const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
//     const addbutter = new Promise((resolve, reject) => resolve('butter'));
//     const coldDring = new Promise((resolve, reject) => resolve("cold Drink"));

//     let ticket = await promiseWifeBringingTicket;
//     console.log(`wife i have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: in am hungry');

//     let popcorn = await getPopcorn;
//     console.log(`Husband: i got ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: i Need buuter on my popcorn');

//     let butter = await addbutter;
//     console.log(`husband: i got some ${butter} on popcorn`);
//     console.log('husband: anything ele darling');
//     console.log('wife:  need cold drink also');


//     let Drink = await coldDring;
//     console.log(`husband i got the ${Drink}`)
//     console.log('wife: lets go we are getting late');
//     console.log(" hasband: thanks you for the reminder")

//     return ticket;

// };
// preMovie().then((m) => console.log(` person3: show ${m}`))
// console.log('person4: show ticket');
// console.log('person5: show ticket');


// ***************************************************how to deal with error********************

// console.log('person1: show ticket');
// console.log('person2: show ticket');

// const preMovie = async () => {
//     const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//         setTimeout(() => reject("ticket"), 3000);
//     });

//     let ticket;
//     try {
//         ticket = await promiseWifeBringingTicket
//     } catch (e) {
//         ticket = "sad face";
//     }

//     return ticket;

// };
// preMovie().then((m) => console.log(` person3: show ${m}`))
// console.log('person4: show ticket');
// console.log('person5: show ticket');


// *%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% let check with real example how it is working%%%%%%%%%%%%%%%%%

console.log('person1: show ticket');
console.log('person2: show ticket');

const testUserForm = async () => {
    const loadUserForm = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Page loaded"), 3000);
    });

    const enterUserName = new Promise((resolve, reject) => {
        setTimeout(() => resolve("user entered"), 3000);
    });

    const verifyUserDetails = () => {

    }
    await loadUserForm;
    await enterUserName;
    verifyUserDetails();
    return testResult;

};
testUserForm().then((m) => console.log(` person3: show ${m}`))
console.log('person4: show ticket');
console.log('person5: show ticket');