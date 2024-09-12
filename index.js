let url = "https://jsonplaceholder.typicode.com/posts"

//1a. axios =JavaScript library used to make HTTP requests from both the browser and Node.js.

// axios.get(url).then(displayPosts);

// function displayPosts(response){
// console.log(response.data)
// }


//1b. arrow function using axios

axios.get(url).then( response =>{
    console.log(response.data)
})


//2. using a promise


// fetch(url)
// .then(response => {
//     return response.json()
// })
// .then(data =>{
//     console.log(data)
// })

