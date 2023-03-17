import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect, useState } from "react";
import {
  Alert,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

  // Função para atualizar o knowledge_level
  async function handleUpdate(id, newLevel) {
    if (newLevel < 0 || newLevel > 10) {
      throw new Error("O novo nível de conhecimento deve estar entre 0 e 10.");
    } else {
      const dado = {
        knowledge_level: newLevel,
      };
      await pessoaSkillService
        .update(id, dado)
        .then((response) => {
          console.log(response);
          const updatedSkills = pessoaSkill.map((skill) => {
            if (skill.id === id) {
              return { ...skill, knowledge_level: newLevel };
            } else {
              return skill;
            }
          });
          setPessoaSkill(updatedSkills);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  // Função para atualizar as skills
  async function updateSkills() {
    try {
      const res = await pessoaSkillService.getAll();
      setPessoaSkill(res.data);
    } catch (err) {
      console.error("Ops! Ocorreu um erro", err);
    }
  }
  // Carregar as skills do usuário logado
  useEffect(() => {
    get(); //Pegar Id do Usuario logado
    pessoaSkillService
      .getAll()
      .then((res) => {
        setPessoaSkill(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  // Função para deletar uma skill
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
  // Função para pegar o ID do usuário logado
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
            onPress={() => updateSkills()}
          />
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Sair", "Deseja realmente sair?", [
                {
                  text: "Cancelar",
                  style: "cancel",
                },
                { text: "OK", onPress: () => signOut() },
              ]);
            }}
            style={styles.buttonExit}
          >
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
            colors={["#4f4fd0", "#86A8E7", "#91EAE4"]}
            style={{
              padding: 0,
              alignItems: "center",
              borderRadius: 18,
              width: 110,
              height: 90,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.textModalButton}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
        <SkillList
          userId={userId}
          skills={pessoaSkill}
          onRemoveSkill={handleDeleteEventoEspecial}
          onUpdatePessoaSkill={handleUpdate}
        />
      </View>
    </>
  );
}
