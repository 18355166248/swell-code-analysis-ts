module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3, // 可选，指定使用 core-js 版本
        regenerator: true, // 可选，使用 regenerator runtime 来编译 async/await
        useESModules: true, // 如果你使用 ESM，推荐启用此选项
      },
    ],
  ],
};
