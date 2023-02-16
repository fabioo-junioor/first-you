import decode from 'jwt-decode'
import request from './request'

export async function signIn(email, senha){
    const { token } = await request('POST', 'inicioUser', {
        email, senha
        
    })
    localStorage.setItem('token', token)
    
}
export function signOut(){
    localStorage.removeItem('token')

}
export function isSignedIn(){
    const token = localStorage.getItem('token')

    if(!token){
        return false

    }
    try{
        const { exp: expiration } = decode(token)
        const isExpired = !!expiration && Date.now() > expiration * 1000

        if(isExpired){
            return false

        }

        return true

    }catch(_){
        return false

    }
}