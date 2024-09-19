import { View } from "react-native";

import useControls from "r3f-native-orbitcontrols";
import ThreeCanvas from "~/components/three/canvas";

export default function Screen() {
  const [OrbitControls, events] = useControls();

  return (
    <View
      className="bg-stone-900 h-1/3 p-4 rounded-lg m-6 flex flex-1"
      {...events}
    >
      <ThreeCanvas>
        <OrbitControls minZoom={5} maxZoom={10} enablePan />
      </ThreeCanvas>
    </View>
  );
}
