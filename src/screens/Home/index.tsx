import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SkillModal } from "../../Components/modal";
import { SkillList } from "../../Components/skilList";
import { AuthContext } from "../../Context/auth";
import pessoaSkillService from "../../Service/request/pessoaSkillService";
import { styles } from "./styles";

export function Home({ navigation }) {
  const { signOut } = useContext(AuthContext);
  const [userId, setUserId] = useState("");
  const [isSelectedModal, setIsSelectedModal] = useState(false);
  const [pessoaSkill, setPessoaSkill] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    get(); //Pegar Id do Usuario logado
    pessoaSkillService
      .getAll()
      .then((res) => {
        setPessoaSkill(res.data);
        setRemoveLoading(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function handleDeleteEventoEspecial(id) {
    pessoaSkillService
      .remove(id)
      .then((response) => {
        alert("Skill Deletada");
        const newSkills = pessoaSkill.filter((skill) => skill.id !== id);
        setPessoaSkill(newSkills);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const get = async () => {
    const id = await AsyncStorage.getItem("@id");
    setUserId(id);
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
      />
      <View style={styles.container}>
        <View style={styles.menu}>
          <SkillModal
            isSelectedModal={isSelectedModal}
            setIsSelectedModal={setIsSelectedModal}
            onPress={() => console.log("aaa")}
          />
          <TouchableOpacity onPress={signOut} style={styles.buttonExit}>
            <Text>Sair</Text>
          </TouchableOpacity>
          <Image
            source={require("../../Assets/LogoNekiWhite.png")}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => setIsSelectedModal(true)}
        >
          <LinearGradient
            colors={["#2cdca4", "#0e3c83"]}
            style={{
              padding: 0,
              alignItems: "center",
              borderRadius: 18,
              width: 110,
              height: 90,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.textModalButton}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
        <SkillList
          userId={userId}
          skills={pessoaSkill}
          onRemoveSkill={handleDeleteEventoEspecial}
        />
      </View>
    </>
  );
}
