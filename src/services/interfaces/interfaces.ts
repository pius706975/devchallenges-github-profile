export interface GithubUser {
    login: string
    id: number
    avatar_url: string
    html_url: string
    name?: string
    bio?: string
    location?: string
    followers?: number
    following?: number
    public_repos?: number
    repos_url: string
}