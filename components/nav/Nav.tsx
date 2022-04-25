import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NavWrapper, A } from "./Nav.styled"

const Nav = () => {
  const [currentHash, setCurrentHash] = useState('')
  const [okToChange, setOkToChange] = useState(true)
  const router = useRouter()
  useEffect(() => {
    if (router.asPath && router.asPath.length > 1) {
      setCurrentHash(router.asPath.split('/')[1])
    }
    document.addEventListener('onreplacestate', (e: CustomEventInit<string>) => {
      if (okToChange) {
        const hash = e.detail
        setCurrentHash(hash || '')
      }
    })
  }, [router, okToChange])
  const handleHashChange = (hash: string) => {
    setCurrentHash(hash)
    setOkToChange(false)
    setTimeout(() => {
      setOkToChange(true)
    }, 500)
  }
  return (
    <NavWrapper className="space-y-3">
      <div>
        <Link href="#about" passHref>
          <A isSelected={currentHash === '#about'} onClick={() => handleHashChange('#about')}>About</A>
        </Link>
      </div>
      <div>
        <Link href="#works" passHref>
          <A isSelected={currentHash === '#works'} onClick={() => handleHashChange('#works')}>Works</A>
        </Link>
      </div>
      <div>
        <Link href="#contact" passHref>
          <A isSelected={currentHash === '#contacts'} onClick={() => handleHashChange('#contact')}>Contact</A>
        </Link>
      </div>
      <div>Blog</div>
      <div>Resume</div>
    </NavWrapper>
  )
}

export default Nav