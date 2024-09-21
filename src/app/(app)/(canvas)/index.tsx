import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import DrawOptions from "~/components/canvas/draw-options";
import CanvasText from "~/components/canvas/text";
import { CanvasContext } from "./context";

export default function CanvasPage() {
  const { canvasItems } = useContext(CanvasContext);
  return (
    <View className="bg-stone-900 h-full w-full">
      {canvasItems.map((item) => (
        <CanvasText
          key={Array.isArray(item.itemId) ? item.itemId.join("-") : item.itemId}
          text="Novo Texto"
        />
      ))}
      <View className="absolute bottom-0 right-0">
        <DrawOptions />
      </View>
    </View>
  );
}
