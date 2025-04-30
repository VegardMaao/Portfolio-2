import styled from "styled-components";
import { theme } from "../../theme";

export const AboutWrapper = styled.section`
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: ${theme.color.blue};
`;

export const Portrait = styled.img`
    height: 350px;
    margin: 0px 25px;
`;

export const DescriptionWrapper = styled.div`
    max-width: 350px;
    margin: 0px 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1, h2, p{
        color: ${theme.color.white};
    }
`;

export const HeaderOne = styled.h1`
margin-bottom: 0px;
font-size: 1.8rem;
`;

export const HeaderTwo = styled.h2`
text-decoration: overline;
font-size: 1.1rem;
margin: 0px;
`;