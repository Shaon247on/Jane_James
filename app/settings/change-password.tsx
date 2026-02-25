import { GradientButton } from "@/app/components/ui/GradientButton";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const PasswordField = ({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View className="mb-5">
      <Text className="text-sm font-semibold text-gray-700 mb-2">{label}</Text>
      <View className="bg-white rounded-xl flex-row items-center px-4 shadow-sm">
        <TextInput
          className="flex-1 py-4 text-gray-800 text-base"
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={!visible}
        />
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Image
            source={require("@/assets/images/eye.png")}
            className="w-5 h-5"
            style={{ tintColor: visible ? "#4F39F6" : "#9CA3AF" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function ChangePasswordScreen() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white pt-14 px-4 pb-4 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center"
        >
          <Image
            source={require("@/assets/images/arrow-left.png")}
            className="w-5 h-5"
            style={{ tintColor: "#374151" }}
          />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">Change Password</Text>
        <View className="w-10" />
      </View>

      <View className="flex-1 px-5 pt-7">
        <Text className="text-xl font-bold text-gray-700 mb-2">
          Change Password
        </Text>
        <Text className="text-sm text-gray-500 leading-5 mb-7">
          Your new password must be at least 8 characters long and include a mix
          of numbers and symbols.
        </Text>

        <PasswordField
          label="Current Password"
          value={current}
          onChange={setCurrent}
          placeholder="Enter current password"
        />
        <PasswordField
          label="New Password"
          value={newPass}
          onChange={setNewPass}
          placeholder="Enter new password"
        />
        <PasswordField
          label="Confirm New Password"
          value={confirm}
          onChange={setConfirm}
          placeholder="Confirm new password"
        />
      </View>

      <View className="px-5 pb-10">
        <GradientButton title="Save" onPress={() => router.back()} />
      </View>
    </View>
  );
}
