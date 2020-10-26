import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 61px;
  padding: 16px 32px;

  > h1 {
    align-items: center;
    display: flex;

    > span {
      color: var(--color-quaternary);
      font-size: 29px;
      margin-left: 10px;
    }
  }

  > button {
    background: none;
    border: none;
    color: var(--text-color);
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: none;
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;

    > h1 {
      display: none;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  fill: var(--color-blue);
  height: 32px;
  width: 36px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 480px;
  padding: 0 32px;

  > .title {
    font-size: 25px;
    font-weight: 500;
  }

  > .subtitle {
    font-style: 12px;
    margin-top: 2px;
  }

  > input {
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    font-size: 14px;
    margin-top: 18px;
    padding: 13px 18px;
  }

  > button {
    background: var(--color-blue);
    border: none;
    color: var(--color-tertiary);
    cursor: pointer;
    font-size: 14px;
    margin-top: 18px;
    padding: 13px 18px;

    &:hover {
      opacity: 0.87;
    }
  }

  > .terms {
    font-style: 14px;
    margin-top: 4px;
    opacity: 0.6;
  }
`;
