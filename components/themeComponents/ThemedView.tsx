import { useColorScheme, SafeAreaView, View } from "react-native";
import { Colors } from "../../constants/Colors";

type ThemedViewProps = {
  style?: any;
  safe?: boolean;
  children?: React.ReactNode;
};
const ThemedView = ({ style, ...props }: ThemedViewProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme] ?? Colors.light;
  if (!props.safe) {
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );
  }
  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  );
};

export default ThemedView;
