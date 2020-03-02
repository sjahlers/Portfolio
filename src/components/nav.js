import React from 'react';

const navItems = [
  {
    name: 'projects',
    href: '#projects',
    triNumber: 'triangle-1'
  },
  {
    name: 'about',
    href: '#about',
    triNumber: 'triangle-2'
  },
  {
    name: 'contact',
    href: '#contact',
    triNumber: 'triangle-3'
  }
]

class NavItems extends React.Component {
  render() {
    return (
      <div>
        {navItems.map(navItem=>
          <div className="nav-item" key={navItem.name}>
            <div className={"triangle " + navItem.triNumber}></div>
            <a href={navItem.href} className="nav-link">{navItem.name}</a>
          </div>
        )}
      </div>
    )
  }
}

export default NavItems;
