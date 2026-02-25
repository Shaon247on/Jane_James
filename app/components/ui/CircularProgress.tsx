import React from "react";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface Props {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

export const CircularProgress: React.FC<Props> = ({
  progress,
  size = 56,
  strokeWidth = 4,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getColor = () => {
    if (progress === 100) return "#4CAF50";
    if (progress > 0) return "#4F39F6";
    return "#E5E7EB";
  };

  return (
    <View
      style={{ width: size, height: size }}
      className="items-center justify-center"
    >
      <Svg
        width={size}
        height={size}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor()}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <Text className="text-xs font-bold text-gray-700">{progress}%</Text>
    </View>
  );
};
