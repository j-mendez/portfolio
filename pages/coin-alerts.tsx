import React from "react"
import classNames from "classnames/bind"
import styles from "../styles/components/about.module.scss"

const cx = classNames.bind(styles)

const CoinAlerts = () => {
  return (
    <div className={cx("about")}>
      <h1 className={cx("about__header")}>CoinAlerts</h1>
      <div className={cx("about__description")}>
        <p>We do not take any of your data</p>
      </div>
      <div className={cx("about__contribute")}>
        <p>
          Contact me at jeffmendez19@gmail.com email will change soon once
          project kicks off
        </p>
      </div>
    </div>
  )
}

export default CoinAlerts
