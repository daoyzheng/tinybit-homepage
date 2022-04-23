import Link from "next/link"
import { NavWrapper } from "./Nav.styled"

const Nav = () => {
  return (
    <NavWrapper className="space-y-3">
      <div>
        <Link href="#about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="#works">
          <a>Works</a>
        </Link>
      </div>
      <div>Blog</div>
      <div>Resume</div>
    </NavWrapper>
  )
}

export default Nav