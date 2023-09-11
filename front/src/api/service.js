export const service = {
    getAll,
    getById
}
async function getAll(){
    return fetch(window.location.origin+'/data/content.json')
}
async function getById(param){
    return fetch(window.location.origin+'/data/content.json')
    .then((res)=>{
        if(!res.ok){
            return Promise.reject("error getById")
        }
        return res.json()
    })
    .then(data=>{
        let elem = data.find((elem)=>param.id === elem.id);
        if (!elem) {
            return Promise.reject("obj not fund")
        }
        return elem
    }).catch((err)=>{throw err})
}