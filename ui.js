class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }


   

    showProfile(user){
        this.profile.innerHTML = `
        <div class ="card card-body mb-3 ">
        <div class ="row">
        <div class ="col-md-3">
        <img class = "img-fluid mb-2" src="${user.avatar_url}">
        <a href ="${user.html_url}" target="_blank"class="btn btn-primary btn-block mb-4"> View Profile</a>
        </div>
        <div class ="col-md-9">

        <span class="badge badge-primary" style="width: auto;height:40px auto; background-color: blue;padding: 10px;">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-primary" style="width: auto;height:40px auto; background-color: red;padding: 10px;">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-primary" style="width: auto;height:40px auto; background-color: black;padding: 10px;">Followers: ${user.followers}</span>
        <span class="badge badge-primary" style="width: auto;height:40px auto; background-color: green;padding: 10px;">Following: ${user.following}</span>
        <br><br>

        <ul class ="list-group">
        <li class = "list-group-item">Company: ${user.company}</li>
        <li class = "list-group-item">Blog/Website: ${user.blog}</li>
        <li class = "list-group-item">location: ${user.location}</li>
        <li class = "list-group-item">Member Since: ${user.created_at}</li>
        
        </ul>

        
        
        </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>

        `
    }

    // show repo
     // Repos
     showRepos(repos){
        let output = ''
        repos.forEach(repo => {
            output+= `
            <div class= "card card-body mb-2> 
            <div class="row">
            <div class="col-md-6 pb-3">
            <a href="${repo.html_url}" target="_blank"> ${repo.name} </a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary" style="width: auto;height:40px auto; background-color: blue;padding: 10px;">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-primary" style="width: auto;height:40px auto; background-color: red;padding: 10px;">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-primary" style="width: auto;height:40px auto; background-color: black;padding: 10px;">Forks: ${repo.forks_count}</span>
            
            </div>
            </div>
            
            </div>
            `
        });
        document.getElementById('repos').innerHTML=output
  

    }




    clearProfile(){
        this.profile.innerHTML = ''
    }

    showAlert(message,className){
        this.clearAlert()
        
        const div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.searhContainer')
        const search = document.querySelector('.search')
        container.insertBefore(div,search)

        setTimeout(()=>{
            this.clearAlert()

        },2000)


    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()
        }
    }
}