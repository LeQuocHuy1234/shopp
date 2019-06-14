const url = 'http://192.168.1.68:8000';

export async function getAllProduct(link) {
    try {
        const respone = await fetch(url + link);
        const json = await respone.json();
        return json;
    } catch (error) {
        return error;
    }
}