// import { useContext, useEffect, useState } from "react";
// import { Text, TextInput, TouchableOpacity, View } from "react-native";
// import { Spacer } from "../../Components/spacer";
// import AuthContext from "../../Context/auth";
// import skillService from "../../Service/skillService";
// import { styles } from "./styles";

// export default function Login() {
//   const { signIn } = useContext(AuthContext);
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");
//   const [secure, setSecure] = useState(true);

//   function handleSignIn(e) {
//     e.preventDefault();
//     signIn(login, password);
//   }

//   async function CarregarSkill() {
//     const response = await skillService.getSkill();
//     response.data;
//     console.log(response.data);
//   }
//   useEffect(() => {
//     CarregarSkill();
//   }, []);

//   return (
//     <>
//       <View style={styles.container}>
//         <Text>Login</Text>

//         <TextInput
//           style={styles.input}
//           autoCorrect={false}
//           autoCapitalize="none"
//           value={login}
//           onChange={(e) => setLogin(e.target.value)}
//         />
//         <Spacer x={5} y={15} />
//         <Text>Senha</Text>
//         <TextInput
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           style={styles.input}
//           autoCorrect={false}
//           autoCapitalize="none"
//         />
//         <Spacer x={5} y={15} />
//         <TouchableOpacity style={styles.LoginButton} onPress={handleSignIn}>
//           <Text>Entrar</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// }
