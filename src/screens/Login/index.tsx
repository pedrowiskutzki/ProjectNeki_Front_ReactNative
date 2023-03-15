import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Spacer } from "../../Components/spacer";
import { AuthContext } from "../../Context/auth";
import { styles } from "./styles";

export function Login({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [passwordRemember, setPasswordRemember] = useState(false);

  function handleSignIn() {
    signIn(login, password);
    if (passwordRemember) {
      AsyncStorage.setItem("rememberedPassword", password);
      //Se o Valor for False Salva apaga no LocalStorage
    } else {
      AsyncStorage.removeItem("rememberedPassword");
    }
  }

  useEffect(() => {
    //Salvar Password no AsyncStorage
    AsyncStorage.getItem("rememberedPassword").then((storedPassword) => {
      if (storedPassword) {
        setPassword(storedPassword);
        setPasswordRemember(true);
      }
    });
  }, []);

  function handleRememberMe(checked: boolean) {
    setPasswordRemember(checked);
    if (!checked) {
      AsyncStorage.removeItem("rememberedPassword");
      setPassword("");
    }
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
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
            autoCorrect={false}
            placeholderTextColor={styles.placeholder.color}
            autoCapitalize="none"
            value={login}
            onChangeText={(text) => setLogin(text)}
          />
        </View>
        <Spacer x={5} y={20} />
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
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Senha"
            placeholderTextColor={styles.placeholder.color}
            style={styles.inputPassword}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={showPassword}
          />
        </View>

        <Spacer x={5} y={15} />
        <CheckBox
          title="Voce deseja salvar sua senha?"
          onPress={() => handleRememberMe(!passwordRemember)}
          checked={passwordRemember}
        />
        <Spacer x={5} y={50} />
        <TouchableOpacity style={styles.LoginButton} onPress={handleSignIn}>
          <LinearGradient
            colors={["#03A696", "#37ff0093"]}
            style={{
              padding: 15,
              alignItems: "center",
              borderRadius: 6,
              width: 330,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.textLogin}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Spacer x={5} y={25} />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Não possuo cadastro</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
