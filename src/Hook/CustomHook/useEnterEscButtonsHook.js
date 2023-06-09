import React, {useEffect} from "react";

// interface IUseEnterEscButtonsProps {
//     handleCancel: Function;
//     handleConfirm: Function;
//   }
  
  export const useEnterEscButtonsHook = ({ handleCancel, handleConfirm }) => {
    console.log("Custom hook")
    useEffect(() => {
      const listener = (event) => {
          if ((event.code === "Enter" || event.code === "NumpadEnter") ) {
            console.log("Enter and nam pad enter", event)
          handleConfirm();
          event.preventDefault();
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }, [handleConfirm]);
  
    useEffect(() => {
      const listener = (event) => {
        if (event.code === "Escape" ) {
          console.log("Escape", event);
          handleCancel();
          event.preventDefault();
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }, [handleCancel]);
  };