import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Spacer } from "../../Components/spacer";
import pessoaService, {
  CreateParams,
} from "../../Service/request/pessoaService";
import { styles } from "./styles";

export function Register({ navigation }) {
  const [secure, setSecure] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);
  const [senhaConfirma, setSenhaConfirma] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  function toggleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function handleSubmit() {
    if (
      login !== null &&
      login !== "" &&
      password !== null &&
      password !== "" &&
      senhaConfirma !== null &&
      senhaConfirma !== ""
    ) {
      if (password === senhaConfirma) {
        const pessoa: CreateParams = {
          login: login,
          password: password,
        };

        pessoaService
          .create(pessoa)
          .then((res) => {
            console.log(res);
            alert("Usuario cadastrado com sucesso!");
            navigation.navigate("Login");
          })
          .catch((err) => {
            alert("Alguma coisa deu errado!");
          });
      } else {
        alert("As senhas não estão iguais");
      }
    } else {
      alert("Preencha todos os Campos");
    }
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
      />
      <View style={styles.container}>
        <View style={styles.viewLogo}>
          <Image
            source={require("../../Assets/LogoNekiWhite.png")}
            style={styles.logo}
          />
        </View>
        <Spacer x={5} y={30} />
        <View style={styles.divPassword}>
          <View style={styles.divButtonPassword}>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <SimpleLineIcons
                style={styles.eyeIcon}
                name={"user"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Login"
            placeholderTextColor={styles.placeholder.color}
            onChangeText={(text) => setLogin(text)}
          />
        </View>
        <Spacer x={5} y={15} />
        <View style={styles.divPassword}>
          <View style={styles.divButtonPassword}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={toggleShowPassword}
            >
              <AntDesign
                style={styles.eyeIcon}
                name={showPassword ? "lock1" : "unlock"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={styles.placeholder.color}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={showPassword}
          />
        </View>
        <Spacer x={5} y={15} />
        <View style={styles.divPassword}>
          <View style={styles.divButtonPassword}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={toggleShowConfirmPassword}
            >
              <AntDesign
                style={styles.eyeIcon}
                name={showConfirmPassword ? "lock1" : "unlock"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            placeholderTextColor={styles.placeholder.color}
            onChangeText={(text) => setSenhaConfirma(text)}
            secureTextEntry={showConfirmPassword}
          />
        </View>

        <Spacer x={5} y={45} />
        <TouchableOpacity style={styles.LoginButton} onPress={handleSubmit}>
          <LinearGradient
            colors={["#03A696", "#37ff0093"]}
            style={{
              padding: 15,
              alignItems: "center",
              borderRadius: 6,
              width: 190,
              height: 52,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.textLogin}>Cadastrar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
}
