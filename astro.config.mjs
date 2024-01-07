import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Learnly",
      logo: {
        src: "./src/assets/houston.webp",
      },
      customCss: ["./src/styles/sidebar.css"],

      // Locales
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        bg: {
          label: "Bulgarian",
        },
      },
      sidebar: [
        {
          label: "TypeScript",
          items: [
            {
              label: "Introduction",
              autogenerate: { directory: "typescript/introduction" },
            },
            {
              label: "Data Types",
              autogenerate: { directory: "typescript/data-types" },
            },
          ],
        },
      ],
    }),
  ],
});
