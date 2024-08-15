import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";

const plugins = [
  nodeResolve({
    exportConditions: ["node"], // add node option here,
    preferBuiltins: false,
  }),
  commonjs(),
  babel({ babelHelpers: "bundled" }),
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
    input: "src/sca.mts",
    output: {
      file: "bin/index.js",
      format: "cjs",
    },
    plugins: [del({ targets: ["bin/*"] }), ...plugins],
  },
];
