import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "../../constants/Colors";

type ThemedCardProps = {
  style?: any;
  children?: React.ReactNode;
  onPress?: () => void;
};
const ThemedCard = ({ style, ...props }: ThemedCardProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  if (props.onPress) {
    return (
      <Pressable onPress={props.onPress}>
        <View
          style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
          {...props}
        >
          {props.children}
        </View>
      </Pressable>
    );
  }
  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    >
      {props.children}
    </View>
  );
};
export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
});
