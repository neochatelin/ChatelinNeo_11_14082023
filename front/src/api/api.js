const API = {
    getAll : ()=>{
        return fetch(window.location.origin+'/data/content.json')
        .then(res=>{
            if (!res.ok) {
                return Promise.reject("res err");
            }
            return res.json()
        }).then((data)=>{return data})
        .catch((error)=>{throw error});
    },
    getById : (ID)=>{
        return fetch(window.location.origin+'/data/content.json')
        .then(res=>{
            if (!res.ok) {
                return Promise.reject("res err");
            }
            return res.json()
        }).then(data=>{
            let elem = data.find((elem)=>ID === elem.id);
            if (!elem) {
                return "data not found"
            }
            return elem
        }).catch((error)=>{throw error});
    }
}

export default API;