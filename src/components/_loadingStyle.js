import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 10vmin;

  @media (prefers-reduced-motion: no-preference) {
    animation: Spin infinite 20s linear;
  }

  @keyframes Spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 960px) {
    height: 10vmin;
  }
`;

export const Text = styled.div`
  margin: 16px;
  text-align: center;
  font-weight: bold;
  font-size: 5vmin;
`;
