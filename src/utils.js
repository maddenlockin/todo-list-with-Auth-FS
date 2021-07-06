import request from "superagent";

const URL = 'https://mysterious-shore-16003.herokuapp.com';

export async function signup(email, password) {
    const data = await request 
        .post(`${URL}/auth/signup`)
        .send({
            email: email,
            password: password,
        })
    return data.body.token;
}

export async function login(email, password) {
    const data = await request
        .post(`${URL}/auth/signin`)
        .send({
            email: email,
            password: password,
        })
    
    return data.body.token;

}