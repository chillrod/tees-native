import "~/config/global.css";

import { Stack, Tabs } from "expo-router";
import Icons from "@expo/vector-icons/Feather";
import { CanvasProvider } from "./(canvas)/context";

export const unstable_settings = {
  initialRouteName: "(feed)",
};

export default function BaseLayout() {
  return (
    <CanvasProvider>
      <Tabs>
        <Tabs.Screen
          name="(feed)"
          options={{
            title: "Ideas",
            tabBarIcon: ({ color, size }) => (
              <Icons name="feather" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="(canvas)"
          options={{
            title: "Canvas",
            tabBarIcon: ({ color, size }) => (
              <Icons name="pen-tool" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </CanvasProvider>
  );
}
