export const request = async (url, params) => {
    return (await fetch(url, params)).json()
}