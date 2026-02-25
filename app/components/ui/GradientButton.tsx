import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  outline?: boolean;
}

export const GradientButton: React.FC<Props> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  outline = false,
}) => {
  if (outline) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        className="rounded-xl border border-gray-400 py-4 items-center justify-center"
      >
        <Text className="text-gray-700 text-base font-semibold">{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.85}
      className="rounded-xl overflow-hidden"
    >
      <LinearGradient
        colors={disabled ? ["#9CA3AF", "#6B7280"] : ["#4F39F6", "#000189"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="py-4 items-center justify-center"
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-base font-semibold">{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
