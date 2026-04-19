 export default function login(){
    return `<h1>Welcome to the Login Page</h1>
     <form action="/submit " method="POST">
        <input type ='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button> Log-in </button>
        </form> `
 }