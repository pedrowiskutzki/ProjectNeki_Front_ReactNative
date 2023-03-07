import { View } from "react-native";

interface spacerProps {
  x: number;
  y: number;
}

export const Spacer = ({ x, y }: spacerProps) => {
  return <View style={{ width: x, height: y }} />;
};
