import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'DNT-DESIGN',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs', // github只能部署docs文件，其他文件无法选择
  resolve: {
    includes: ['_docs', 'src'],
  },
  // publicPath: './',
  history: { type: 'hash' },
  // base: '/dnt-design',
  hash: true,
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ], // 第一个代表默认值
  navs: [
    {
      title: '指南',
      path: '',
    },
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitLab',
      path: 'https://gitlab2.cspiretech.com/frontend/componentsapi',
    },
  ],
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: false,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: [],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  postcssLoader: {},

  // more config: https://d.umijs.org/config
});
