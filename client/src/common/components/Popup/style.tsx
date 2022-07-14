import styled from "styled-components/macro";

export const Overlay = styled.div`
display: block;
position:fixed;
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
  z-index: 1;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: calc(50% - 55px);
  left: calc(50% - 120px);
  height: 70px;
  width: 200px;
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