import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        background: var(--input-background);
        border: 1px solid var(--input-border);
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1.5rem;
        }
    }

    button[type="submit"] {
        background: var(--green);
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        color: var(--shape);
        border: 0;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-top: 1.5rem;
    }


`