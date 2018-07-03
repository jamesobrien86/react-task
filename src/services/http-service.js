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

