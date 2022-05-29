import {NavLink} from "react-router-dom"

const Navigation = () => {
    return(
        <div className="navbar">
            <ul>
                <li>
                    <li>
                        <NavLink to='/regular'>REGULAR</NavLink>
                    </li>
                    <li>
                        <NavLink to='/hot'>HOT</NavLink>
                    </li>
                </li>
            </ul>
        </div>
    )
}

export default Navigation