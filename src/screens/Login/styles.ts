import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#ffff",
    paddingTop: Platform.OS === "ios" ? 64 : 50,
  },
  input: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#383838",
    width: "75%",
    margin: 2,
    color: "#fff",
  },
  inputPassword: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#383838",
    width: "75%",
    margin: 2,
    marginBottom: 3,
    color: "#fff",
  },
  placeholder: {
    color: "#CCCCCC", // cor do placeholder
  },
  LoginButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",

    backgroundColor: "green",
    borderWidth: 0,
    borderRadius: 6,
  },
  logo: {
    marginTop: 110,
    width: 105,
    height: 115,
  },
  viewLogo: {
    marginTop: -155,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
    width: 500,
    height: "55%",
    borderRadius: 200,
  },
  textLogin: {
    fontSize: 17,
  },
  divPassword: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    opacity: 0.7,

    height: 24,
    width: 24,
  },
  divButtonPassword: {
    backgroundColor: "#383838",
    justifyContent: "center",
    borderRadius: 6,
    alignItems: "center",
    width: 45,
    height: 52,
  },
});
