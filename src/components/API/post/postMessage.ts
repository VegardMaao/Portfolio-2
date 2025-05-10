import { MessageInterface } from "../../interfaces/messageInterface";
import { postData } from "./post";

/**
 * @description Login function, posting user data to the login url
 * @param {object} userData - the username and password to log in with 
 * @returns 
 */
export const postMessage = async (message: MessageInterface) => {
  const contactURL = `https://sellmo.no/Flower_Power/wp-json/contact-form-7/v1/contact-forms/435/feedback`;
  const { data } = await postData(contactURL, message);
  return data;
};