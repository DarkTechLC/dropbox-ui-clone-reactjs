import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.section`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }

  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }

  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }

  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background: var(--bg-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  bottom: 0;
  clip: rect(auto, auto, auto, auto);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Header = styled.header`
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  left: 0;
  margin: 0 auto;
  max-width: 1440px;
  padding: 16px 32px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;

  > h1 {
    align-items: center;
    display: flex;

    > span {
      color: var(--text-color);
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
    outline: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  fill: var(--logo-color);
  height: 32px;
  width: 36px;
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding-top) 32px var(--padding-bottom);

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }

  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }
`;
