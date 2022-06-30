import { Link } from "react-router-dom"
import Main from "../components/Main";
import React,{useState} from 'react';


const editPost = (props) => {

    const [title, setTitle] = useState(props.title);
    return (
        <Main>
            <Link to="/">Go home</Link>
                <div class="flex flex-col p-10 border border-violet-light">

                    
                    
                    <form action="">

                        <div class="flex flex-col space-y-2">
                            <label for="username"></label>
                            <input class="border-violet-light border" placeholder="title" type="text" id="title" name="title" value="edit title"/>
                            <label for="content"></label>
                            
                            <label for="title"></label>
                            <input class="border-violet-light border" placeholder="category" type="text" id="category" name="category" value="deporte"/>
                            
                            <button class="border-violet-light border hover:bg-violet-dark hover:text-white open-sans text-violet-dark text-xl justify-center flex place-items-center h-12 w-2/12 ">
                                    EDIT POST
                            </button>
                        </div>
                    </form>

                </div>
                    
                    
        </Main>
        )    
}

export default editPost;