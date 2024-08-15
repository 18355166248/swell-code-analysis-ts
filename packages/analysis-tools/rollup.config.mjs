import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";

const plugins = [
  resolve(),
  commonjs(),
  babel({ babelHelpers: "runtime" }),
  json(), // 使用 JSON 插件
];

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/ts.js",
      format: "esm",
    },
    plugins: [del({ targets: ["dist/*"] }), ...plugins],
  },
  {
    input: "src/sca.ts",
    output: {
      file: "bin/index.js",
      format: "cjs",
    },
    plugins: [del({ targets: ["bin/*"] }), ...plugins],
  },
];
