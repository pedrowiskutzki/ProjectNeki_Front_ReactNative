import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContentView: {
    borderRadius: 18,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,

    borderColor: "#fff",
    backgroundColor: "#0d0d0f",
    paddingHorizontal: 40,
    paddingVertical: 30,

    width: "100%",
    height: 400,
    marginVertical: 200,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  modalOverlay: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.75)",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  card: {
    width: 150,
    height: 225,
    margin: 4,
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
});
