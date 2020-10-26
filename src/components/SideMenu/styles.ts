import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-tertiary);
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: 500ms transform cubic-bezier(0.5, 0, 0, 1);
  width: 100%;
  z-index: 10;

  @media (min-width: 1024px) {
    box-shadow: -7px 0 5px -6px rgba(0, 0, 0, 0, 075);
    width: calc(100% / 3);
  }

  @media (min-width: 1440px) {
    width: calc(480px ((100vw - 1440px) / 2));
  }

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 1024px) {
    &.scrollOpen {
      transform: translateX(0);
    }

    &.scrollOpen .action--close {
      display: none;
    }
  }
`;
