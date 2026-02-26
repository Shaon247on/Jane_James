import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  if (!focused)
    return (
      <View className="flex-row items-center justify-center gap-1 min-w-[120px] min-h-[56px] mt-6">
        <Image source={icon} className="w-5 h-5" tintColor="#000000" />
        <Text className="text-black text-sm font-medium">{title}</Text>
      </View>
    );
  return (
    <View className="bg-[#000189] rounded-full flex-row items-center justify-center gap-1 min-w-[120px] min-h-[56px] mt-6 px-4">
      <Image source={icon} className="w-5 h-5" tintColor="#FFFFFF" />
      <Text className="text-white text-sm font-semibold">{title}</Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("@/assets/images/home.png")}
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("@/assets/images/history.png")}
              title="History"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("@/assets/images/person.png")}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
}
