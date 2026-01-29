// vite.config.ts
import { loadEnv } from "file:///root/projects/meme-server/web/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.2_less@4.2.0_terser@5.31.6/node_modules/vite/dist/node/index.js";
import { resolve } from "path";

// build/utils.ts
import dotenv from "file:///root/projects/meme-server/web/node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/lib/main.js";
function wrapperEnv(envConf) {
  const ret = {};
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;
    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    if (envName === "VITE_PROXY") {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
      }
    }
    ret[envName] = realName;
  }
  return ret;
}

// build/vite/plugin/index.ts
import Components from "file:///root/projects/meme-server/web/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.6_rollup@4.21.2_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { NaiveUiResolver } from "file:///root/projects/meme-server/web/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.6_rollup@4.21.2_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///root/projects/meme-server/web/node_modules/.pnpm/unplugin-auto-import@20.3.0_@vueuse+core@11.0.3_vue@3.4.38_typescript@5.5.4__/node_modules/unplugin-auto-import/dist/vite.mjs";
import topLevelAwait from "file:///root/projects/meme-server/web/node_modules/.pnpm/vite-plugin-top-level-await@1.4.4_rollup@4.21.2_vite@5.4.2_@types+node@22.5.2_less@4.2.0_terser@5.31.6_/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import setupExtend from "file:///root/projects/meme-server/web/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@5.4.2_@types+node@22.5.2_less@4.2.0_terser@5.31.6_/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import vue from "file:///root/projects/meme-server/web/node_modules/.pnpm/@vitejs+plugin-vue@5.1.3_vite@5.4.2_@types+node@22.5.2_less@4.2.0_terser@5.31.6__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///root/projects/meme-server/web/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.2_@types+node@22.5.2_less@4.2.0_terser@5.31.6__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";

// build/vite/plugin/html.ts
import { createHtmlPlugin } from "file:///root/projects/meme-server/web/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.4.2_@types+node@22.5.2_less@4.2.0_terser@5.31.6_/node_modules/vite-plugin-html/dist/index.mjs";

// package.json
var package_default = {
  name: "hotgo",
  type: "module",
  version: "2.18.6",
  author: {
    name: "MengShuai",
    email: "133814250@qq.com",
    url: "https://github.com/bufanyun/hotgo"
  },
  private: true,
  scripts: {
    bootstrap: "pnpm install",
    serve: "pnpm run dev",
    dev: "vite",
    build: "vite build && esno ./build/script/postBuild.ts",
    "build:no-cache": "pnpm clean:cache && pnpm run build",
    report: "cross-env REPORT=true pnpm run build",
    preview: "pnpm run build && vite preview",
    "preview:dist": "vite preview",
    "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
    "clean:lib": "rimraf node_modules",
    deploy: "gh-pages -d dist",
    "lint:eslint": 'eslint "{src,mock}/**/*.{vue,ts,tsx}" --fix',
    "lint:prettier": 'prettier --write --loglevel warn "src/**/*.{js,json,tsx,css,less,scss,vue,html,md}"',
    "lint:stylelint": 'stylelint --fix "**/*.{vue,less,postcss,css,scss}" --cache --cache-location node_modules/.cache/stylelint/',
    "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
    "lint:pretty": "pretty-quick --staged",
    "build typecheck": "vuedx-typecheck . && vite build",
    "test prod gzip": "http-server dist --cors --gzip -c-1"
  },
  dependencies: {
    "@codemirror/basic-setup": "^0.20.0",
    "@codemirror/lang-yaml": "^6.1.2",
    "@codemirror/state": "^6.5.2",
    "@codemirror/theme-one-dark": "^6.1.3",
    "@codemirror/view": "^6.38.2",
    "@vicons/antd": "^0.12.0",
    "@vicons/ionicons5": "^0.12.0",
    "@vue/runtime-core": "^3.4.38",
    "@vueup/vue-quill": "^1.2.0",
    "@vueuse/core": "^11.0.3",
    axios: "^1.7.7",
    "blueimp-md5": "^2.19.0",
    codemirror: "^6.0.2",
    "date-fns": "^3.6.0",
    echarts: "^5.5.1",
    "element-resize-detector": "^1.2.4",
    fingerprintjs2: "^2.1.4",
    "highlight.js": "^11.10.0",
    "js-yaml": "^4.1.0",
    "lodash-es": "^4.17.21",
    "mint-filter": "^4.0.3",
    mitt: "^3.0.1",
    "naive-ui": "^2.43.1",
    pinia: "^2.2.2",
    "pinyin-pro": "^3.24.2",
    "print-js": "^1.6.0",
    "qrcode.vue": "3.4.1",
    qs: "^6.13.0",
    "quill-image-uploader": "^1.3.0",
    "quill-magic-url": "^4.2.0",
    "spark-md5": "^3.0.2",
    "throttle-debounce": "^5.0.2",
    vfonts: "^0.0.3",
    vue: "^3.4.38",
    "vue-i18n": "^11.1.11",
    "vue-router": "^4.4.3",
    "vue-types": "^5.1.3",
    "vue-waterfall-plugin-next": "^2.6.0",
    "vue3-json-viewer": "^2.4.1",
    vuedraggable: "^4.1.0",
    "weixin-js-sdk": "^1.6.5"
  },
  devDependencies: {
    "@commitlint/cli": "^19.4.1",
    "@commitlint/config-conventional": "^19.4.1",
    "@eslint/eslintrc": "^3.1.0",
    "@types/fs-extra": "^11.0.4",
    "@types/js-yaml": "^4.0.9",
    "@types/lodash-es": "^4.17.12",
    "@types/node": "^22.5.2",
    "@typescript-eslint/eslint-plugin": "^8.4.0",
    "@typescript-eslint/parser": "^8.4.0",
    "@vitejs/plugin-vue": "^5.1.3",
    "@vitejs/plugin-vue-jsx": "^4.0.1",
    "@vue/compiler-sfc": "^3.4.38",
    "@vue/eslint-config-typescript": "^13.0.0",
    autoprefixer: "^10.4.20",
    chalk: "^5.3.0",
    commitizen: "^4.3.0",
    "core-js": "^3.38.1",
    "cross-env": "^7.0.3",
    "crypto-js": "^4.2.0",
    dotenv: "^16.4.5",
    eslint: "^9.9.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-define-config": "2.1.0",
    "eslint-plugin-jest": "^28.8.2",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-vue": "^9.28.0",
    esno: "^4.7.0",
    "fs-extra": "^11.2.0",
    "gh-pages": "^6.1.1",
    husky: "^9.1.5",
    jest: "^29.7.0",
    less: "^4.2.0",
    "less-loader": "^12.2.0",
    "lint-staged": "^15.2.10",
    mockjs: "^1.1.0",
    "npm-check-updates": "^17.1.1",
    postcss: "^8.4.44",
    prettier: "^3.3.3",
    "pretty-quick": "^4.0.0",
    rimraf: "^6.0.1",
    stylelint: "^16.9.0",
    "stylelint-config-prettier": "^9.0.5",
    "stylelint-config-standard": "^36.0.1",
    "stylelint-order": "^6.0.4",
    "stylelint-scss": "^6.5.1",
    tailwindcss: "^3.4.10",
    typescript: "^5.5.4",
    "unplugin-auto-import": "^20.2.0",
    "unplugin-vue-components": "^0.27.4",
    vite: "^5.4.2",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-html": "^3.2.2",
    "vite-plugin-mock": "^3.0.2",
    "vite-plugin-require-transform": "^1.0.21",
    "vite-plugin-style-import": "^2.0.0",
    "vite-plugin-top-level-await": "^1.4.4",
    "vite-plugin-vue-setup-extend": "^0.4.0",
    "vue-demi": "^0.14.10",
    "vue-draggable-next": "^2.2.1",
    "vue-eslint-parser": "^9.4.3",
    vuedraggable: "^4.1.0"
  },
  "lint-staged": {
    "*.{vue,js,ts,tsx}": "eslint --fix"
  },
  config: {
    commitizen: {
      path: "./node_modules/cz-customizable"
    }
  },
  keywords: [
    "hotgo",
    "hg",
    "gf",
    "goframe",
    "vue",
    "naive-ui",
    "naive-ui-admin",
    "vue3",
    "ts",
    "tsx",
    "admin",
    "typescript"
  ],
  repository: {
    type: "git",
    url: "git+https://github.com/bufanyun/hotgo.git"
  },
  license: "MIT",
  bugs: {
    url: "https://github.com/bufanyun/hotgo/issues"
  },
  homepage: "https://github.com/bufanyun/hotgo",
  engines: {
    node: ">=16"
  }
};

