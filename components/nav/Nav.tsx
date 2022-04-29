import { ok } from "assert";
import Link from "next/link"
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Icon from "../icon/Icon";
import { NavWrapper, NavItemWrapper } from "./Nav.styled"

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
    }, 800)
  }
  return (
    <NavWrapper className="space-y-3">
      <div>
        <NavItemWrapper isSelected={currentHash === '#about'} onClick={() => handleHashChange('#about')}>
          <Link href="#about">
            <a>About</a>
          </Link>
        </NavItemWrapper>
        <NavItemWrapper isSelected={currentHash === '#works'} onClick={() => handleHashChange('#works')}>
          <Link href="#works">
            <a>Works</a>
          </Link>
        </NavItemWrapper>
        <NavItemWrapper isSelected={currentHash === '#contact'} onClick={() => handleHashChange('#contact')}>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </NavItemWrapper>
      </div>
      <div>
        <Icon url="https://blog.tinybit.me" src="/blogging.png" tooltip="Blog" isHorizontal/>
        <Icon url="" src="/cv.png" tooltip="Resume" isHorizontal/>
        <Icon url="https://github.com/daoyzheng" src="/github.png" tooltip="Github" isHorizontal/>
      </div>
    </NavWrapper>
  )
}

export default Nav