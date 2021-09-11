import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    external: ["styled-components"],
    plugins: [typescript()],
    output: [{ file: pkg.module, format: "es" }],
  },
];
