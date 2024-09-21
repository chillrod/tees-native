import { View } from "react-native";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import Icons from "@expo/vector-icons/Feather";
import { useContext } from "react";
import { CanvasContext } from "~/app/(app)/(canvas)/context";

export default function DrawOptions() {
  const { createCanvasItem } = useContext(CanvasContext);

  return (
    <View className="bg-stone-900 rounded-lg flex-row gap-4 p-2 justify-end">
      <Button variant="secondary" onPress={() => createCanvasItem("TEXT")}>
        <Icons name="type" color="white" size={16} />
      </Button>
      <Button variant="secondary" disabled>
        <Icons name="image" color="white" size={24} />
      </Button>
    </View>
  );
}
