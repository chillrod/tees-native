import { createContext, Dispatch, useState } from "react";
import uuid from "react-native-uuid";

import CanvasText from "~/components/canvas/text";

export interface CanvasItem {
  type: "TEXT" | "IMAGE";
  itemId: string | number[];
  item: React.ReactNode;
}

export const CanvasContext = createContext<{
  canvasItems: CanvasItem[];
  createCanvasItem: (type: "TEXT" | "IMAGE") => void;
}>({
  canvasItems: [],
  createCanvasItem: () => {},
});

export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const [canvasItems, setCanvasItems] = useState<CanvasItem[]>([]);

  const createCanvasItem = async (type: "TEXT" | "IMAGE") => {
    if (type === "TEXT") {
      const newItem: CanvasItem = {
        type,
        itemId: uuid.v4(),
        item: <CanvasText text="Novo Texto" />,
      };

      setCanvasItems((prev) => [...prev, newItem]);
    }
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasItems,
        createCanvasItem,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};
