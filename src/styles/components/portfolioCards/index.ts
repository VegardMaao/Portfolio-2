import styled from 'styled-components';
import { theme } from '../../theme';

export const AllCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    `;

export const SingleCardWrapper = styled.div`
    max-width: 250px;
    border: 2px solid ${theme.color.blue};
    margin: 15px;
    height: 500px;
    padding: 15px;
    display: grid;
    grid-template-rows: 1fr 2fr 4fr 1fr;
    align-items: stretch;
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border: 1px solid ${theme.color.blue};
`;

export const LinkBox = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 2px solid ${theme.color.blue};

    a{
    text-decoration: underline;
    margin: 5px;
    padding: 10px;
    font-weight: 600;
    border-radius: 15px;

    &:hover{
        background: ${theme.color.blue};
        color: ${theme.color.orange};

    }
`;

