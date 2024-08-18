<script setup>
import { useData, useRouter } from "vitepress";

const { theme } = useData();
const router = useRouter();

// Note: theme.sidebar is a proxy object which is undefined within this script,
// and it needs to be passed from the markdown itself.

const goToLatestPage = (sidebar) => {
    router.go(sidebar[0].link);
    return "";
}

</script>

<ClientOnly>

{{ goToLatestPage(theme.sidebar) }}

</ClientOnly>
