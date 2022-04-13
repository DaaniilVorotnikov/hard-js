const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return fetch(
        url, {
            method,
            body: JSON.stringify(body),
        }
        ).then(response => {
            if(response.ok){
                return response.json()
            }
        return response.json().then( error => {
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e
        })    
    })
}

// sendRequest('GET', requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

const body = {
    name: 'Daniil',
    age: '23'
}

sendRequest('POST', requestURL, body)
.then(data => console.log(data))