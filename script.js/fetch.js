// Json placeholder 

// what is fetch 
// fetch() is a built-in JavaScript function used to get data from a server or send data to a server — usually through an API (Application Programming Interface).

//what is promise 
// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation (like fetching data from a server).

// In simple terms —
// 👉 A Promise waits for something to finish (like a network request), and then gives you the result when it’s ready.

// what is res.json()
// response.json() is a method in JavaScript that is used to parse (convert) the data received from a fetch() request into a usable JavaScript object.

//what is then 
// .then() is a method used with JavaScript Promises.

// When you work with asynchronous operations (like fetching data from an API, reading a file, etc.), those actions don’t finish immediately — they return a Promise.

// The .then() method lets you handle what happens after that Promise finishes (resolves successfully).

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // it basucally parse the  promse 
//     .then(res => res.json())
//     .then(data => console.log(data))
    




// fetch ('https://jsonplaceholder.typicode.com/todos/1')
// .then(res=>console.log(res))
// .then(data =>{
//   console.log(data)
// })


// const handle = ()  => {
//   fetch ('https://jsonplaceholder.typicode.com/todos/1')
// .then(res=>res .json())
// .then(data =>{
//   console.log(data)
// })
// }