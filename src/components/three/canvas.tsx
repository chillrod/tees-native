import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { TeeModel } from "./tee-model";

interface ICanvasProps {
  children: React.ReactNode;
}

export default function ThreeCanvas(props: ICanvasProps) {
  return (
    <Canvas>
      {props.children}
      <Stage environment="studio" intensity={4}>
        {/* <TeeModel /> */}
      </Stage>
    </Canvas>
  );
}
