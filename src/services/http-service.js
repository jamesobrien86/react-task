import 'whatwg-fetch';


export async function getPosts() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());

    const userMap = {};
    users.forEach(u => userMap[u.id] = u);

    return posts.filter(p => p.title && p.userId)
      .map(post => Object.assign({}, post, { user: userMap[post.userId].name }));
}


export async function getPostById(id) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json());

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(response => response.json());

    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json());


    return Object.assign({}, post, { user, comments });
}
