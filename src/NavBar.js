import { Link } from 'react-router-dom';

function NavBar(props) {
    return(
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark">
                  <div className="container-fluid">
                    <Link to={props.link1.path} className="navbar-brand">{props.link1.label}</Link>  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link to={props.link2.path} className="nav-link">{props.link2.label}</Link> 
                        </li>
                        <li className="nav-item">
                          <Link to={props.link3.path} className="nav-link">{props.link3.label}</Link> 
                        </li>
                        <li className="nav-item">
                          <Link to={props.link4.path} className="nav-link">{props.link4.label}</Link> 
                        </li>
                        <li className="nav-item">
                          <Link to={props.link5.path} className="nav-link">{props.link5.label}</Link> 
                        </li>
                        <li className="nav-item">
                          <Link to={props.link6.path} className="nav-link">{props.link6.label}</Link> 
                        </li>
                      </ul>
                    </div>
                  </div>
        </nav>

    )

}

export default NavBar;