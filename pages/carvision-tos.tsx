import React from "react"
import classNames from "classnames/bind"
import styles from "../styles/components/about.module.scss"

const cx = classNames.bind(styles)

const CoinAlerts = props => {
  return (
    <div className={cx("about")}>
      <h1 className={cx("about__header")}>Carsight</h1>
      <div className={cx("about__description")}>
        <h3>Terms of Service</h3>
        <p>
          Carsight is not responsible for anything that happens while using the
          application. Please be aware of your surroundings since AR you are
          looking through your phone and not whats around you. We try to design
          the app to be as safe as possible by only showing the camera at
          specefic times.
        </p>
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