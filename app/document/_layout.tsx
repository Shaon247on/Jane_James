import { Stack } from "expo-router";

export default function DocumentLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[id]" />
      <Stack.Screen name="instructions" />
      <Stack.Screen name="upload" />
      <Stack.Screen name="processing" />
      <Stack.Screen name="result" />
      <Stack.Screen name="result-fail" />
    </Stack>
  );
}
