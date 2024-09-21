import { View } from "react-native";

import { Text } from "~/components/ui/text";
import CreationsFeed from "~/views/creations-feed";

export default function AppRoot() {
  return (
    <View className="h-[100%] p-4">
      <CreationsFeed />
    </View>
  );
}
