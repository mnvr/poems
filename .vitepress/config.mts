import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

/* https://vitepress.dev/reference/site-config */
export default defineConfig({
    title: "Poems",
    description: "Poems and short stories by Manav",
    head: [["link", { rel: "icon", href: "/icon.png", type: "image/png" }]],
    cleanUrls: true,
    /* https://vitepress.dev/reference/default-theme-config */
    themeConfig: {
        logo: "/icon.png",
        sidebar: generateSidebar({
            // Don't show these in the sidebar.
            excludeFiles: ["README.md", "random.md", "latest.md"],
            // Use the "title" from frontmatter as the sidebar entry.
            useTitleFromFrontmatter: true,
            // Sort using the "date" field in frontmatter.
            sortMenusByFrontmatterDate: true,
            // Sort so that the latest entry is at the top.
            sortMenusOrderByDescending: true,
        }),
        socialLinks: [
            { icon: "github", link: "https://github.com/mnvr/notes" },
            { icon: "mastodon", link: "https://mastodon.social/@mnvr" },
        ],
    },
});
