import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), icon(), preact()],
  output: "server",
  adapter: vercel(),
  vite: {
    ssr: {
      // Add npm packages containing invalid code here
      noExternal: ["browser"],
    },
  },
});
