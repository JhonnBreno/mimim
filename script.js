const btn = document.getElementById('btn')
const sidebar = document.getElementById('sidebar')

btn.addEventListener('click', ()=>{
    if(sidebar.classList.contains('hidden')){
        sidebar.classList.remove('hidden')
        sidebar.classList.add('visible')
    }else{
        sidebar.classList.remove('visible')
        sidebar.classList.add('hidden')
    }
})