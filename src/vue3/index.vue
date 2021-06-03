<template>
    <div>
        <p v-for="i in 10" :key="i"></p>
    </div>
</template>

<script lang="ts">
import * as path from 'path';

import { defineComponent } from 'vue';

function log(str: string) {
    console.log(str);
}

export default defineComponent({
    setup() {
        
    },
});
</script>
