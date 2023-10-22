// ********************************************CALL BACK FUNCTION****************************************
// posts = [
//     { title: 'post one', body: "this is the post one body" },
//     { title: 'post two', body: "this is the post two body" }
// ]

// function getPost() {

//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post, callback) {// call back is the simple call back function of get post
//     setTimeout(() => {
//         posts.push(post)
//         callback();
//     }, 2000)
// }

// createPost({ title: 'post three', body: "this is the post three body" }, getPost);


// **************************************************PROMISES*************************************************
// *******************************************Example first on promise****************************************

// posts = [
//     { title: 'post one', body: "this is the post one body" },
//     { title: 'post two', body: "this is the post two body" }
// ]

// function getPost() {

//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {// call back is the simple call back function of get post

//     return new Promise((resolve, raject) => {
//         setTimeout(() => {
//             posts.push(post)

//             const error = true;

//             if (!error) {
//                 resolve();
//             } else {
//                 raject('Something wrong');
//             }


//         }, 2000)
//     })
// }

// createPost({ title: 'post three', body: "this is the post three body" })
//     .then(getPost)
//     .catch(err => console.log(err));

// **************************************************************Example 2nd on promises***************************
// const posts = [{ title: 'Post One' }, { title: 'Post Two' }];

// //Do not touch this function below
// function printPost() {
//     posts.forEach((post) => {
//         console.log(post.title)
//     })
// }

// //Do not touch this function below
// function create3rdPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'post Three' });
//             resolve()
//         }, 3000)
//     })
// }

// //Do not touch this function below
// function create4thPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'post Four' });
//             resolve();
//         }, 2000)
//     })
// }

// // Correct the lines below smartly such that post three gets printed before post four
// create3rdPost().then(create4thPost).then(printPost)
// // create3rdPost()
// //     .then(() => {
// //         create4thPost()
// //             .then(() => {
// //                 printPost()
// //             })

// //     })
// **************************************************MCQ ON PROMISES*****************************************


// console.log('start')
// const promise1 = new Promise((resolve, reject) => {

//     console.log(1)
// })
// console.log('end');

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)

//     // resolve(2)

//     // console.log(3)

// })
// promise1.then(res => {

//     console.log(2)

// })
// console.log('end');

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// console.log('start')
// const fn = () => (new Promise((resolve, reject) => {

//     console.log(1);

//     resolve('success')

// }))

// console.log('middle')

// fn().then(res => {

//     console.log(res)

// })

// console.log('end')

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// console.log('start')
// Promise.resolve(1).then((res) => {
//     console.log(res)
// })
// Promise.resolve(2).then((res) => {
//     console.log(res)
// })
// console.log('end');  // START END 1 2

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// console.log('start')
// setTimeout(() => {
//     console.log('setTimeout')
// })
// Promise.resolve().then(() => {
//     console.log('resolve')
// })
// console.log('end')// START END RESOLVE SETTIMEOUT
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//         console.log("timerStart");
//         resolve("success");
//         console.log("timerEnd");
//     }, 0);
//     console.log(2);

// });
// promise.then((res) => {
//     console.log(res);
// });
// console.log(4); //1 2 4 timerstart timerend seccess

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// const timer1 = setTimeout(() => {
//     console.log('timer1');
//     const promise1 = Promise.resolve().then(() => {
//         console.log('promise1')
//     })
// }, 0)
// const timer2 = setTimeout(() => {
//     console.log('timer2')
// }, 0)// timer1 promise1 timer2

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// console.log('start');
// const promise1 = Promise.resolve().then(() => {

//     console.log('promise1');

//     const timer2 = setTimeout(() => {

//         console.log('timer2')

//     }, 0)

// });
// const timer1 = setTimeout(() => {

//     console.log('timer1')

//     const promise2 = Promise.resolve().then(() => {

//         console.log('promise2')

//     })

// }, 0)

// console.log('end');// start end promise1 timer1 promse2 timer2

// const promise1 = new Promise.resolve('hellow');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, "GoodBye")
// );
// Promise.all(promise1, promise2, promise3).then(values => console.log(values));