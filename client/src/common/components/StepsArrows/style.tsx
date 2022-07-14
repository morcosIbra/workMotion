import styled from "styled-components/macro";

export const StepsWrapper = styled.div`
  margin: auto;
  padding: 20px;
  width: max-content;
`;

type StepProps = {
  active: Boolean
};
export const Step = styled.div<StepProps>`
  display: inline-block;
  position: relative;
  height: 25px;
  line-height: 25px;
  padding: 0 20px 0 30px;
  margin-right: 6px;
  margin-left: -7px;
  background-color: white;
  border: 1px solid #ccc;
  cursor: pointer;

  &:not(:last-child):after {
    content: "";
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    background-color: white;
    width: 17px;
    height: 17px;
    position: absolute;
    right: 0;
    top: -1px;
    z-index: 1;
    -webkit-transform: translate(10px, 4px) rotate(45deg);
  }

  ${({ active, theme }) =>
    active ?
      `background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.grey};
    &:not(:last-child):after {
      background-color: ${theme.colors.primary};
      border-top: 1px solid transparent;
      border-right: 1px solid transparent;
    }
    `:
      `
      &:hover{
        background-color: ${theme.colors.lightPrimary};
        border: 1px solid transparent;
      }
      &:hover:after {
        background-color: ${theme.colors.lightPrimary};
        border-top: 1px solid transparent;
        border-right: 1px solid transparent;
      }
    `
  }

}
`;
