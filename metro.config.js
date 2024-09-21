const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "cjs",
  "js",
  "jsx",
  "json",
  "ts",
  "tsx",
  "cjs",
  "mjs",
];

config.resolver.assetExts = [
  ...config.resolver.assetExts,
  "glb",
  "gltf",
  "png",
  "jpg",
  "svg",
];

module.exports = withNativeWind(config, { input: "./src/config/global.css" });
