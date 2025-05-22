import { Text, useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";

type ThemedTextProps = {
  style?: any;
  title?: boolean;
  children?: React.ReactNode;
};
const ThemedText = ({ style, title = false, ...props }: ThemedTextProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme] ?? Colors.light;

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
