import { MessageInterface } from "../../interfaces/messageInterface";

/**
 * @description a generic post function. Specific info is passed from functions one level up to protect data quality
 * @param url - where to post data 
 * @param data - what data to post 
 * @returns 
 */
export const postData = async (url: string, data: MessageInterface) => {
  const { sendername, email, subject, message } = data;

  const body = new FormData();
  body.append("sendername", sendername);
  body.append("email", email);
  body.append("subject", subject);
  body.append("message", message);
  body.append("_wpcf7_unit_tag", "e2910fd");

  const req = {
    method: `POST`,
    body: body,
  };
  const response = await fetch(url, req);
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const json = await response.json();
  if (json.status === "mail_failed") {
    throw new Error();
  }

  return json;
};

export default { postData };
