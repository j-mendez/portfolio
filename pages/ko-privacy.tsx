import React from "react"
import classNames from "classnames/bind"
import styles from "../styles/components/about.module.scss"

const cx = classNames.bind(styles)

const KOPrivacy = props => {
  return (
    <div className={cx("about")}>
      <h1 className={cx("about__header")}>KO - endless battle</h1>
      <div className={cx("about__description")}>
        <h3>Privacy Policy</h3>
        <p>We do not take any of your data</p>
      </div>
      <div className={cx("about__contribute")}>
        <p>
          Contact me at jeffmendez19@gmail.com email for any questions or
          issues.
        </p>
      </div>
    </div>
  )
}

export default KOPrivacy
