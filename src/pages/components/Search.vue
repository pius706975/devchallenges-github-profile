<script setup lang="ts">
import { ref, computed } from 'vue'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'
import { getUser } from '@/services/users'
import { formatUpdated } from '@/lib/formatted.date'
import RepoCard from '@/components/shared/RepoCard.vue'
import Header from './Header.vue'
import Skeleton from '@/components/shared/Skeleton.vue'

const username = ref("")
const user = ref<any | null>(null)
const repositories = ref<any[]>([])
const loading = ref(false)
const page = ref(1)
const perPage = 9

const visibleRepos = computed(() => {
    return repositories.value.slice(0, page.value * perPage)
})

const handleSearch = async () => {
    if (!username.value) return
    loading.value = true
    user.value = null
    repositories.value = []
    page.value = 1

    try {
        const data = await getUser(username.value)
        user.value = data

        const reposRes = await fetch(`${data.repos_url}?per_page=100&sort=updated`)
        const reposData = await reposRes.json()

        repositories.value = reposData.map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            license: repo.license?.name || "No license",
            forks: repo.forks_count,
            stars: repo.stargazers_count,
            updated: formatUpdated(repo.updated_at),
            html_url: repo.html_url
        }))
    } catch (err) {
        user.value = null
        repositories.value = []
    } finally {
        loading.value = false
    }
}

const loadMore = () => {
    page.value++
}
</script>

<template>
    <section class="p-6 sm:p-10 lg:p-10 rounded-lg">
        <div class="mb-4 flex justify-center">
            <div class="relative w-full max-w-lg bg-gray-300 text-black 
               dark:text-white dark:bg-[#20293A] rounded-lg">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-300 w-5 h-5" />
                <Input v-model="username" type="text" placeholder="Type username" class="pl-10 w-full py-6"
                    @keyup.enter="handleSearch" />
            </div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
            <Header :user="user" />

            <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Skeleton v-for="n in 6" :key="n" />
            </div>

            <div v-else-if="repositories.length > 0">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <RepoCard v-for="repo in visibleRepos" :key="repo.name" v-bind="repo" />
                </div>

                <div v-if="visibleRepos.length < repositories.length" class="text-center">
                    <p @click="loadMore"
                        class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 cursor-pointer dark:hover:text-[#4EA2FF] transition-all">
                        View more repositories
                    </p>
                </div>
            </div>

            <div v-else class="text-center dark:text-gray-400 py-12">
                <p class="text-lg">No repositories yet</p>
            </div>
        </div>
    </section>
</template>
