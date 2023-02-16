const baseUrl = 'http://localhost:8080/'

function getHeaders(){
    const token = localStorage.getItem('token')
    return{
        'Content-Type': 'application/json',
        ...token && {
            'Authorization': `Bearer ${token}`

        }
    }
}

async function request(method, url, body){
    const options = {
        method,
        headers: getHeaders(),
        ...(method !== 'GET') && {
            body: JSON.stringify(body)
            
        }
    }
    const response = await fetch(baseUrl + url, options)
    console.log(response, baseUrl, url)
    return await response.json()
    
}

export {request as default, request, getHeaders}