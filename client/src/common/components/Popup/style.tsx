import styled from "styled-components/macro";

export const Overlay = styled.div`
position: fixed;
display: block;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
z-index: 2;
cursor: pointer;
`;

export const PopupBody = styled.div`
  margin: 70px auto;
  z-index: 1;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  transition: all 5s ease-in-out;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
  transition: all 200ms;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const Content = styled.div`
  max-height: 30%;
  overflow: auto;
  margin-bottom: 20px;
`;

// @media screen and (max-width: 700px) {
//   .popup {
//     width: 70%;
//   }
// }