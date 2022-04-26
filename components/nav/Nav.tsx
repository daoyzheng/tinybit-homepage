import { ok } from "assert";
import Link from "next/link"
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { NavWrapper, A } from "./Nav.styled"

const Nav = () => {
  const [currentHash, setCurrentHash] = useState('')
  const [okToChange, setOkToChange] = useState(true)
  const router = useRouter()
  const onReplaceState = useCallback((e: CustomEventInit<string>) => {
    if (okToChange) {
      const hash = e.detail
      setCurrentHash(hash || '')
    }
  },[okToChange])
  useEffect(() => {
    if (router.asPath && router.asPath.length > 1) {
      setCurrentHash(router.asPath.split('/')[1])
    }
    document.addEventListener('onreplacestate', onReplaceState)
    return () => document.removeEventListener('onreplacestate', onReplaceState)
  }, [router, onReplaceState])
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
      </div>
      <div>
        <div>Blog</div>
        <div>Resume</div>
        <div>Github</div>
      </div>
    </NavWrapper>
  )
}

export default Nav