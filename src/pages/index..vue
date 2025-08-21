<script setup lang="ts">
import ThemeChanger from '@/components/layouts/ThemeChanger.vue';
import Search from './components/Search.vue';
import { background } from '@/assets';
</script>

<template>
    <main class="w-full h-[180px] bg-no-repeat bg-top" :style="{
        backgroundImage: `url(${background})`,
        backgroundSize: '100% 100%'
    }">
        <div class="">
            <ThemeChanger />

            <Search />
        </div>
    </main>
</template>
