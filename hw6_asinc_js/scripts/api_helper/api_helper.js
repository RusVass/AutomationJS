
// import fetch from "node-fetch";

//======= Get ======
 async function getPosts(url) {
    const response = await fetch(url).then(res => res.json())

     return response

}
// ====Post========
 async function creatPosts(url) {
    const body = {};
    const response = await fetch((url), {
        method: "post",
        body: JSON.stringify(body),
        headers: {"Content-Type": "application/json"}
    })
        .then(res => res.json())

        return  response;

}
export {getPosts, creatPosts}






