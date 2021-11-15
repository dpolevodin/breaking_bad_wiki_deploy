import { useState } from "react"

function NavigationItems() {
    const [navItem, setNavItem] = useState('Random Character')

    const navigationItemsData = ['Random Character', 'Characters', 'Episodes', 'Quotes', 'Deaths']

    const navigationItems = navigationItemsData.map((item) => {
      return (
        <div key={navigationItemsData.indexOf(item)}>
          <label className="App__navigation-item" >
          <input 
          type="radio" 
          className="App__navigation-radio" 
          key={navigationItemsData.indexOf(item)} 
          name="navigation-item"
          value={item} 
          defaultChecked={item === navItem}
          />
          {item}
          </label>
        </div>
      )
    }
    )
    return (
      <form className="App__navigation-form">
        {navigationItems}
      </form>
    )
}

export default NavigationItems