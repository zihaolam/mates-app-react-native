import { Text, View, ScrollView } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import CustomListItemNotice from "./CustomListItemNotice";
import { notices } from "mocks/notice";
import { styles } from "./style";
import { Icon, Overlay, Button } from "react-native-elements";
import { COLORS } from "styles";
import useCreateNoticeModal from "./useCreateNoticeModal";
import { useUserContext } from "contexts/user";
import { useNoticeContext } from "contexts/notice";

const NoticeBoard = () => {
  const { state: noticeState, dispatch: noticeDispatch } = useNoticeContext();
  const { state: userState, dispatch: userDispatch } = useUserContext();
  const [CreateNoticeModal, openCreateNoticeModal] = useCreateNoticeModal();

  return (
    <>
      <View>
        <ScrollView style={styles.listItemContainer}>
          {noticeState.allNotices.map((data, index) => (
            <CustomListItemNotice {...data} key={index} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomToolbar}>
        <Icon
          name="add-circle"
          type="material"
          size={40}
          color={COLORS.PRIMARY}
          onPress={openCreateNoticeModal}
        />
      </View>
      {CreateNoticeModal}
    </>
  );
};

export default NoticeBoard;
