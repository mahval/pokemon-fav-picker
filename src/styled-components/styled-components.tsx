import styled from 'styled-components';
import background from '../assets/wallpapers/background1.png';

export const MainContainer = styled.div`
  height: 100%;
  // background-color: #84cb54;
  background-position: center;
  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0)), url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WelcomeContainer = styled.div`
  padding: 150px 0;
`;

export const PokemonDancingRow = styled.div`
  text-align: center;
  padding: 20px 0;
  animation-name: floating;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  img {
    margin: 0 15px;
  }
  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    to {
      transform: translate(0, 0px);
    }
  }
`;
