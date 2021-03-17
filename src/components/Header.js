import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Welcome to our dev portal. <strong>Developer</strong>experience<br />
                    little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                    <p>Learn about our APIs, webhooks and data feeds.<br />
                    Where magic happens.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
