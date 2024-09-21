import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Image } from "expo-image";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";

export default function SigninPage() {
  return (
    <View className="p-4">
      <Image source={require("~/assets/enterprise/studio-logo.png")} />
      {/* <Text className="text-stone-200">Hello</Text> */}
      {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          // initiate sign in
        }}
        // disabled={isInProgress}
      /> */}
    </View>
  );
}
