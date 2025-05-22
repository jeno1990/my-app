import { JSX } from "react";
import { Pressable, PressableProps, Text, ViewStyle } from "react-native";

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  style,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <Pressable
      disabled={props.disabled}
      onPress={props.onPress}
      style={({ pressed }) => [
        {
          backgroundColor: "white",
          padding: 14,
          borderRadius: 14,
          width: "100%",
        },
        style,
        pressed && {
          opacity: 0.5,
        },
      ]}
      {...props}
    >
      {typeof children === "string" ? (
        <Text style={{ textAlign: "center", fontWeight: "500" }}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
