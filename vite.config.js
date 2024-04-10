import {fileURLToPath, URL} from "node:url";
import viteCompression from "vite-plugin-compression";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
const compress = async () => {
    return {
        name: "after-build",
        apply: "build",
        async closeBundle() {
            await viteCompression();
        },
    };
};
export default defineConfig({
    plugins: [vue(), compress()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        port: 3012,
    },
});
