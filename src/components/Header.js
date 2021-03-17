import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Welcome to our dev portal. <strong>Photon</strong>, another fine<br />
                    little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                    <p>Learn about our APIs, webhooks and data feeds.<br />
                    lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
