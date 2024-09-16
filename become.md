---
title: Become
date: 2023-07-04
---

# Become

<script setup>
import { onMounted } from "vue";
import { loadQ5 } from "./js/q5.ts";
import { sketch } from "./js/become/sketch.ts";

onMounted(() => loadQ5(sketch, "canvas-parent"));
</script>

<style module>
.cparent {
    aspect-ratio: 2/1;
    min-height: 160px;
    margin-block: 36px;
}
canvas {
    border-radius: 8px;
}
</style>

<div id="canvas-parent" :class="$style.cparent"></div>

To all of you stuck<br>
In the words of dead poets<br>
Go find the living ones<br>
<br>
And If you can’t find them<br>
Become
