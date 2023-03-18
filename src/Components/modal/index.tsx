import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Container, { Toast } from "toastify-react-native";
import pessoaSkillService, {
  PostPessoaSkill,
} from "../../Service/request/pessoaSkillService";
import skillService from "../../Service/request/skillService";
import { styles } from "./styles";

export const SkillModal = ({
  isSelectedModal,
  setIsSelectedModal,
  onPress,
}) => {
  const [skill, setSkill] = useState([]);

  const closeModal = () => {
    setIsSelectedModal(false);
  };
  // Get All de Skill
  useEffect(() => {
    skillService
      .getAll()
      .then((res) => {
        setSkill(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  // post Skill
  const handleSubmit = async (event, idSkill) => {
    event.preventDefault();
    const id = await AsyncStorage.getItem("@id");
    const postPessoaSkill: PostPessoaSkill = {
      pessoa: { id: parseInt(id) },
      skill: { id: idSkill },
      knowledge_level: 0,
    };

    pessoaSkillService
      .create(postPessoaSkill)
      .then((res) => {
        Toast.success("Skill Salva");
        onPress();
      })
      .catch((err) => {
        Toast.error("Ocorreu algum erro tente novamente");
      });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSelectedModal}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <Container
        theme="dark"
        positionValue={28}
        duration={1400}
        position="top"
        width={350}
      />
      <TouchableWithoutFeedback onPress={() => closeModal()}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      {/* Content */}
      <View style={styles.modalContentView}>
        <FlatList
          data={skill}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <>
                <View style={styles.card}>
                  <Image
                    style={styles.imgCard}
                    source={{ uri: item.image_url }}
                  />
                  <Text style={{ fontSize: 18, color: "#ffff" }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#CCCC" }}>
                    {item.version}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#CCCC" }}>
                    {item.description}
                  </Text>
                  <TouchableOpacity
                    onPress={(event) => handleSubmit(event, item.id)}
                  >
                    <LinearGradient
                      colors={["#00f044", "#37ff0093"]}
                      style={{
                        padding: 5,
                        alignItems: "center",
                        borderRadius: 6,
                        width: 100,
                        marginTop: 10,
                      }}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text style={{ color: "white" }}>Salvar</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        />
      </View>
    </Modal>
  );
};
