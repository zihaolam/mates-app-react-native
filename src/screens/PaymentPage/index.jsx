import { Text, View, ScrollView, TextInput } from "react-native";
import { Icon, Overlay, Button } from "react-native-elements";
import React, { useState, useRef, useEffect } from "react";
import CustomListItem from "./CustomListItem";
import { styles } from "./style";
import { usePaymentContext } from "contexts/payment";
import { COLORS } from "styles";
import { useUserContext } from "contexts/user";
import Toast from "react-native-toast-message";
import useCreatePaymentModal from "./useCreatePaymentModal";

const PaymentPage = () => {
  const { state: paymentState, dispatch: paymentDispatch } =
    usePaymentContext();
  const { state: userState, dispatch: userDispatch } = useUserContext();

  // const [errorMsg, setErrorMsg] = useState(false);

  // const showSuccessToast = () => {
  //   Toast.show({
  //     type: "success",
  //     visibilityTime: 3000,
  //     text1: "Added Payment",
  //   });
  // };

  // const handleJoinRoom = () => {
  //   const room = roomState.rooms.find(
  //     (room) => room.invitationCode === invitationCode
  //   );
  //   if (!room) return setErrorMsg(true);
  //   userDispatch({
  //     type: "joinRoom",
  //     payload: room,
  //   });
  //   showSuccessToast(room.roomName);
  //   closeModal();
  // };

  // const handleJoinRoomWithRoomGiven = (room) => {
  //   userDispatch({
  //     type: "joinRoom",
  //     payload: room,
  //   });
  //   showSuccessToast();
  //   closeModal();
  // };

  // const addPayment = () => {
  //   const tempHouseName = houseName;
  //   roomDispatch({
  //     type: "addPayment",
  //     payload: tempHouseName,
  //   });
  //   Toast.show({
  //     type: "success",
  //     text1: `Sucessfully added ${tempHouseName}`,
  //   });
  //   toggleCreateHouseModal();
  //   setHouseName("");
  // };

  // const [currentPage, setCurrentPage] = useState(0);
  // const titleRef = useRef(null);
  // const notesRef = useRef(null);
  // const pickerRef = useRef(null);
  // const amountRef = useRef(null);

  // const initialState = {
  //   title: "",
  //   notes: "",
  //   amount: null,
  //   payees: [],
  //   payTo: [...userState.allUsers].shift() || "",
  // };

  // const [formState, setFormState] = useState(initialState);

  // const FirstPage = (
  //   <>
  //     <View style={styles.inputGroup}>
  //       <Text style={styles.inputLabel}>Title</Text>
  //       <TextInput
  //         placeholder="Payment Title"
  //         style={styles.inputBox}
  //         autoCapitalize="none"
  //         ref={titleRef}
  //         onSubmitEditing={handleJoinRoom}
  //       />
  //     </View>

  //     <View style={styles.inputGroup}>
  //       <Text style={styles.inputLabel}>Notes</Text>
  //       <TextInput
  //         placeholder="Additional Notes"
  //         style={styles.inputBox}
  //         autoCapitalize="none"
  //         ref={notesRef}
  //         onSubmitEditing={handleJoinRoom}
  //       />
  //     </View>

  //     <View style={styles.inputGroup}>
  //       <Text style={styles.inputLabel}>Amount</Text>
  //       <TextInput
  //         placeholder="Payment Amount"
  //         style={styles.inputBox}
  //         keyboardType="numeric"
  //         ref={amountRef}
  //         value={formState.amount}
  //         onChangeText={(text) => ({ ...formState, amount: text })}
  //         onSubmitEditing={handleJoinRoom}
  //       />
  //     </View>
  //     <View>
  //       <Button
  //         title="Next Step"
  //         titleStyle={styles.nextStepButtonTitle}
  //         buttonStyle={styles.nextStepButton}
  //         onPress={() => setCurrentPage(1)}
  //       />
  //     </View>
  //   </>
  // );

  // const SecondPage = (
  //   <View style={styles.inputGroup}>
  //     <Text style={styles.inputLabel}>Pay To</Text>
  //     <Dropdown
  //       style={styles.dropdownContainer}
  //       data={data}
  //       search
  //       labelField="label"
  //       valueField="value"
  //       placeholder="Select item"
  //       searchPlaceholder="Search..."
  //       value={value}
  //       onChange={(item) => {
  //         setValue(item.value);
  //       }}
  //       renderLeftIcon={() => (
  //         <AntDesign
  //           style={styles.icon}
  //           color="black"
  //           name="Safety"
  //           size={20}
  //         />
  //       )}
  //     />
  //   </View>
  // );

  // const [openCreatePaymentModal, setOpenCreatePaymentModal] = useState(false);
  // const toggleCreatePaymentModal = () =>
  //   setOpenCreatePaymentModal(
  //     (openCreatePaymentModal) => !openCreatePaymentModal
  //   );

  // const renderCurrentPage = () => {
  //   switch (currentPage) {
  //     case 0:
  //       return FirstPage;
  //     case 1:
  //       return SecondPage;
  //   }
  // };
  const [CreatePaymentModal, openCreatePaymentModal] = useCreatePaymentModal();

  return (
    <>
      <View>
        <Text style={styles.header}>Payments Due</Text>
        <ScrollView style={styles.listItemContainer}>
          {paymentState.allPayments.map((data, index) => (
            <CustomListItem {...data} key={index} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomToolbar}>
        <Icon
          name="add-circle"
          type="material"
          size={40}
          color={COLORS.PRIMARY}
          onPress={openCreatePaymentModal}
        />
      </View>
      {CreatePaymentModal}
      {/* <Overlay
        isVisible={openCreatePaymentModal}
        onBackdropPress={toggleCreatePaymentModal}
        overlayStyle={{ borderRadius: 10 }}
      >
        <View style={styles.overlayContainer}>
          <Text style={styles.header}>Add Payment</Text>
          {renderCurrentPage()}
        </View>
      </Overlay> */}
    </>
  );
};

export default PaymentPage;
