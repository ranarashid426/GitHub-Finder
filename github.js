class GitHub{
    constructor(){
        this.client_id = "b9e53ac28c443447e481"
        this.client_secret = "eb7c3ba867ac2246fa123214e34f423feeca0afb"
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json()
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repos = await reposResponse.json()
        return {
            profile,
            repos
        }
    }
}