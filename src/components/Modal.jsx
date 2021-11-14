import { Modalize } from "react-native-modalize";
import React, { useRef } from "react";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const useModal = ({ content, maxHeight }) => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return [
    <Modalize
      ref={modalizeRef}
      modalHeight={
        height - 200 > height * maxHeight ? height * maxHeight : height - 200
      }
    >
      {content()}
    </Modalize>,
    onOpen,
  ];
};

export default useModal;
