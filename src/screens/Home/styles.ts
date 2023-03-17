import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#A9A9A9",
    paddingTop: Platform.OS === "ios" ? 64 : 50,
  },
  menu: {
    width: "100%",
    height: 230,
    marginTop: -50,
    backgroundColor: "#212121",
    alignItems: "center",
  },

  imgCard: {
    width: 80,
    height: 80,
  },
  buttonExit: {
    backgroundColor: "red",
    width: 60,
    marginRight: 290,
    height: 40,
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 105,
    height: 115,
  },
  modalButton: {
    width: 110,
    height: 90,
    marginTop: -42,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderWidth: 0,
    borderRadius: 18,
  },
  textModalButton: {
    fontSize: 60,
    marginBottom: -20,
  },
  buttonDeletSkill: {
    backgroundColor: "red",
    width: 80,
    height: 30,
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
