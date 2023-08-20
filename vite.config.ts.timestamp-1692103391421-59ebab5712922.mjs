// vite.config.ts
import { defineConfig } from "file:///Users/yuntaemin/Desktop/SideProjects/HSY/hsy_client/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///Users/yuntaemin/Desktop/SideProjects/HSY/hsy_client/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import tsconfigPaths from "file:///Users/yuntaemin/Desktop/SideProjects/HSY/hsy_client/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    strictPort: true,
    open: true
  },
  envPrefix: ["VITE_"],
  plugins: [svelte(), tsconfigPaths()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveXVudGFlbWluL0Rlc2t0b3AvU2lkZVByb2plY3RzL0hTWS9oc3lfY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveXVudGFlbWluL0Rlc2t0b3AvU2lkZVByb2plY3RzL0hTWS9oc3lfY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95dW50YWVtaW4vRGVza3RvcC9TaWRlUHJvamVjdHMvSFNZL2hzeV9jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSBcIkBzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGVcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgc2VydmVyOiB7XG4gICAgICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgfSxcbiAgICBlbnZQcmVmaXg6IFtcIlZJVEVfXCJdLFxuICAgIHBsdWdpbnM6IFtzdmVsdGUoKSwgdHNjb25maWdQYXRocygpXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VSxTQUFTLG9CQUFvQjtBQUMzVyxTQUFTLGNBQWM7QUFDdkIsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsUUFBUTtBQUFBLElBQ0osWUFBWTtBQUFBLElBQ1osTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFdBQVcsQ0FBQyxPQUFPO0FBQUEsRUFDbkIsU0FBUyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDdkMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K