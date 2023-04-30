import React from 'react'
import { NavLink } from 'react-router-dom'
const navItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Categories',
        path: '/categories'
    },
    {
        name: 'Add Book',
        path: '/books/0'
    }
]


const headerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px 20px',
    borderBottom: '1px solid #dee2e6'
};

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0
};

const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '18px'
};

const activeLinkStyle = {
    color: '#0056b3',
    textDecoration: 'none',
    borderBottom: '2px solid #0056b3',
    paddingBottom: '3px',
};

const mainStyle = {
    padding: '20px'
};
const DefaultLayout = (props) => {
    return (
        <>
            <header style={headerStyle}>
                <nav style={navStyle}>
                    {navItems.map((item, index) => {

                        return <NavLink
                            to={item.path}
                            key={item.path}
                            style={linkStyle}
                            activeStyle={activeLinkStyle}
                            exact={item.path === '/'}
                        >
                            {item.name}
                        </NavLink>
                    })}
                </nav>
            </header>
            <main style={mainStyle}>
                {props.children}
            </main>

        </>
    )
}

export default DefaultLayout