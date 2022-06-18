const searchUser = document.getElementById('searchUser');
const ui = new UI()

const github = new GitHub
searchUser.addEventListener('keyup',(e)=>{
    const userText = e.target.value
    if(userText!==''){
        github.getUser(userText)
        .then(data=>{
            console.log(data)
            if(data.profile.message ==="Not Found"){
                // show error
                ui.showAlert('Profile Not Found','alert alert-danger')
                ui.clearProfile()

            }else{
                // show user
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
                
            }
        })
    }else{
        // clear the profile
        ui.clearProfile()
    }
})