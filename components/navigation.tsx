import React from "react"
import Link from "next/link"
import classNames from "classnames/bind"
import styles from "../styles/components/navigation.module.scss"

const cx = classNames.bind(styles)

const Navigation = ({ user }: { user?: any }) => {
  // styles["navigation__item--active"]

  const links = [
    { href: "/about", name: "About" },
    { href: "/hire", name: "Hire Me" },
    { href: "/tags", name: "Projects" }
  ]

  return (
    <nav className={styles.navigation} role="navigation">
      <Link href="/">
        <a
          className={cx(
            styles.navigation__item,
            styles["navigation__item--logo"]
          )}
        >
          Jeff Mendez
        </a>
      </Link>
      {links.map(({ href, name }: { href: string; name: string }) => {
        return (
          <Link href={href} key={name}>
            <a className={styles.navigation__item}>{name}</a>
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation
