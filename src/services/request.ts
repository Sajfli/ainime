
const api = '/api/v1'

type BodyObj = {
    [key: string]: string | number | boolean
}

type HeaderObj = {
    [key: string]: string
}

async function request(method: string, adr: string, auth = false, data?: BodyObj, headers?: HeaderObj) {

    const url = api + adr
    let body = ''

    if(data) {
        body = JSON.stringify(data)
    }

    if(auth) {
        // todo
    }

    const opts: RequestInit = {
        method,
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        'credentials': 'include'
    }

    if(method === 'POST')
        opts.body = body

    try {
        const response = await fetch(url, opts)

        return await response.json()
    } catch(err) {
        console.error(err)
        return { err: 'query_error' }
    }

}

const post = (
    url: string,
    auth=false,
    data?: BodyObj,
    headers?: HeaderObj) => {
        return request('POST', url, auth, data, headers)
}

export default { post }