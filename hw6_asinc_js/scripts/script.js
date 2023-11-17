import {body} from './Posts/post.js'
import * as request from "./api_helper/api_helper.js";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

// Task 1.
const getPost = await request.getPosts(baseUrl)
console.log(getPost)

const creatPost = await request.creatPosts(baseUrl)
console.log(creatPost)

//Task 2.
async function getPostsByUsedId(url, userId) {
    const data = await request.getPosts(url);
    const filteredData = data.filter((elem) => elem.userId === userId);
    filteredData.forEach((elem) => delete elem.title);
    return filteredData;
}

const posts = await getPostsByUsedId(baseUrl, 5);
console.log(posts); // маємо тільки пости юзера з id = 5, у яких нема title

// Task 3.
async function createNewPost(url, body) {
    const response = await fetch((url), {
        method: "post",
        body: JSON.stringify(body),
        headers: {"Content-Type": "application/json"}
    })
        .then(res => res.json())
    return  response;
}

const result = await createNewPost(baseUrl, body);
console.log(result); // повинен буди респонс у вигляді { userId: 155, title: 'New title', body: 'New body', id: 101 }

// Task 4.
function resolveNumber() {
    let randomNumber = Math.floor(Math.random() * 10);
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           if(randomNumber >= 5){
                resolve(`Resolved ${randomNumber}`)
        } else {
            reject(`Rejected ${randomNumber}`);
            }
        }, 3000);
    });
    return promise.then(
        resolve => console.log(resolve)
    ).catch(
        reject => console.log(reject)
    )
}

resolveNumber()//далі обробка промісу, в консолі або, наприклад, Resolved 7, або Rejected 2 (в залежності від рандомно створенного числа)