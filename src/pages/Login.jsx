import { Link } from "react-router-dom"
import Main from "../components/Main";

const Login = () => {
    return (
        <Main>
            <Link to="/">Go home</Link>
                <div class="flex flex-col p-10 border border-violet-light">

                    <h2>Login</h2>
                    
                    <form action="">

                        <div class="flex flex-col space-y-2">
                            <label for="username"></label>
                            <input class="border-violet-light border" placeholder="User name" type="text" id="title" name="title"/>
                            <label for="content"></label>
                            
                            <label for="title"></label>
                            <input class="border-violet-light border" placeholder="password" type="text" id="category" name="category"/>
                            
                            <button class="border-violet-light border hover:bg-violet-dark hover:text-white open-sans text-violet-dark text-xl justify-center flex place-items-center h-12 w-2/12 ">
                                    CREATE POST
                            </button>
                        </div>
                    </form>

                </div>
                    
                    
        </Main>
        )    
}

export default Login;