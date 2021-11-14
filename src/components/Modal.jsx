import { Modalize } from "react-native-modalize";
import React, { useRef } from "react";
import { Text, View, Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const useModal = (body) => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return [
    <Modalize ref={modalizeRef} modalHeight={height - 200}>
      {body}
    </Modalize>,
    onOpen,
  ];
};

export default useModal;
