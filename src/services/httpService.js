class HttpService {

    baseurl = "http://localhost:8080";
    headers= {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    async get(path){
        return fetch(`${this.baseurl}/${path}`, {headers:this.headers})
        .then(res=>res.json())
    }

    async delete(path){
        return fetch(`${this.baseurl}/${path}`, {method:"DELETE",headers:this.headers})
        .then(res=>res.json())
    }

    async post(path, body){
        return fetch(`${this.baseurl}/${path}`, {method:"POST", body:JSON.stringify(body), headers:this.headers})
        .then(res=>res.json())
    }

    async put(path, body){
        return fetch(`${this.baseurl}/${path}`, {method:"PUT", body:JSON.stringify(body), headers:this.headers})
        .then(res=>res.json())
    }

    async patch(path, body){
        return fetch(`${this.baseurl}/${path}`, {method:"Patch", body:JSON.stringify(body), headers:this.headers})
        .then(res=>res.json())
    }
}

export const httpService = Object.freeze(new HttpService());
