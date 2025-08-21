<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Props {
    name: string
    description: string
    license: string
    forks: number
    stars: number
    updated: string
    html_url: string
}

defineProps<Props>()
</script>

<template>
    <Card
        :class="cn('dark:bg-gradient-to-r from-[#151730] to-[#1C1B45] rounded-2xl shadow-lg', 'dark:hover:from-[#1C1B45] dark:hover:to-[#151730] hover:scale-[1.02] transition-all duration-300')">
        <CardHeader>
            <a :href="html_url" target="_blank">
                <CardTitle class="text-blue-400 text-lg cursor-pointer">
                    {{ name }}
                </CardTitle>
            </a>
            <CardDescription class="line-clamp-3 dark:text-gray-300">
                {{ description || "No description" }}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <div class="flex items-center gap-1">
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span>{{ license }}</span>
                </div>

                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z" />
                    </svg>
                    <span>{{ forks }}</span>
                </div>

                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.799 1.48 8.295L12 18.896l-7.416 4.504 1.48-8.295-6.064-5.799 8.332-1.151z" />
                    </svg>
                    <span>{{ stars }}</span>
                </div>

                <span>updated {{ updated }}</span>
            </div>
        </CardContent>
    </Card>
</template>
