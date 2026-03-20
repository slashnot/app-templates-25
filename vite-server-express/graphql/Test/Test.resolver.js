import TestDef from "./Test.gql"
import { taffy } from "../../taffy"
import { prisma } from "../../prisma/client/prisma"

let usersDb = taffy([]);
let postsDb = taffy([]);

const init = async () => {
    try {
        const requestUsers = await fetch("http://jsonplaceholder.typicode.com/users");
        const requestPosts = await fetch("http://jsonplaceholder.typicode.com/posts");

        if (!requestUsers.ok || !requestPosts.ok) {
            throw new Error(`Failed to fetch data: ${!requestUsers.ok ? 'users' : 'posts'} request failed`);
        }

        const posts = await requestPosts.json();
        const users = await requestUsers.json();

        usersDb = taffy(users);
        postsDb = taffy(posts);

        console.log(`API initialized with ${users.length} users and ${posts.length} posts`);
    } catch (error) {
        console.error('Error initializing API data:', error.message);
        console.warn('Continuing with empty databases');
    }
}
await init()

const Query = {
    Users: async () => {
        return await prisma.user.findMany()
    },
    Posts: async () => {
        return postsDb().get()
    }
}

const TestResolver = { Query }
export { TestDef, TestResolver }