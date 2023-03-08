import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 64 : 50,
  },
  input: {
    padding: 12,
    borderRadius: 6,
    width: "90%",
    borderWidth: 2,
    borderColor: "#000",
    margin: 15,
  },
  LoginButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: 40,
    backgroundColor: "green",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 50,
  },
});
