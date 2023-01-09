import styled from "styled-components";

export const SelectCityStyled = styled.form`
    width: 250px;
    margin-bottom: 20px;
    position: absolute;
    top: -58px;
    right: 218px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > select {
    -webkit-appearance: none;
    background-color: var(--color-secondary);
    color: var(--color-grey300);
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    border-style: none;
    outline-style: none;
    border-radius: 2px;
    cursor: pointer;
    }
`