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
      social: {
        linkedin: "https://www.linkedin.com/in/dobri-trifonov/",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "TypeScript",
              autogenerate: { directory: "typescript" },
            },
          ],
        },
      ],
    }),
  ],
});