// build/constant.ts
var GLOB_CONFIG_FILE_NAME = "app.config.js";
var OUTPUT_DIR = "dist";

// build/vite/plugin/html.ts
function configHtmlPlugin(env, isBuild) {
  const { VITE_GLOB_APP_TITLE, VITE_PUBLIC_PATH } = env;
  const path = VITE_PUBLIC_PATH.endsWith("/") ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`;
  const getAppConfigSrc = () => {
    return `${path || "/"}${GLOB_CONFIG_FILE_NAME}?v=${package_default.version}-${(/* @__PURE__ */ new Date()).getTime()}`;
  };
  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      data: {
        title: VITE_GLOB_APP_TITLE
      },
      // Embed the generated app.config.js file
      tags: isBuild ? [
        {
          tag: "script",
          attrs: {
            src: getAppConfigSrc()
          }
        }
      ] : []
    }
  });
}

// build/vite/plugin/compress.ts
import compressPlugin from "file:///root/projects/meme-server/web/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.2_@types+node@22.5.2_less@4.2.0_terser@5.31.6_/node_modules/vite-plugin-compression/dist/index.mjs";
function configCompressPlugin(compress, deleteOriginFile = false) {
  const compressList = compress.split(",");
  const plugins = [];
  if (compressList.includes("gzip")) {
    plugins.push(
      compressPlugin({
        ext: ".gz",
        deleteOriginFile
      })
    );
  }
  if (compressList.includes("brotli")) {
    plugins.push(
      compressPlugin({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile
      })
    );
  }
  return plugins;
}

// build/vite/plugin/index.ts
function createVitePlugins(viteEnv, isBuild) {
  const { VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
  const vitePlugins = [
    // have to
    vue(),
    // have to
    vueJsx(),
    // 按需引入NaiveUi且自动创建组件声明
    Components({
      dts: true,
      resolvers: [NaiveUiResolver()]
    }),
    // 自动引入API
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        {
          "@/locale/index": ["t"]
        }
      ],
      dts: "auto-imports.d.ts"
    }),
    // 支持顶级wait
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`
    })
  ];
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
  if (isBuild) {
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
    );
  }
  vitePlugins.push(setupExtend());
  return vitePlugins;
}

// build/vite/proxy.ts
var httpsRE = /^https:\/\//;
function createProxy(list = []) {
  const ret = {};
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);
    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ""),
      // https is require secure=false
      ...isHttps ? { secure: false } : {}
    };
  }
  return ret;
}

