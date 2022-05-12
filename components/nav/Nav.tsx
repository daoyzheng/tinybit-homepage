import Link from "next/link"
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";
import i18n from "../i18n";
import Icon from "../icon/Icon";
import { NavWrapper, NavItemWrapper } from "./Nav.styled"

const Nav = () => {
  const locale = useContext(LocaleContext)
  const translation = locale === 'en' ? i18n.en : i18n.zh
  const [currentHash, setCurrentHash] = useState('')
  const [okToChange, setOkToChange] = useState(true)
  const router = useRouter()
  const onReplaceState = useCallback((e: CustomEventInit<string>) => {
    if (okToChange) {
      const hash = e.detail
      setCurrentHash(hash || '')
    }
  },[okToChange])
  const setEventListener = useCallback(() => {
    document.addEventListener('onreplacestate', onReplaceState)
  }, [onReplaceState])

  useEffect(() => {
    if (router.asPath && router.asPath.length > 1) {
      setCurrentHash(router.asPath.split('/')[1])
    }
    setEventListener()
    return () => document.removeEventListener('onreplacestate', onReplaceState)
  }, [router, setEventListener, onReplaceState])
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
          <Link href="#about" passHref replace>
            <a>{translation.nav.about}</a>
          </Link>
        </NavItemWrapper>
        <NavItemWrapper isSelected={currentHash === '#works'} onClick={() => handleHashChange('#works')}>
          <Link href="#works" replace>
            <a>{translation.nav.works}</a>
          </Link>
        </NavItemWrapper>
        <NavItemWrapper isSelected={currentHash === '#contact'} onClick={() => handleHashChange('#contact')}>
          <Link href="#contact" replace>
            <a>{translation.nav.contact}</a>
          </Link>
        </NavItemWrapper>
      </div>
      <div>
        <Icon url="https://github.com/daoyzheng" src="/github.png" tooltip="Github" isHorizontal dense/>
        <Icon url="https://ca.linkedin.com/in/daozheng" src="/linkedin.png" tooltip={translation.nav.linkedin} isHorizontal dense/>
        <Icon url="https://blog.daozheng.me" src="/blogging.png" tooltip={translation.nav.blog} isHorizontal dense/>
        {/* <Icon url="" src="/cv.png" tooltip={translation.nav.resume} isHorizontal dense/> */}
      </div>
    </NavWrapper>
  )
}

export default Nav