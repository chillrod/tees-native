import { ScrollView, View, Dimensions } from "react-native";
import { Text } from "~/components/ui/text";
import { Image } from "expo-image";

import { Separator } from "~/components/ui/separator";
const images = [
  {
    image:
      "https://res.cloudinary.com/teepublic/image/private/s--zkVCN_cQ--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_470/c_crop,g_north_west,h_626,w_470,x_-93,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-488,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1583676959/production/designs/8372987_0",
    creator: "Florest",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.29350-15/312142968_3348484155418013_8249836388330346787_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44Mzl4ODM5LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=XqFZgdQ5wy8Q7kNvgHjbZxW&_nc_gid=08fc15881ebf44fcb6a23620ddb2bc24&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk1MzM5MzY1NDMzODM3MzYzOQ%3D%3D.3-ccb7-5&oh=00_AYAAEb4GaVu-Dy8fJC3wbAYVAfKAX7MmYI1Fzn5MUWdCOw&oe=66F39CA9&_nc_sid=10d13b",
    creator: "Bill",
  },
  {
    image:
      "https://instagram.fvix2-1.fna.fbcdn.net/v/t51.29350-15/450781855_517672673931006_8882399598547505774_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fvix2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NG18L5DaIagQ7kNvgGpxZzH&_nc_gid=0007bbe9e34f4759a3868ad671df2031&edm=AOmX9WgBAAAA&ccb=7-5&ig_cache_key=MzQwOTYxNjE5NTA0NzUzNjk4Mw%3D%3D.3-ccb7-5&oh=00_AYD2k3GCvkuA0BcCLe9YBbwewAxCiuZigsk7h9Y5tGoyZw&oe=66F39559&_nc_sid=bfaa47",
    creator: "Bill",
  },
];

export default function CreationsFeed() {
  return (
    <View>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <Text className="bg-stone-950 text-2xl font-bold mb-4">
          Studio Canvas Feed
        </Text>
        {images.map((image, id) => (
          <View key={id} className="rounded-lg pb-2 gap-4 mb-4">
            <Image
              source={{
                uri: image.image,
              }}
              contentFit="cover"
              style={{
                width: "100%",
                height: Dimensions.get("window").height / 3,
                borderRadius: 14,
              }}
            />
            <Text>Criação de {image.creator}</Text>
            <Separator />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
