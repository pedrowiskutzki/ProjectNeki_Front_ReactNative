import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#CCCC",
    paddingTop: Platform.OS === "ios" ? 64 : 50,
  },
  menu: {
    width: "100%",
    height: 230,
    marginTop: -50,
    backgroundColor: "#141414",
    alignItems: "center",
  },
  card: {
    width: 180,
    height: 225,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderWidth: 1.5,
    borderColor: "#0e3c83",
    borderRadius: 8,
    color: "#ffff",
  },
  imgCard: {
    width: 80,
    height: 80,
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
