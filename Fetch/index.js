var postApi = "https://jsonplaceholder.typicode.com/todos";

fetch(postApi)
    .then((response) => response.json())
    .then((json) => console.log(json));
