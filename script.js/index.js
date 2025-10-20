// const displayUser =() =>{
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then (response => response.json())
//   .then (data =>{
//     showUser(data)
//   })

// }

// const showUser = (users) =>{
//   const container = document.getElementById('user-ol')
  
//   for(let i=0; i<users.length;i++){
//     const user = users[i];
//     // console.log(user.name)
//     const li = document.createElement ('li');
//     li.innerText = user.name;
//     container.appendChild(li);
//   }
// }