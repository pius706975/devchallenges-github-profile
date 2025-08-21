<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
</script>

<template>
    <Card class="animate-pulse">
        <CardHeader>
            <CardTitle>
                <div class="h-5 w-32 bg-gray-700 rounded"></div>
            </CardTitle>
            <CardDescription>
                <div class="h-4 w-full bg-gray-700 rounded mt-2"></div>
                <div class="h-4 w-3/4 bg-gray-700 rounded mt-1"></div>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <div class="h-4 w-16 bg-gray-700 rounded"></div>
                <div class="h-4 w-12 bg-gray-700 rounded"></div>
                <div class="h-4 w-12 bg-gray-700 rounded"></div>
                <div class="h-4 w-24 bg-gray-700 rounded"></div>
            </div>
        </CardContent>
    </Card>
</template>
