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
createPost("ABC")
    .then(updateLastUserActivityTime)
    .then((r) => console.log(r))
    .catch((e) => console.log(e))
    .then(deletePost)
    .then((r) => console.log(r))
    .catch((e) => console.log(e))
