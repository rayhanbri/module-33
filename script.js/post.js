const posthandler = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      showPost(data)
    })
}


const showPost = (posts) => {
  // console.log(posts)
  let container = document.getElementById('post-div');
  for (let post of posts) {
    console.log(post)
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <p>${post.title}</p>
    <h1>${post.id}</h1>
                        <h2>${post.userId}
                        `
    container.appendChild(div)
  }

}