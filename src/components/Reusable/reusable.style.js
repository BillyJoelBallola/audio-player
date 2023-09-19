import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

const reusable = StyleSheet.create({
  container: {
    height: '100%'
  },
  marginHorizonral: {
    marginHorizonral: 20,
  },
  rowWithSpace: (justifyContent) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent
  })
});

export default reusable;