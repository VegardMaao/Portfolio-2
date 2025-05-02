import styled from "styled-components";
import { theme } from "../../theme";
import { ErrorMsgProps, FormProps } from "../../../components/interfaces/styledComponentsInterfaces";

export const ContactSection = styled.section`
    background: ${theme.color.blue};
    padding-bottom: 45px;

    h3, p, label, a{
        color: ${theme.color.white};
    }
`;

export const FormHeader = styled.h3`
    padding-top: 20px;
`;

export const Form = styled.form<FormProps>`
    padding: 0px 0px  15px 0px;
    border: 1px solid ${theme.color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: min-content;
    min-width: 250px;
    margin: auto;
    height: 600px;
    justify-content: space-between;
`;

export const FormLabel = styled.label`
    text-decoration: underline;
    padding: 5px 0px;
    margin: 10px 0px 0px 0px;
`;

export const FormInput = styled.input`
  border: 2px solid ${theme.color.white};
  height: 25px;
  width: 200px;

  &:focus {
    background: ${theme.color.orange};
    color: ${theme.color.blue};
  }
`;

export const TextArea = styled.textarea`
  border: 2px solid  ${theme.color.white};
  width: 200px;
  height: 200px;
  resize: none;
`;

export const ErrorMsg = styled.p<ErrorMsgProps>`
  display: ${(props) => (props.o?.display)};
  border: 2px solid ${theme.color.white};
  font-size: 0.9rem;
  font-weight: 400;
`;

export const SubmitBtn = styled.button`
    font-weight: 600;
    width: 100px;
    padding: 10px;
`;