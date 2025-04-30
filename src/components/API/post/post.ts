import { messageInterface } from "../../interfaces/messageInterface";

/**
 * @description a generic post function. Specific info is passed from functions one level up to protect data quality
 * @param url - where to post data 
 * @param data - what data to post 
 * @returns 
 */
export const postData = async (url: string, data: messageInterface) => {
    const body = data;
    console.log(body);

    const req = {
        method: `POST`,
        body: JSON.stringify(body),
    };
    const response = await fetch(url, req);
    if (!response.ok) {
        const error = await response.json();
        console.dir(error)
        throw new Error(error.errors[0].message);
    }
    const json = await response.json();
    return json;
};

export default { postData };
