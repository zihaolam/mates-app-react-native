import React, { useRef } from "react";
import { Text, View, ScrollView } from "react-native";
import { todos } from "mocks/todo";
import CustomListItemToDo from "./CustomListItemToDo";
import { Icon, Overlay, Button } from "react-native-elements";
import { COLORS } from "styles";
import { styles } from "./style";
import useCreateTodoModal from "./useCreateTodoModal";
import { useUserContext } from "contexts/user";
import { useTodoContext } from "contexts/todo";

const ToDoList = () => {
  const { state: todoState, dispatch: todoDispatch } = useTodoContext();
  const { state: userState, dispatch: userDispatch } = useUserContext();
  const [CreateTodoModal, openCreateTodoModal] = useCreateTodoModal();
  return (
    <>
      <View>
        <ScrollView style={styles.listItemContainer}>
          {todoState.allTodos.map((data, index) => (
            <CustomListItemToDo {...data} key={index} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomToolbar}>
        <Icon
          name="add-circle"
          type="material"
          size={40}
          color={COLORS.PRIMARY}
          onPress={openCreateTodoModal}
        />
      </View>
      {CreateTodoModal}
    </>
  );
};

export default ToDoList;
