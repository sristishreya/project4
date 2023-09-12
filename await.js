const post=[];
function createPost(a){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const name=a;
            post.push(name);
            resolve(name);
            reject("error");
    })
    })
}
function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const x=new Date();
            resolve(x);
            reject("error");
        },1000)
        
    })
}
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const y=post.pop();
            if(post.length>=0){
                resolve(y);
            }
            else{
                reject("error: array is empty");
            }
            
        })
    })
}

async function main() {
    try {
        const name = await createPost("ABC");

        const time = await updateLastUserActivityTime();
        console.log(time);

        const deletedPost = await deletePost();
        console.log(deletedPost);
    } catch (error) {
        console.log(error);
    }
}

main();