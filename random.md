---
# The contents of this page are dynamic, so ask crawlers to not index it lest
# they get confused by its shapeshifting nature.
head:
    - - meta
      - name: robots
        content: noindex
---

<script setup>
import { useData, useRouter } from "vitepress";
import { onMounted } from "vue";

const { theme } = useData();
const router = useRouter();

const randomElement = (xs) => xs[Math.floor(Math.random() * xs.length)];

onMounted(() => router.go(randomElement(theme.value.sidebar).link))
</script>
