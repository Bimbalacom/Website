import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar-container bg-primary-3">
            <nav className="navbar navbar-expand-lg navbar-dark" data-sticky="top">
                <div className="container">
                    <a className="navbar-brand navbar-brand-dynamic-color fade-page" href="/">
                        <img alt="Bimbala logo" src={"/img/logos/bimbalaLogo_head.svg"} height={"70vh"} className={"pr-3 d-inline"} />
                        <h2 className={"d-inline mb-0 brand"}>Bimbala</h2>
                    </a>
                    <div className="d-flex align-items-center order-lg-3">
                        <a href="#"
                            className="btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3">Sign in</a>
                        <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"
                            data-target=".navbar-collapse" data-toggle="collapse" type="button">
                            <img alt="Navbar Toggler Open Icon" className="navbar-toggler-open icon icon-sm"
                                src={"/img/icons/interface/icon-menu.svg"} />
                            <img alt="Navbar Toggler Close Icon" className="navbar-toggler-close icon icon-sm"
                                src={"/img/icons/interface/icon-x.svg"} />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end"
                        id="navigation-menu">
                        <ul className="navbar-nav my-3 my-lg-0">
                            <li className="nav-item">
                                <Link href={'/'} passHref={true}>
                                    <a aria-expanded="false" aria-haspopup="true"
                                        className="nav-link nav-item" role="button">Home</a>
                                </Link>
                            </li>
                             <li className="nav-item">
                                <Link passHref={true} href={"/pricing"}>
                                    <a aria-expanded="false" aria-haspopup="true"
                                        className="nav-link nav-item" role="button">Pricing</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle nav-link nav-item arrow-bottom" data-toggle="dropdown-grid" href="#" role="button">Solutions</a>
                                    <div className="row dropdown-menu">
                                        <div className="col-auto" data-dropdown-content>
                                            <div className="dropdown-grid-menu">
                                                <a href={"/features/"} className="dropdown-item fade-page">Features</a>
                                                <a href={"/features/knowledge-board"} className="dropdown-item fade-page">Knowledge Board</a>
                                                <a href={"/features/frequently-asked-questions"} className="dropdown-item fade-page">FAQ</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle nav-link nav-item arrow-bottom" data-toggle="dropdown-grid" href="#" role="button">Docs</a>
                                    <div className="row dropdown-menu">
                                        <div className="col-auto" data-dropdown-content>
                                            <div className="dropdown-grid-menu">
                                                <a href={"/company"} className="dropdown-item fade-page">Company</a>
                                                <a href={"/blog/"} className="dropdown-item fade-page">Blog</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle nav-link nav-item arrow-bottom" data-toggle="dropdown-grid" href="#" role="button">More</a>
                                    <div className="row dropdown-menu">
                                        <div className="col-auto" data-dropdown-content>
                                            <div className="dropdown-grid-menu">
                                                <a href={"/contact-us"} className="dropdown-item fade-page">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>      
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}