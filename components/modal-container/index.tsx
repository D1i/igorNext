import { ModalPortalPropsInterface } from "./modal-container.types";

import React, { KeyboardEvent, MouseEvent, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./modal-container.module.scss";
import { Transition, TransitionStatus } from "react-transition-group";
import Portal from "@components/portal";

const ModalContainer = ({
  children,
  className,
  open = false,
  onClick,
  ...props
}: ModalPortalPropsInterface) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    open && ref.current?.focus();
    const body = document.querySelector("body") as HTMLBodyElement;
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }, [open]);

  const closeModalWrapper = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).className.split(" ")[0] === styles.modal) {
      onClick();
    }
  };

  const closeModalWrapperEsc = (
    e: KeyboardEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (e.key === "Escape") {
      onClick();
    }
  };

  return (
    <Portal>
      <Transition nodeRef={nodeRef} in={open} timeout={300} unmountOnExit>
        {(transitionClassName: TransitionStatus) => (
          <div
            onClick={closeModalWrapper}
            className={cn(styles.modal, className, transitionClassName)}
            {...props}
          >
            <div
              ref={ref}
              tabIndex={0}
              onKeyDown={closeModalWrapperEsc}
              className={cn(styles.modalContainer, transitionClassName)}
            >
              <button
                onClick={onClick}
                className={cn(styles.closeButton, "resetButton")}
                aria-label={props["aria-label"]}
              >
                <span />
                <span />
              </button>
              {children}
            </div>
          </div>
        )}
      </Transition>
    </Portal>
  );
};

export default React.memo(ModalContainer);
