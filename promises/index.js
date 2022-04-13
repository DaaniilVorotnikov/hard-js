 console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'avs',
//         port: '2000',
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modifided = true
//         console.log('Data recived', backendData)
//     }, 2000)
// }, 2000)

const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
    
        const backendData = {
            server: 'avs',
            port: '2000',
            status: 'working'
        }
        resolve(backendData)
}, 2000)
})

prom.then((data) => {
    return new Promise((resolve, reject) =>{
            
    setTimeout(() => {
        data.modifided = true
        resolve(data)
    }, 2000)
    })

    // prom2.then(clientData => {
    //     console.log('Data resolved', clientData)
    // })
}).then(clientData => {
    // console.log('Data resolved', clientData)
    clientData.fromPromise = true
    return clientData
}).then(data => {
    console.log('Changed data', data)
})
.catch(err => console.log('Error:', err))
.finally(() => console.log('Finaly'))

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})
Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})