<script setup lang="ts">
import { github } from '@/assets'
import { computed } from 'vue';

const props = defineProps<{
    user: {
        avatar_url?: string
        followers?: number
        following?: number
        location?: string
        login?: string
        bio?: string
        name?: string
        blog?: string
    } | null
}>()

const stats = computed(() => [
    { label: 'Followers', value: props.user?.followers ?? 0 },
    { label: 'Following', value: props.user?.following ?? 0 },
    { label: 'Location', value: props.user?.location || 'None' }
])
</script>

<template>
    <div class="mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
            <div class="w-20 h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden mx-auto sm:mx-0">
                <img :src="user?.avatar_url || github" alt="GitHub Avatar"
                    class="w-full h-full object-cover bg-black" />
            </div>

            <div class="flex flex-wrap justify-center sm:justify-start gap-4">
                <div v-for="(stat, i) in stats" :key="i"
                    class="px-4 py-2 bg-gray-300 dark:bg-[#111629] rounded-lg flex items-center gap-2">
                    <span class="dark:text-gray-400 text-sm">{{ stat.label }}</span>
                    <span class="text-gray-600">|</span>
                    <span class="dark:text-white text-sm">{{ stat.value }}</span>
                </div>
            </div>
        </div>

        <div class="text-center sm:text-left">
            <h1 class="text-2xl sm:text-3xl font-bold dark:text-white mb-1">
                {{ user?.name || user?.login || 'GitHub Profile Finder' }}
            </h1>
            <p class="dark:text-gray-400 text-sm sm:text-base">
                {{ user?.bio || user?.name || user?.blog || '' }}
            </p>
        </div>
    </div>
</template>
