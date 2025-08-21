<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'
import { Button } from '@/components/ui/button'

const mode = useColorMode({
    initialValue: 'dark',
})

const toggleTheme = () => {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <div class="fixed bottom-4 right-4 z-50">
        <Button variant="outline" size="icon" @click="toggleTheme"
            class="rounded-full shadow-lg cursor-pointer hover:scale-[1.2] active:scale-[1.5] transition-all">
            <Icon icon="radix-icons:moon"
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icon icon="radix-icons:sun"
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    </div>
</template>
