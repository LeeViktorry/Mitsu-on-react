import { Link } from 'react-router-dom';
import { Navlist } from '../Utils/Navlist';
import './Header.css'
const Header = () =>{
    return(
        <>
            <div className="center_header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                      <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div className="navbar-nav me-auto">
                            {
                              Navlist.map(item => {
                                return <li className="nav-item text-light">
                                        <Link className="nav-link btn text-light" to={item.route}>
                                            {item.title}
                                        </Link>
                                    </li>
                              })
                           }
                      </div>
                    </div>
                  </nav>
            </div>
        </>
    )
}

export default Header;