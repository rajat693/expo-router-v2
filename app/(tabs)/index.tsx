import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>this is tab one</Text>
      <Link href="/modal">
        <Text>Open Modal</Text>
      </Link>
    </View>
  );
}
