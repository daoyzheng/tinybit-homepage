import { useState } from "react"
import HamburgerIcon from "./HamburgerIcon"
import { MenuWrapper, NavbarButton, Menu, MenuItem } from "./HamburgerMenu.styled"

const HamburgerMenu = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <MenuWrapper>
      <NavbarButton onClick={() => handleClick()}>
        <HamburgerIcon/>
      </NavbarButton>
      <Menu show={show}>
        <MenuItem>About</MenuItem>
        <MenuItem>Works</MenuItem>
        <MenuItem>Blog</MenuItem>
      </Menu>
    </MenuWrapper>
  )
}

export default HamburgerMenu