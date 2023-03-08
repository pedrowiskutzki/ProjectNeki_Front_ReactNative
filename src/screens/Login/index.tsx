import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Spacer } from "../../Components/spacer";
import { AuthContext } from "../../Context/auth";
import { styles } from "./styles";

export function Login({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  function handleSignIn() {
    signIn(login, password);
  }

  return (
    <>
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          value={login}
          onChangeText={(text) => setLogin(text)}
        />
        <Spacer x={5} y={15} />
        <Text>Senha</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={secure}
        />
        <Spacer x={5} y={15} />
        <TouchableOpacity style={styles.LoginButton} onPress={handleSignIn}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <Spacer x={5} y={20} />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Não possuo cadastro</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
