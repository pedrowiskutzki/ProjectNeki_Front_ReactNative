import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
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
      <View style={styles.container}>
        <Text>Cadastro</Text>
        <Text>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLogin(text)}
        />
        <Spacer x={5} y={15} />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={secure}
        />
        <Spacer x={5} y={15} />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenhaConfirma(text)}
          secureTextEntry={secureConfirm}
        />

        <Spacer x={5} y={15} />
        <TouchableOpacity style={styles.LoginButton} onPress={handleSubmit}>
          <Text>Criar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