// vite.config.ts
import { format } from "file:///root/projects/meme-server/web/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/index.mjs";
var { dependencies, devDependencies, name, version } = package_default;
var __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm:ss")
};
function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}
var vite_config_default = ({ command, mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_PROXY } = viteEnv;
  const isBuild = command === "build";
  return {
    base: VITE_PUBLIC_PATH,
    esbuild: {},
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/"
        },
        {
          find: "@",
          replacement: pathResolve("src") + "/"
        }
      ],
      dedupe: ["vue"]
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
          additionalData: `@import "src/styles/var.less";`
        }
      }
    },
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY)
      // proxy: {
      //     '/api': {
      //         target: '',
      //         changeOrigin: true,
      //         rewrite: (path) => path.replace(/^\/api/, '/api/v1')
      //     }
      // }
    },
    optimizeDeps: {
      include: [],
      exclude: ["vue-demi"]
    },
    build: {
      target: "es2015",
      cssTarget: "chrome80",
      outDir: OUTPUT_DIR,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 3e3
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdXRpbHMudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vaW5kZXgudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vaHRtbC50cyIsICJwYWNrYWdlLmpzb24iLCAiYnVpbGQvY29uc3RhbnQudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4vY29tcHJlc3MudHMiLCAiYnVpbGQvdml0ZS9wcm94eS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Jvb3QvcHJvamVjdHMvbWVtZS1zZXJ2ZXIvd2ViL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB0eXBlIHsgVXNlckNvbmZpZywgQ29uZmlnRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB3cmFwcGVyRW52IH0gZnJvbSAnLi9idWlsZC91dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVWaXRlUGx1Z2lucyB9IGZyb20gJy4vYnVpbGQvdml0ZS9wbHVnaW4nO1xuaW1wb3J0IHsgT1VUUFVUX0RJUiB9IGZyb20gJy4vYnVpbGQvY29uc3RhbnQnO1xuaW1wb3J0IHsgY3JlYXRlUHJveHkgfSBmcm9tICcuL2J1aWxkL3ZpdGUvcHJveHknO1xuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5jb25zdCB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBuYW1lLCB2ZXJzaW9uIH0gPSBwa2c7XG5cbmNvbnN0IF9fQVBQX0lORk9fXyA9IHtcbiAgcGtnOiB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBuYW1lLCB2ZXJzaW9uIH0sXG4gIGxhc3RCdWlsZFRpbWU6IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCBISDptbTpzcycpLFxufTtcblxuZnVuY3Rpb24gcGF0aFJlc29sdmUoZGlyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4nLCBkaXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tYW5kLCBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCByb290KTtcbiAgY29uc3Qgdml0ZUVudiA9IHdyYXBwZXJFbnYoZW52KTtcbiAgY29uc3QgeyBWSVRFX1BVQkxJQ19QQVRILCBWSVRFX1BPUlQsIFZJVEVfUFJPWFkgfSA9IHZpdGVFbnY7XG4gIGNvbnN0IGlzQnVpbGQgPSBjb21tYW5kID09PSAnYnVpbGQnO1xuICByZXR1cm4ge1xuICAgIGJhc2U6IFZJVEVfUFVCTElDX1BBVEgsXG4gICAgZXNidWlsZDoge30sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9cXC8jXFwvLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aFJlc29sdmUoJ3R5cGVzJykgKyAnLycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAnQCcsXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGhSZXNvbHZlKCdzcmMnKSArICcvJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkZWR1cGU6IFsndnVlJ10sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBjcmVhdGVWaXRlUGx1Z2lucyh2aXRlRW52LCBpc0J1aWxkKSxcbiAgICBkZWZpbmU6IHtcbiAgICAgIF9fQVBQX0lORk9fXzogSlNPTi5zdHJpbmdpZnkoX19BUFBfSU5GT19fKSxcbiAgICAgIF9fVlVFX09QVElPTlNfQVBJX186IHRydWUsXG4gICAgICBfX1ZVRV9QUk9EX0RFVlRPT0xTX186IGZhbHNlLFxuICAgICAgX19WVUVfUFJPRF9IWURSQVRJT05fTUlTTUFUQ0hfREVUQUlMU19fOiB0cnVlLFxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIGxlc3M6IHtcbiAgICAgICAgICBtb2RpZnlWYXJzOiB7fSxcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJzcmMvc3R5bGVzL3Zhci5sZXNzXCI7YCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IHRydWUsXG4gICAgICBwb3J0OiBWSVRFX1BPUlQsXG4gICAgICBwcm94eTogY3JlYXRlUHJveHkoVklURV9QUk9YWSksXG4gICAgICAvLyBwcm94eToge1xuICAgICAgLy8gICAgICcvYXBpJzoge1xuICAgICAgLy8gICAgICAgICB0YXJnZXQ6ICcnLFxuICAgICAgLy8gICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAvLyAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnL2FwaS92MScpXG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gfVxuICAgIH0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBpbmNsdWRlOiBbXSxcbiAgICAgIGV4Y2x1ZGU6IFsndnVlLWRlbWknXSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICB0YXJnZXQ6ICdlczIwMTUnLFxuICAgICAgY3NzVGFyZ2V0OiAnY2hyb21lODAnLFxuICAgICAgb3V0RGlyOiBPVVRQVVRfRElSLFxuICAgICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAzMDAwLFxuICAgIH0sXG4gIH07XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcm9vdC9wcm9qZWN0cy9tZW1lLXNlcnZlci93ZWIvYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi9idWlsZC91dGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vcm9vdC9wcm9qZWN0cy9tZW1lLXNlcnZlci93ZWIvYnVpbGQvdXRpbHMudHNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RldkZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZSA9PT0gJ2RldmVsb3BtZW50Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZEZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdG8gZ2VuZXJhdGUgcGFja2FnZSBwcmV2aWV3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlcG9ydE1vZGUoKTogYm9vbGVhbiB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5SRVBPUlQgPT09ICd0cnVlJztcbn1cblxuLy8gUmVhZCBhbGwgZW52aXJvbm1lbnQgdmFyaWFibGUgY29uZmlndXJhdGlvbiBmaWxlcyB0byBwcm9jZXNzLmVudlxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZXJFbnYoZW52Q29uZjogUmVjb3JkYWJsZSk6IFZpdGVFbnYge1xuICBjb25zdCByZXQ6IGFueSA9IHt9O1xuXG4gIGZvciAoY29uc3QgZW52TmFtZSBvZiBPYmplY3Qua2V5cyhlbnZDb25mKSkge1xuICAgIGxldCByZWFsTmFtZSA9IGVudkNvbmZbZW52TmFtZV0ucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpO1xuICAgIHJlYWxOYW1lID0gcmVhbE5hbWUgPT09ICd0cnVlJyA/IHRydWUgOiByZWFsTmFtZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcmVhbE5hbWU7XG5cbiAgICBpZiAoZW52TmFtZSA9PT0gJ1ZJVEVfUE9SVCcpIHtcbiAgICAgIHJlYWxOYW1lID0gTnVtYmVyKHJlYWxOYW1lKTtcbiAgICB9XG4gICAgaWYgKGVudk5hbWUgPT09ICdWSVRFX1BST1hZJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVhbE5hbWUgPSBKU09OLnBhcnNlKHJlYWxOYW1lKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH1cbiAgICByZXRbZW52TmFtZV0gPSByZWFsTmFtZTtcbiAgICAvLyBwcm9jZXNzLmVudltlbnZOYW1lXSA9IHJlYWxOYW1lO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc3RhcnRpbmcgd2l0aCB0aGUgc3BlY2lmaWVkIHByZWZpeFxuICogQHBhcmFtIG1hdGNoIHByZWZpeFxuICogQHBhcmFtIGNvbmZGaWxlcyBleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVudkNvbmZpZyhtYXRjaCA9ICdWSVRFX0dMT0JfJywgY29uZkZpbGVzID0gWycuZW52JywgJy5lbnYucHJvZHVjdGlvbiddKSB7XG4gIGxldCBlbnZDb25maWcgPSB7fTtcbiAgY29uZkZpbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZW52ID0gZG90ZW52LnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgaXRlbSkpKTtcbiAgICAgIGVudkNvbmZpZyA9IHsgLi4uZW52Q29uZmlnLCAuLi5lbnYgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoZW52Q29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGBeKCR7bWF0Y2h9KWApO1xuICAgIGlmICghcmVnLnRlc3Qoa2V5KSkge1xuICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShlbnZDb25maWcsIGtleSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGVudkNvbmZpZztcbn1cblxuLyoqXG4gKiBHZXQgbWVtYmVyIHJvb3QgZGlyZWN0b3J5XG4gKiBAcGFyYW0gZGlyIGZpbGUgcGF0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdFBhdGgoLi4uZGlyOiBzdHJpbmdbXSkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIC4uLmRpcik7XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi9idWlsZC92aXRlL3BsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Jvb3QvcHJvamVjdHMvbWVtZS1zZXJ2ZXIvd2ViL2J1aWxkL3ZpdGUvcGx1Z2luL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi9idWlsZC92aXRlL3BsdWdpbi9pbmRleC50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IE5haXZlVWlSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCB0b3BMZXZlbEF3YWl0IGZyb20gJ3ZpdGUtcGx1Z2luLXRvcC1sZXZlbC1hd2FpdCc7XG5pbXBvcnQgc2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnO1xuaW1wb3J0IHsgY29uZmlnSHRtbFBsdWdpbiB9IGZyb20gJy4vaHRtbCc7XG5pbXBvcnQgeyBjb25maWdDb21wcmVzc1BsdWdpbiB9IGZyb20gJy4vY29tcHJlc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVml0ZVBsdWdpbnModml0ZUVudjogVml0ZUVudiwgaXNCdWlsZDogYm9vbGVhbikge1xuICBjb25zdCB7IFZJVEVfQlVJTERfQ09NUFJFU1MsIFZJVEVfQlVJTERfQ09NUFJFU1NfREVMRVRFX09SSUdJTl9GSUxFIH0gPSB2aXRlRW52O1xuXG4gIGNvbnN0IHZpdGVQbHVnaW5zOiAoUGx1Z2luIHwgUGx1Z2luW10pW10gPSBbXG4gICAgLy8gaGF2ZSB0b1xuICAgIHZ1ZSgpLFxuICAgIC8vIGhhdmUgdG9cbiAgICB2dWVKc3goKSxcblxuICAgIC8vIFx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NU5haXZlVWlcdTRFMTRcdTgxRUFcdTUyQThcdTUyMUJcdTVFRkFcdTdFQzRcdTRFRjZcdTU4RjBcdTY2MEVcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGR0czogdHJ1ZSxcbiAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpXSxcbiAgICB9KSxcblxuICAgIC8vIFx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NUFQSVxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICB7XG4gICAgICAgICAgJ0AvbG9jYWxlL2luZGV4JzogWyd0J10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZHRzOiAnYXV0by1pbXBvcnRzLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gXHU2NTJGXHU2MzAxXHU5ODc2XHU3RUE3d2FpdFxuICAgIHRvcExldmVsQXdhaXQoe1xuICAgICAgLy8gVGhlIGV4cG9ydCBuYW1lIG9mIHRvcC1sZXZlbCBhd2FpdCBwcm9taXNlIGZvciBlYWNoIGNodW5rIG1vZHVsZVxuICAgICAgcHJvbWlzZUV4cG9ydE5hbWU6ICdfX3RsYScsXG4gICAgICAvLyBUaGUgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgaW1wb3J0IG5hbWVzIG9mIHRvcC1sZXZlbCBhd2FpdCBwcm9taXNlIGluIGVhY2ggY2h1bmsgbW9kdWxlXG4gICAgICBwcm9taXNlSW1wb3J0TmFtZTogKGkpID0+IGBfX3RsYV8ke2l9YCxcbiAgICB9KSxcbiAgXTtcblxuICAvLyB2aXRlLXBsdWdpbi1odG1sXG4gIHZpdGVQbHVnaW5zLnB1c2goY29uZmlnSHRtbFBsdWdpbih2aXRlRW52LCBpc0J1aWxkKSk7XG5cbiAgaWYgKGlzQnVpbGQpIHtcbiAgICAvLyByb2xsdXAtcGx1Z2luLWd6aXBcbiAgICB2aXRlUGx1Z2lucy5wdXNoKFxuICAgICAgY29uZmlnQ29tcHJlc3NQbHVnaW4oVklURV9CVUlMRF9DT01QUkVTUywgVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEUpXG4gICAgKTtcbiAgfVxuXG4gIHZpdGVQbHVnaW5zLnB1c2goc2V0dXBFeHRlbmQoKSk7XG5cbiAgcmV0dXJuIHZpdGVQbHVnaW5zO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcm9vdC9wcm9qZWN0cy9tZW1lLXNlcnZlci93ZWIvYnVpbGQvdml0ZS9wbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi9idWlsZC92aXRlL3BsdWdpbi9odG1sLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi9idWlsZC92aXRlL3BsdWdpbi9odG1sLnRzXCI7LyoqXG4gKiBQbHVnaW4gdG8gbWluaW1pemUgYW5kIHVzZSBlanMgdGVtcGxhdGUgc3ludGF4IGluIGluZGV4Lmh0bWwuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5uY3diL3ZpdGUtcGx1Z2luLWh0bWxcbiAqL1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnO1xuaW1wb3J0IHBrZyBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgR0xPQl9DT05GSUdfRklMRV9OQU1FIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnSHRtbFBsdWdpbihlbnY6IFZpdGVFbnYsIGlzQnVpbGQ6IGJvb2xlYW4pIHtcbiAgY29uc3QgeyBWSVRFX0dMT0JfQVBQX1RJVExFLCBWSVRFX1BVQkxJQ19QQVRIIH0gPSBlbnY7XG5cbiAgY29uc3QgcGF0aCA9IFZJVEVfUFVCTElDX1BBVEguZW5kc1dpdGgoJy8nKSA/IFZJVEVfUFVCTElDX1BBVEggOiBgJHtWSVRFX1BVQkxJQ19QQVRIfS9gO1xuXG4gIGNvbnN0IGdldEFwcENvbmZpZ1NyYyA9ICgpID0+IHtcbiAgICByZXR1cm4gYCR7cGF0aCB8fCAnLyd9JHtHTE9CX0NPTkZJR19GSUxFX05BTUV9P3Y9JHtwa2cudmVyc2lvbn0tJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICB9O1xuXG4gIHJldHVybiBjcmVhdGVIdG1sUGx1Z2luKHtcbiAgICBtaW5pZnk6IGlzQnVpbGQsXG4gICAgaW5qZWN0OiB7XG4gICAgICAvLyBJbmplY3QgZGF0YSBpbnRvIGVqcyB0ZW1wbGF0ZVxuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogVklURV9HTE9CX0FQUF9USVRMRSxcbiAgICAgIH0sXG4gICAgICAvLyBFbWJlZCB0aGUgZ2VuZXJhdGVkIGFwcC5jb25maWcuanMgZmlsZVxuICAgICAgdGFnczogaXNCdWlsZFxuICAgICAgICA/IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWc6ICdzY3JpcHQnLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBnZXRBcHBDb25maWdTcmMoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgICA6IFtdLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiaG90Z29cIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwidmVyc2lvblwiOiBcIjIuMTguNlwiLFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJuYW1lXCI6IFwiTWVuZ1NodWFpXCIsXG4gICAgXCJlbWFpbFwiOiBcIjEzMzgxNDI1MEBxcS5jb21cIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9idWZhbnl1bi9ob3Rnb1wiXG4gIH0sXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYm9vdHN0cmFwXCI6IFwicG5wbSBpbnN0YWxsXCIsXG4gICAgXCJzZXJ2ZVwiOiBcInBucG0gcnVuIGRldlwiLFxuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkICYmIGVzbm8gLi9idWlsZC9zY3JpcHQvcG9zdEJ1aWxkLnRzXCIsXG4gICAgXCJidWlsZDpuby1jYWNoZVwiOiBcInBucG0gY2xlYW46Y2FjaGUgJiYgcG5wbSBydW4gYnVpbGRcIixcbiAgICBcInJlcG9ydFwiOiBcImNyb3NzLWVudiBSRVBPUlQ9dHJ1ZSBwbnBtIHJ1biBidWlsZFwiLFxuICAgIFwicHJldmlld1wiOiBcInBucG0gcnVuIGJ1aWxkICYmIHZpdGUgcHJldmlld1wiLFxuICAgIFwicHJldmlldzpkaXN0XCI6IFwidml0ZSBwcmV2aWV3XCIsXG4gICAgXCJjbGVhbjpjYWNoZVwiOiBcInJpbXJhZiBub2RlX21vZHVsZXMvLmNhY2hlLyAmJiByaW1yYWYgbm9kZV9tb2R1bGVzLy52aXRlXCIsXG4gICAgXCJjbGVhbjpsaWJcIjogXCJyaW1yYWYgbm9kZV9tb2R1bGVzXCIsXG4gICAgXCJkZXBsb3lcIjogXCJnaC1wYWdlcyAtZCBkaXN0XCIsXG4gICAgXCJsaW50OmVzbGludFwiOiBcImVzbGludCBcXFwie3NyYyxtb2NrfS8qKi8qLnt2dWUsdHMsdHN4fVxcXCIgLS1maXhcIixcbiAgICBcImxpbnQ6cHJldHRpZXJcIjogXCJwcmV0dGllciAtLXdyaXRlIC0tbG9nbGV2ZWwgd2FybiBcXFwic3JjLyoqLyoue2pzLGpzb24sdHN4LGNzcyxsZXNzLHNjc3MsdnVlLGh0bWwsbWR9XFxcIlwiLFxuICAgIFwibGludDpzdHlsZWxpbnRcIjogXCJzdHlsZWxpbnQgLS1maXggXFxcIioqLyoue3Z1ZSxsZXNzLHBvc3Rjc3MsY3NzLHNjc3N9XFxcIiAtLWNhY2hlIC0tY2FjaGUtbG9jYXRpb24gbm9kZV9tb2R1bGVzLy5jYWNoZS9zdHlsZWxpbnQvXCIsXG4gICAgXCJsaW50OmxpbnQtc3RhZ2VkXCI6IFwibGludC1zdGFnZWQgLWMgLi8uaHVza3kvbGludHN0YWdlZHJjLmpzXCIsXG4gICAgXCJsaW50OnByZXR0eVwiOiBcInByZXR0eS1xdWljayAtLXN0YWdlZFwiLFxuICAgIFwiYnVpbGQgdHlwZWNoZWNrXCI6IFwidnVlZHgtdHlwZWNoZWNrIC4gJiYgdml0ZSBidWlsZFwiLFxuICAgIFwidGVzdCBwcm9kIGd6aXBcIjogXCJodHRwLXNlcnZlciBkaXN0IC0tY29ycyAtLWd6aXAgLWMtMVwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjb2RlbWlycm9yL2Jhc2ljLXNldHVwXCI6IFwiXjAuMjAuMFwiLFxuICAgIFwiQGNvZGVtaXJyb3IvbGFuZy15YW1sXCI6IFwiXjYuMS4yXCIsXG4gICAgXCJAY29kZW1pcnJvci9zdGF0ZVwiOiBcIl42LjUuMlwiLFxuICAgIFwiQGNvZGVtaXJyb3IvdGhlbWUtb25lLWRhcmtcIjogXCJeNi4xLjNcIixcbiAgICBcIkBjb2RlbWlycm9yL3ZpZXdcIjogXCJeNi4zOC4yXCIsXG4gICAgXCJAdmljb25zL2FudGRcIjogXCJeMC4xMi4wXCIsXG4gICAgXCJAdmljb25zL2lvbmljb25zNVwiOiBcIl4wLjEyLjBcIixcbiAgICBcIkB2dWUvcnVudGltZS1jb3JlXCI6IFwiXjMuNC4zOFwiLFxuICAgIFwiQHZ1ZXVwL3Z1ZS1xdWlsbFwiOiBcIl4xLjIuMFwiLFxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjExLjAuM1wiLFxuICAgIFwiYXhpb3NcIjogXCJeMS43LjdcIixcbiAgICBcImJsdWVpbXAtbWQ1XCI6IFwiXjIuMTkuMFwiLFxuICAgIFwiY29kZW1pcnJvclwiOiBcIl42LjAuMlwiLFxuICAgIFwiZGF0ZS1mbnNcIjogXCJeMy42LjBcIixcbiAgICBcImVjaGFydHNcIjogXCJeNS41LjFcIixcbiAgICBcImVsZW1lbnQtcmVzaXplLWRldGVjdG9yXCI6IFwiXjEuMi40XCIsXG4gICAgXCJmaW5nZXJwcmludGpzMlwiOiBcIl4yLjEuNFwiLFxuICAgIFwiaGlnaGxpZ2h0LmpzXCI6IFwiXjExLjEwLjBcIixcbiAgICBcImpzLXlhbWxcIjogXCJeNC4xLjBcIixcbiAgICBcImxvZGFzaC1lc1wiOiBcIl40LjE3LjIxXCIsXG4gICAgXCJtaW50LWZpbHRlclwiOiBcIl40LjAuM1wiLFxuICAgIFwibWl0dFwiOiBcIl4zLjAuMVwiLFxuICAgIFwibmFpdmUtdWlcIjogXCJeMi40My4xXCIsXG4gICAgXCJwaW5pYVwiOiBcIl4yLjIuMlwiLFxuICAgIFwicGlueWluLXByb1wiOiBcIl4zLjI0LjJcIixcbiAgICBcInByaW50LWpzXCI6IFwiXjEuNi4wXCIsXG4gICAgXCJxcmNvZGUudnVlXCI6IFwiMy40LjFcIixcbiAgICBcInFzXCI6IFwiXjYuMTMuMFwiLFxuICAgIFwicXVpbGwtaW1hZ2UtdXBsb2FkZXJcIjogXCJeMS4zLjBcIixcbiAgICBcInF1aWxsLW1hZ2ljLXVybFwiOiBcIl40LjIuMFwiLFxuICAgIFwic3BhcmstbWQ1XCI6IFwiXjMuMC4yXCIsXG4gICAgXCJ0aHJvdHRsZS1kZWJvdW5jZVwiOiBcIl41LjAuMlwiLFxuICAgIFwidmZvbnRzXCI6IFwiXjAuMC4zXCIsXG4gICAgXCJ2dWVcIjogXCJeMy40LjM4XCIsXG4gICAgXCJ2dWUtaTE4blwiOiBcIl4xMS4xLjExXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjQuNC4zXCIsXG4gICAgXCJ2dWUtdHlwZXNcIjogXCJeNS4xLjNcIixcbiAgICBcInZ1ZS13YXRlcmZhbGwtcGx1Z2luLW5leHRcIjogXCJeMi42LjBcIixcbiAgICBcInZ1ZTMtanNvbi12aWV3ZXJcIjogXCJeMi40LjFcIixcbiAgICBcInZ1ZWRyYWdnYWJsZVwiOiBcIl40LjEuMFwiLFxuICAgIFwid2VpeGluLWpzLXNka1wiOiBcIl4xLjYuNVwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjb21taXRsaW50L2NsaVwiOiBcIl4xOS40LjFcIixcbiAgICBcIkBjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWxcIjogXCJeMTkuNC4xXCIsXG4gICAgXCJAZXNsaW50L2VzbGludHJjXCI6IFwiXjMuMS4wXCIsXG4gICAgXCJAdHlwZXMvZnMtZXh0cmFcIjogXCJeMTEuMC40XCIsXG4gICAgXCJAdHlwZXMvanMteWFtbFwiOiBcIl40LjAuOVwiLFxuICAgIFwiQHR5cGVzL2xvZGFzaC1lc1wiOiBcIl40LjE3LjEyXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMi41LjJcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjguNC4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjguNC4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4xLjNcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeNC4wLjFcIixcbiAgICBcIkB2dWUvY29tcGlsZXItc2ZjXCI6IFwiXjMuNC4zOFwiLFxuICAgIFwiQHZ1ZS9lc2xpbnQtY29uZmlnLXR5cGVzY3JpcHRcIjogXCJeMTMuMC4wXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4yMFwiLFxuICAgIFwiY2hhbGtcIjogXCJeNS4zLjBcIixcbiAgICBcImNvbW1pdGl6ZW5cIjogXCJeNC4zLjBcIixcbiAgICBcImNvcmUtanNcIjogXCJeMy4zOC4xXCIsXG4gICAgXCJjcm9zcy1lbnZcIjogXCJeNy4wLjNcIixcbiAgICBcImNyeXB0by1qc1wiOiBcIl40LjIuMFwiLFxuICAgIFwiZG90ZW52XCI6IFwiXjE2LjQuNVwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjkuOS4xXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjkuMS4wXCIsXG4gICAgXCJlc2xpbnQtZGVmaW5lLWNvbmZpZ1wiOiBcIjIuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWplc3RcIjogXCJeMjguOC4yXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByZXR0aWVyXCI6IFwiXjUuMi4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXZ1ZVwiOiBcIl45LjI4LjBcIixcbiAgICBcImVzbm9cIjogXCJeNC43LjBcIixcbiAgICBcImZzLWV4dHJhXCI6IFwiXjExLjIuMFwiLFxuICAgIFwiZ2gtcGFnZXNcIjogXCJeNi4xLjFcIixcbiAgICBcImh1c2t5XCI6IFwiXjkuMS41XCIsXG4gICAgXCJqZXN0XCI6IFwiXjI5LjcuMFwiLFxuICAgIFwibGVzc1wiOiBcIl40LjIuMFwiLFxuICAgIFwibGVzcy1sb2FkZXJcIjogXCJeMTIuMi4wXCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xNS4yLjEwXCIsXG4gICAgXCJtb2NranNcIjogXCJeMS4xLjBcIixcbiAgICBcIm5wbS1jaGVjay11cGRhdGVzXCI6IFwiXjE3LjEuMVwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuNDRcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4zXCIsXG4gICAgXCJwcmV0dHktcXVpY2tcIjogXCJeNC4wLjBcIixcbiAgICBcInJpbXJhZlwiOiBcIl42LjAuMVwiLFxuICAgIFwic3R5bGVsaW50XCI6IFwiXjE2LjkuMFwiLFxuICAgIFwic3R5bGVsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjAuNVwiLFxuICAgIFwic3R5bGVsaW50LWNvbmZpZy1zdGFuZGFyZFwiOiBcIl4zNi4wLjFcIixcbiAgICBcInN0eWxlbGludC1vcmRlclwiOiBcIl42LjAuNFwiLFxuICAgIFwic3R5bGVsaW50LXNjc3NcIjogXCJeNi41LjFcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xMFwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjUuNFwiLFxuICAgIFwidW5wbHVnaW4tYXV0by1pbXBvcnRcIjogXCJeMjAuMi4wXCIsXG4gICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjI3LjRcIixcbiAgICBcInZpdGVcIjogXCJeNS40LjJcIixcbiAgICBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI6IFwiXjAuNS4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1odG1sXCI6IFwiXjMuMi4yXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1tb2NrXCI6IFwiXjMuMC4yXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1yZXF1aXJlLXRyYW5zZm9ybVwiOiBcIl4xLjAuMjFcIixcbiAgICBcInZpdGUtcGx1Z2luLXN0eWxlLWltcG9ydFwiOiBcIl4yLjAuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tdG9wLWxldmVsLWF3YWl0XCI6IFwiXjEuNC40XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kXCI6IFwiXjAuNC4wXCIsXG4gICAgXCJ2dWUtZGVtaVwiOiBcIl4wLjE0LjEwXCIsXG4gICAgXCJ2dWUtZHJhZ2dhYmxlLW5leHRcIjogXCJeMi4yLjFcIixcbiAgICBcInZ1ZS1lc2xpbnQtcGFyc2VyXCI6IFwiXjkuNC4zXCIsXG4gICAgXCJ2dWVkcmFnZ2FibGVcIjogXCJeNC4xLjBcIlxuICB9LFxuICBcImxpbnQtc3RhZ2VkXCI6IHtcbiAgICBcIioue3Z1ZSxqcyx0cyx0c3h9XCI6IFwiZXNsaW50IC0tZml4XCJcbiAgfSxcbiAgXCJjb25maWdcIjoge1xuICAgIFwiY29tbWl0aXplblwiOiB7XG4gICAgICBcInBhdGhcIjogXCIuL25vZGVfbW9kdWxlcy9jei1jdXN0b21pemFibGVcIlxuICAgIH1cbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJob3Rnb1wiLFxuICAgIFwiaGdcIixcbiAgICBcImdmXCIsXG4gICAgXCJnb2ZyYW1lXCIsXG4gICAgXCJ2dWVcIixcbiAgICBcIm5haXZlLXVpXCIsXG4gICAgXCJuYWl2ZS11aS1hZG1pblwiLFxuICAgIFwidnVlM1wiLFxuICAgIFwidHNcIixcbiAgICBcInRzeFwiLFxuICAgIFwiYWRtaW5cIixcbiAgICBcInR5cGVzY3JpcHRcIlxuICBdLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9idWZhbnl1bi9ob3Rnby5naXRcIlxuICB9LFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9idWZhbnl1bi9ob3Rnby9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2J1ZmFueXVuL2hvdGdvXCIsXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0xNlwiXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3Jvb3QvcHJvamVjdHMvbWVtZS1zZXJ2ZXIvd2ViL2J1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvcm9vdC9wcm9qZWN0cy9tZW1lLXNlcnZlci93ZWIvYnVpbGQvY29uc3RhbnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Jvb3QvcHJvamVjdHMvbWVtZS1zZXJ2ZXIvd2ViL2J1aWxkL2NvbnN0YW50LnRzXCI7LyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgY29uZmlndXJhdGlvbiBmaWxlIGVudGVyZWQgaW4gdGhlIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IEdMT0JfQ09ORklHX0ZJTEVfTkFNRSA9ICdhcHAuY29uZmlnLmpzJztcblxuZXhwb3J0IGNvbnN0IE9VVFBVVF9ESVIgPSAnZGlzdCc7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi9idWlsZC92aXRlL3BsdWdpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Jvb3QvcHJvamVjdHMvbWVtZS1zZXJ2ZXIvd2ViL2J1aWxkL3ZpdGUvcGx1Z2luL2NvbXByZXNzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi9idWlsZC92aXRlL3BsdWdpbi9jb21wcmVzcy50c1wiOy8qKlxuICogVXNlZCB0byBwYWNrYWdlIGFuZCBvdXRwdXQgZ3ppcC4gTm90ZSB0aGF0IHRoaXMgZG9lcyBub3Qgd29yayBwcm9wZXJseSBpbiBWaXRlLCB0aGUgc3BlY2lmaWMgcmVhc29uIGlzIHN0aWxsIGJlaW5nIGludmVzdGlnYXRlZFxuICogaHR0cHM6Ly9naXRodWIuY29tL2FubmN3Yi92aXRlLXBsdWdpbi1jb21wcmVzc2lvblxuICovXG5pbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnO1xuXG5pbXBvcnQgY29tcHJlc3NQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnQ29tcHJlc3NQbHVnaW4oXG4gIGNvbXByZXNzOiAnZ3ppcCcgfCAnYnJvdGxpJyB8ICdub25lJyxcbiAgZGVsZXRlT3JpZ2luRmlsZSA9IGZhbHNlXG4pOiBQbHVnaW4gfCBQbHVnaW5bXSB7XG4gIGNvbnN0IGNvbXByZXNzTGlzdCA9IGNvbXByZXNzLnNwbGl0KCcsJyk7XG5cbiAgY29uc3QgcGx1Z2luczogUGx1Z2luW10gPSBbXTtcblxuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdnemlwJykpIHtcbiAgICBwbHVnaW5zLnB1c2goXG4gICAgICBjb21wcmVzc1BsdWdpbih7XG4gICAgICAgIGV4dDogJy5neicsXG4gICAgICAgIGRlbGV0ZU9yaWdpbkZpbGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgaWYgKGNvbXByZXNzTGlzdC5pbmNsdWRlcygnYnJvdGxpJykpIHtcbiAgICBwbHVnaW5zLnB1c2goXG4gICAgICBjb21wcmVzc1BsdWdpbih7XG4gICAgICAgIGV4dDogJy5icicsXG4gICAgICAgIGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJyxcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcGx1Z2lucztcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3Jvb3QvcHJvamVjdHMvbWVtZS1zZXJ2ZXIvd2ViL2J1aWxkL3ZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi9idWlsZC92aXRlL3Byb3h5LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9yb290L3Byb2plY3RzL21lbWUtc2VydmVyL3dlYi9idWlsZC92aXRlL3Byb3h5LnRzXCI7LyoqXG4gKiBVc2VkIHRvIHBhcnNlIHRoZSAuZW52LmRldmVsb3BtZW50IHByb3h5IGNvbmZpZ3VyYXRpb25cbiAqL1xuaW1wb3J0IHR5cGUgeyBQcm94eU9wdGlvbnMgfSBmcm9tICd2aXRlJztcblxudHlwZSBQcm94eUl0ZW0gPSBbc3RyaW5nLCBzdHJpbmddO1xuXG50eXBlIFByb3h5TGlzdCA9IFByb3h5SXRlbVtdO1xuXG50eXBlIFByb3h5VGFyZ2V0TGlzdCA9IFJlY29yZDxzdHJpbmcsIFByb3h5T3B0aW9ucyAmIHsgcmV3cml0ZTogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nIH0+O1xuXG5jb25zdCBodHRwc1JFID0gL15odHRwczpcXC9cXC8vO1xuXG4vKipcbiAqIEdlbmVyYXRlIHByb3h5XG4gKiBAcGFyYW0gbGlzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHkobGlzdDogUHJveHlMaXN0ID0gW10pIHtcbiAgY29uc3QgcmV0OiBQcm94eVRhcmdldExpc3QgPSB7fTtcbiAgZm9yIChjb25zdCBbcHJlZml4LCB0YXJnZXRdIG9mIGxpc3QpIHtcbiAgICBjb25zdCBpc0h0dHBzID0gaHR0cHNSRS50ZXN0KHRhcmdldCk7XG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaHR0cC1wYXJ0eS9ub2RlLWh0dHAtcHJveHkjb3B0aW9uc1xuICAgIHJldFtwcmVmaXhdID0ge1xuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICB3czogdHJ1ZSxcbiAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7cHJlZml4fWApLCAnJyksXG4gICAgICAvLyBodHRwcyBpcyByZXF1aXJlIHNlY3VyZT1mYWxzZVxuICAgICAgLi4uKGlzSHR0cHMgPyB7IHNlY3VyZTogZmFsc2UgfSA6IHt9KSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsZUFBZTs7O0FDQXhCLE9BQU8sWUFBWTtBQWtCWixTQUFTLFdBQVcsU0FBOEI7QUFDdkQsUUFBTSxNQUFXLENBQUM7QUFFbEIsYUFBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLEdBQUc7QUFDMUMsUUFBSSxXQUFXLFFBQVEsT0FBTyxFQUFFLFFBQVEsUUFBUSxJQUFJO0FBQ3BELGVBQVcsYUFBYSxTQUFTLE9BQU8sYUFBYSxVQUFVLFFBQVE7QUFFdkUsUUFBSSxZQUFZLGFBQWE7QUFDM0IsaUJBQVcsT0FBTyxRQUFRO0FBQUEsSUFDNUI7QUFDQSxRQUFJLFlBQVksY0FBYztBQUM1QixVQUFJO0FBQ0YsbUJBQVcsS0FBSyxNQUFNLFFBQVE7QUFBQSxNQUNoQyxTQUFTLE9BQU87QUFBQSxNQUFDO0FBQUEsSUFDbkI7QUFDQSxRQUFJLE9BQU8sSUFBSTtBQUFBLEVBRWpCO0FBQ0EsU0FBTztBQUNUOzs7QUN0Q0EsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTs7O0FDSG5CLFNBQVMsd0JBQXdCOzs7QUNKakM7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLE1B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
