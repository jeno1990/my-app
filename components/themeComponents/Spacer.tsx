import { View, StyleSheet } from "react-native";

const Spacer = ({ width = "100%", height = 40 }) => {
  return (
    <View
      style={{
        width: "100%",
        height: height,
      }}
    />
  );
};

export default Spacer;
