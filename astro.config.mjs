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
          label: "TypeScript",
          items: [
            {
              label: "Introduction",
              autogenerate: { directory: "typescript/introduction" },
            },
            {
              label: "Primitive Types",
              autogenerate: { directory: "typescript/primitive-types" },
            },
          ],
        },
      ],
    }),
  ],
});
