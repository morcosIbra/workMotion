import React, { FC, useEffect } from "react";

import { Props } from "./types";

import { PopupBody, CloseButton, Content, Overlay } from "./style";

const Popup: FC<Props> = ({ onClose, children }) => {
  useEffect(() => {
    if (onClose) {
      document.addEventListener("click", onClose);
      return () => {
        document.removeEventListener("click", onClose);
      }
    }
  }, [onClose]);

  return (
    <Overlay>
      <PopupBody>
        <Content>{children}</Content>
        {onClose && <CloseButton onClick={onClose}>
          close
        </CloseButton>}
      </PopupBody>
    </Overlay>
  )
};

export default Popup;
