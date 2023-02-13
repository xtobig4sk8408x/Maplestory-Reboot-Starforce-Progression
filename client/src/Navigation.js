import {useState} from "react"
import {Link, useHistory} from "react-router-dom" 
import style from "styled-components" 
import {menu} 

const Navigation() {
    const [menu, setMenu] = useState(false) 
    const history = useHistory() 

    const handleLogOut = () => {
        fetch('/logout')
    }
}