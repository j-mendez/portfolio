import React from "react"
import Head from "next/head"
import classNames from "classnames/bind"
import styles from "../styles/components/tags.module.scss"
import Layout, { siteTitle } from "../components/layout"

const knackM = "images/knackM.jpg"
const knackD = "images/knackD.png"
const reportM = "images/reportM.png"
const reportD = "images/reportD.png"
const twitchD = "images/twitchD.png"
const twitchM = "images/twitchM.png"

const arcusiOS1 = "images/arcus/ios1.png"
const arcusiOS2 = "images/arcus/ios2.png"
const arcusiOS3 = "images/arcus/ios3.png"
const arcusiOS4 = "images/arcus/ios4.png"

const arcusiOSDark1 = "images/arcus/iosDark1.png"
const arcusiOSDark2 = "images/arcus/iosDark2.png"
const arcusiOSDark3 = "images/arcus/iosDark3.png"
const arcusiOSDark4 = "images/arcus/iosDark4.png"

const android1 = "images/arcus/android1.png"
const android2 = "images/arcus/android2.png"
const android3 = "images/arcus/android3.png"
const android4 = "images/arcus/android4.png"

const androidDark1 = "images/arcus/androidDark1.png"
const androidDark2 = "images/arcus/androidDark2.png"
const androidDark3 = "images/arcus/androidDark3.png"
const androidDark4 = "images/arcus/androidDark4.png"

const coinlist1 = "images/coinlist1.png"
const coinlist2 = "images/coinlist2.png"
const coinlist3 = "images/coinlist3.png"
const coinlist4 = "images/coinlist4.png"
const coinlist5 = "images/coinlist5.png"

const musific1 = "images/musific1.png"
const musific2 = "images/musific2.png"
const musific3 = "images/musific3.png"
const musific4 = "images/musific4.png"
const musific5 = "images/musific5.png"

const quimbee1 = "images/quimbee1.png"
const quimbee2 = "images/quimbee2.png"
const quimbee3 = "images/quimbee3.png"
const quimbee4 = "images/quimbee4.png"
const quimbee5 = "images/quimbee5.png"

const zeemee1 = "images/zeemee1.png"
const zeemee2 = "images/zeemee2.png"
const zeemee3 = "images/zeemee3.png"
const zeemee4 = "images/zeemee4.png"
const zeemee5 = "images/zeemee5.png"

const gymbo1 = "images/gymbo1.png"
const gymbo2 = "images/gymbo2.png"

const carsight = "images/carsight.png"
const a11ywatch = "images/a11ywatch.png"
const a11ywatch1 = "images/a11ywatch1.png"

const cx = classNames.bind(styles)

class Tags extends React.Component {
  state = {
    darkMode: false,
    loaded: true,
    arcusOs: false
  }

  changeTheme = () => {
    this.setState({ darkMode: !this.state.darkMode })
  }

  changeArcusOS = () => {
    this.setState({ arcusOs: !this.state.arcusOs })
  }

  render() {
    let arcus1 = !this.state.darkMode ? arcusiOS1 : arcusiOSDark1
    let arcus2 = !this.state.darkMode ? arcusiOS2 : arcusiOSDark2
    let arcus3 = !this.state.darkMode ? arcusiOS3 : arcusiOSDark3
    let arcus4 = !this.state.darkMode ? arcusiOS4 : arcusiOSDark4

    if (this.state.arcusOs) {
      arcus1 = !this.state.darkMode ? android1 : androidDark1
      arcus2 = !this.state.darkMode ? android2 : androidDark2
      arcus3 = !this.state.darkMode ? android3 : androidDark3
      arcus4 = !this.state.darkMode ? android4 : androidDark4
    }

    const videoStyles = {
      maxHeight: "55.5vh",
      minHeight: "38vh",
      minWidth: "100%",
      flex: 1,
      margin: 0,
      padding: 0
    }

    return (
      <Layout>
        <Head>
          <title>{siteTitle + " - Projects"}</title>
        </Head>
        <div className={cx("tags")}>
          <div className={cx("tags__container")}>
            <h1 style={{ color: "black", margin: 12, marginLeft: 24 }}>
              Projects
            </h1>
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <div
                  style={{
                    flexDirection: "row",
                    paddingRight: 14,
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <a href="https://www.a11ywatch.com">
                      <h3 style={{ fontSize: 16 }}>A11yWatch</h3>
                    </a>
                    <div className={cx("tags__headerSub")}>
                      Improve the process of your website inclusiveness and
                      prevent your page from having drastic a11y problems with a
                      custom cdn catered for your website.
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cx("tags_blocks")}
                style={{
                  background: "none",
                  boxShadow: "none",
                  border: 0,
                  flex: 1
                }}
              >
                <iframe
                  style={videoStyles}
                  src="https://player.vimeo.com/video/389034032?title=0&amp;byline=0&amp;portrait=0&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <div />
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    A11ywatch is a SaaS product that allows users to attach a
                    monitoring service on their website that will notify you as
                    accessibility issues arise. The project provides a helper
                    CDN that you include to your website that will automatically
                    link the fixes you provide from a11ywatch. The cdn even has
                    the ability to automatically fix the issues with the power
                    of machine learning and AI. If you want more control on
                    fixing issues there's also scripts that you can include
                    directly into your project as an alternative. The main
                    reason for this project as after trying to make a big
                    project fully ADA compliant and realizing the amount of time
                    and effort it takes. You can spend days/weeks/months
                    depending on how big your product is to become ADA compliant
                    and it is also against the law in the United States to not
                    comply section 508. in the United States to not comply. I
                    wanted to make this tasks simple instead of something that
                    takes experienced engineers to come in and do.
                  </p>
                  <p>Founder and CEO</p>
                  <div>Made using</div>
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Graphql</li>
                    <li>Mongo</li>
                    <li>Node</li>
                    <li>TensorFlow</li>
                    <li>Rust</li>
                    <li>WebAssembly</li>
                    <a
                      href="https://www.a11ywatch.com"
                      style={{ marginBottom: 12 }}
                    >
                      <li>View Website</li>
                    </a>
                    <a
                      href="https://www.producthunt.com/posts/a11ywatch?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-a11ywatch"
                      target="_blank"
                    >
                      <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=193816&theme=light"
                        alt="A11yWatch - instantly fix web accessibility issues on your website | Product Hunt Embed"
                        style={{ maxWidth: 250, maxHeight: 54 }}
                      />
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <div
                  style={{
                    flexDirection: "row",
                    paddingRight: 14,
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <a href="https://github.com/SafeWare">
                      <h3 style={{ fontSize: 16 }}>Safecore</h3>
                    </a>
                    <div className={cx("tags__headerSub")}>
                      Safecore - Encrypted Communication (Open-source)
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cx("tags_blocks")}
                style={{
                  background: "none",
                  boxShadow: "none",
                  border: 0,
                  flex: 1
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/LPDrOSWsPg4"
                  title="YouTube video for encrypted audio project"
                  frameBorder="0"
                  style={videoStyles}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div />
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>Encrypted communication fully open source</p>
                  <p>Creator</p>
                  <div>Made using</div>
                  <ul>
                    <li>React-Native</li>
                    <li>WebSockets</li>
                    <li>Node - Migrating to Deno before v1</li>
                    <li>Murmur</li>
                    <a href="https://github.com/SafeWare">
                      <li>View Website</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <div
                  style={{
                    flexDirection: "row",
                    paddingRight: 14,
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <a href="https://www.miniprograms.xyz">
                      <h3 style={{ fontSize: 16 }}>MiniPrograms</h3>
                    </a>
                    <div className={cx("tags__headerSub")}>
                      Mini Programs to inject in your app and extract data from.
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cx("tags_blocks")}
                style={{
                  background: "none",
                  boxShadow: "none",
                  border: 0,
                  flex: 1
                }}
              >
                <iframe
                  style={videoStyles}
                  src="https://i.gyazo.com/bb1756ee811474f5a669daac73e0e6f4.mp4"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <div />
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    MiniPrograms is a utility product that allows you to add
                    useful applications into your programs with ease.
                  </p>
                  <p>Creator</p>
                  <div>Made using</div>
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <a href="https://www.miniprograms.xyz">
                      <li>View Website</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <div
                  style={{
                    flexDirection: "row",
                    paddingRight: 14,
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <a href="https://apps.apple.com/us/app/carsight/id1481029330">
                      <h3 style={{ fontSize: 16 }}>Carsight</h3>
                    </a>
                    <div className={cx("tags__headerSub")}>
                      Never lose where your car is parked again.
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")} style={{ flex: 1 }}>
                  <a href="https://apps.apple.com/us/app/carsight/id1481029330">
                    <img
                      className={cx("tags__iframe", "pic1")}
                      src={carsight}
                    />
                  </a>
                </div>
                <div
                  className={cx("tags_blocks")}
                  style={{
                    background: "none",
                    boxShadow: "none",
                    border: 0,
                    flex: 1
                  }}
                >
                  <iframe
                    style={videoStyles}
                    src="https://player.vimeo.com/video/373720284?title=0&byline=0&portrait=0&muted=1&autoplay=0&autopause=0&controls=0&loop=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div />
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    Carsight is a mobile app that allows you to find your car in
                    augmented reality without having to press a manual park
                    button. Useful for when you are in a city and need to park
                    in elevated parking lots. ( Android coming soon, maybe. )
                  </p>
                  <div>Personal Project</div>
                  <div>Made using</div>
                  <ul>
                    <li>React-Native</li>
                    <li>Swift</li>
                    <a href="https://apps.apple.com/us/app/carsight/id1481029330">
                      <li>View on App Store</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <div
                  style={{
                    flexDirection: "row",
                    paddingRight: 14,
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <a href="https://www.zeemee.com/">
                      <h3 style={{ fontSize: 16 }}>Zeemee</h3>
                    </a>
                    <div className={cx("tags__headerSub")}>
                      Apply with confidence Join the #1 app to discover
                      colleges, stand out in your applications, and connect with
                      other students.
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")}>
                  <a href="https://www.zeemee.com/">
                    <img className={cx("tags__iframe", "pic1")} src={zeemee1} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://www.zeemee.com/">
                    <img className={cx("tags__iframe")} src={zeemee2} />
                  </a>
                </div>
              </div>
              <div />
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    Zeeme is a application that allows students to connect with
                    their classmates and teachers before it starts.
                  </p>
                  <div>Part in project</div>
                  <p>
                    I mainly focused on the web application and backend doing
                    ruby on rails with graphql work. While working on this
                    project, I was able to fully automate and bootstrap the
                    project into micro services using Docker. The main focus
                    initially was to make the web application fully ADA
                    compliant.
                  </p>
                  <div>Made using</div>
                  <ul>
                    <li>React</li>
                    <li>GraphQL</li>
                    <li>MYSQL</li>
                    <li>Rails</li>
                    <li>Redis</li>
                    <a href="https://apps.apple.com/us/app/zeemee/id1044878258">
                      <li>View on App Store</li>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.zeemee.zeemee_android&hl=en">
                      <li>View on Play Store</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <div
                  style={{
                    flexDirection: "row",
                    paddingRight: 14,
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <a href="https://itunes.apple.com/us/app/meje/id1452941359?mt=8">
                      <p style={{ fontSize: 16 }}>Meje</p>
                    </a>
                    <div className={cx("tags__headerSub")}>
                      Enjoy the latest songs as they come out without having to
                      search for them. Record your remix or cover for millions
                      of songs with ease.
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/meje/id1452941359?mt=8">
                    <img
                      className={cx("tags__iframe", "pic1")}
                      src={musific1}
                    />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/meje/id1452941359?mt=8">
                    <img className={cx("tags__iframe")} src={musific2} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/meje/id1452941359?mt=8">
                    <img className={cx("tags__iframe")} src={musific3} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/meje/id1452941359?mt=8">
                    <img className={cx("tags__iframe")} src={musific4} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/meje/id1452941359?mt=8">
                    <img className={cx("tags__iframe")} src={musific5} />
                  </a>
                </div>
              </div>
              <div />
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    Meje is a music player that allows you to record voice overs
                    to create a song or just stream music.
                  </p>
                  <p>Personal project</p>
                  <div>Made using</div>
                  <ul>
                    <li>React-Native</li>
                    <li>AWS</li>
                    <li>MYSQL</li>
                    <a href="https://itunes.apple.com/us/app/meje/id1452941359?mt=8">
                      <li>View on App Store</li>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mobile.coinalerts&hl=en">
                      <li>View on Play Store</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <div
                  style={{
                    flexDirection: "row",
                    paddingRight: 14,
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <a href="https://itunes.apple.com/us/app/coinalerts/id1441138391?mt=8">
                      <h3 style={{ fontSize: 16 }}>CoinAlerts</h3>
                    </a>
                    <div className={cx("tags__headerSub")}>
                      Get notified at the right time for your cryptocurrency.
                      All in one cryptocurrency toolkit.
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/coinalerts/id1441138391?mt=8">
                    <img
                      className={cx("tags__iframe", "pic1")}
                      src={coinlist1}
                    />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/coinalerts/id1441138391?mt=8">
                    <img className={cx("tags__iframe")} src={coinlist2} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/coinalerts/id1441138391?mt=8">
                    <img className={cx("tags__iframe")} src={coinlist3} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/coinalerts/id1441138391?mt=8">
                    <img className={cx("tags__iframe")} src={coinlist4} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/coinalerts/id1441138391?mt=8">
                    <img className={cx("tags__iframe")} src={coinlist5} />
                  </a>
                </div>
              </div>
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    CoinAlerts is a cryptocurrency community and tool to help
                    you get notified on specefic price points.
                  </p>
                  <p>Personal project</p>
                  <div>Made using</div>
                  <ul>
                    <li>React-Native</li>
                    <li>AWS</li>
                    <li>Oracle DB</li>
                    <a href="https://itunes.apple.com/us/app/coinalerts-crypto-tracker/id1441138391?mt=8">
                      <li>View on App Store</li>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mobile.coinalerts&hl=en">
                      <li>View on Play Store</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <div
                  style={{
                    flexDirection: "row",
                    paddingRight: 14,
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <a href="https://itunes.apple.com/us/app/quimbee/id1001711683?mt=8">
                      <h3 style={{ fontSize: 16 }}>Quimbee</h3>
                    </a>
                    <div className={cx("tags__headerSub")}>
                      Quimbee is one of the most widely used and respected study
                      aids for law students. With a massive and growing library
                      of case briefs, video lessons, multiple choice questions,
                      Quimbee helps its members achieve academic success in law
                      school.
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/quimbee/id1001711683?mt=8">
                    <img
                      className={cx("tags__iframe", "pic1")}
                      src={quimbee1}
                    />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/quimbee/id1001711683?mt=8">
                    <img className={cx("tags__iframe")} src={quimbee2} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/quimbee/id1001711683?mt=8">
                    <img className={cx("tags__iframe")} src={quimbee3} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/quimbee/id1001711683?mt=8">
                    <img className={cx("tags__iframe")} src={quimbee4} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/quimbee/id1001711683?mt=8">
                    <img className={cx("tags__iframe")} src={quimbee5} />
                  </a>
                </div>
              </div>
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    Quimbee is law school study toolkit that helps students pass
                    the bar exam.
                  </p>
                  <div>Part in project</div>
                  <p>
                    I joined the project to help bring up the average app store
                    rating with a strict deadlines in place. While working on
                    the project the main focus for me was the mobile application
                    and the devops. I made varius automated tools for testing
                    and daily deployments to the beta/app store including
                    CircleCI and Fastlane. My main priority was to stabilize the
                    project from crashes and bring in tools like CodePush to
                    provide a hot deploy to devices to fix js issues if needed.
                    It took 4 months to go from 1 - 4.9 stars on the app store
                    and 1 - 4.4 stars on the play store.
                  </p>
                  <div>Made using</div>
                  <ul>
                    <li>React-Native</li>
                    <a href="https://itunes.apple.com/us/app/quimbee/id1001711683?mt=8">
                      <li>View on App Store</li>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.Quimbee.mobile&hl=en_US">
                      <li>View on Play Store</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <div
                  style={{
                    flexDirection: "row",
                    paddingRight: 14,
                    justifyContent: "center"
                  }}
                >
                  <div>
                    <a href="https://itunes.apple.com/us/app/arcus-load-management/id1331606155?mt=8">
                      <h3 style={{ fontSize: 16 }}>Arcus</h3>
                    </a>
                    <div className={cx("tags__headerSub")}>
                      Track and manage your truck freights across your company.
                    </div>
                  </div>
                </div>
                <button
                  style={{ marginTop: 10, marginBottom: 10 }}
                  onClick={this.changeArcusOS}
                >
                  {!this.state.arcusOs ? "View android" : "View iOS"}
                </button>
                <button onClick={this.changeTheme}>Toggle Theme</button>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/arcus-load-management/id1331606155?mt=8">
                    <img className={cx("tags__iframe", "pic1")} src={arcus1} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/arcus-load-management/id1331606155?mt=8">
                    <img className={cx("tags__iframe")} src={arcus2} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/arcus-load-management/id1331606155?mt=8">
                    <img className={cx("tags__iframe")} src={arcus3} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://itunes.apple.com/us/app/arcus-load-management/id1331606155?mt=8">
                    <img className={cx("tags__iframe")} src={arcus4} />
                  </a>
                </div>
              </div>
              <div />
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    Arcus is a freight management and navigation
                    TBT(turn-by-turn) application for truck drivers and brokers
                    to co-exist and work together easier. Has custom themes to
                    tailor app experience.
                  </p>
                  <div>Part in project</div>
                  <p>
                    The API and web application was already set. I joined the
                    team to create the iOS and android applications. Will show
                    the driver part soon its comparable to Uber.
                  </p>
                  <div>Made using</div>
                  <ul>
                    <li>React-Native</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>Obj-C</li>
                    <li>MySql</li>
                    <a href="https://itunes.apple.com/us/app/arcus-load-management/id1331606155?mt=8">
                      <li>View on App Store</li>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.arcus">
                      <li>View on Play Store</li>
                    </a>
                  </ul>
                </div>
                <iframe
                  width="50%"
                  height="100%"
                  src="https://www.youtube.com/embed/2cp0iPQyvLk"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <a href="https://joinknack.com">
                  <h3 style={{ fontSize: 16 }}>Knack</h3>
                </a>
                <div className={cx("tags__headerSub")}>
                  Find a tutor for any college course.
                </div>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")}>
                  <a href="https://joinknack.com">
                    <img className={cx("tags__iframe")} src={knackD} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://joinknack.com">
                    <img className={cx("tags__iframe", "pic1")} src={knackM} />
                  </a>
                </div>
              </div>
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    Knack allows users to find a tutor for any subject that they
                    need help with on your own time.
                  </p>
                  <div>Part in project</div>
                  <p>
                    I mainly focused on the front-end part of the application.
                    The app was already done in obj-C so we recreated it from
                    scratch in react-native.
                  </p>
                  <div>Made using</div>
                  <ul>
                    <li>React-Native</li>
                    <li>React</li>
                    <li>PHP</li>
                    <li>RELAY</li>
                    <li>GRAPHQL</li>
                    <li>MySql</li>
                    <li>Realm</li>
                  </ul>
                </div>
                <iframe
                  width="50%"
                  height="100%"
                  src="https://www.youtube.com/embed/f5I07PZGwLA"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <br />
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <a href="https://joinreporttracker.com">
                  <h3 style={{ fontSize: 16 }}>ReportTracker</h3>
                </a>
                <div className={cx("tags__headerSub")}>
                  The effective way to manage your business.
                </div>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")}>
                  <a href="https://joinreporttracker.com">
                    <img className={cx("tags__iframe", "pic1")} src={reportM} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://joinreporttracker.com">
                    <img className={cx("tags__iframe")} src={reportD} />
                  </a>
                </div>
              </div>
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    ReportTracker is cross platform application that is setup in
                    branches to control and run your team.
                  </p>
                  <p>Solo project front to back</p>
                  <div>Made using</div>
                  <ul>
                    <li>React-Native</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>NODE</li>
                    <li>MONGO</li>
                    <li>AWS</li>
                  </ul>
                </div>
                <iframe
                  width="50%"
                  height="100%"
                  src="https://www.youtube.com/embed/aTPazOqsH-w"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <a href="http://gymbo.fit">
                  <h3 style={{ fontSize: 16 }}>GymBo</h3>
                </a>
                <div className={cx("tags__headerSub")}>
                  Find partners at the gym anywhere at anytime. - app store
                  soon!
                </div>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")}>
                  <a href="http://gymbo.fit">
                    <img className={cx("tags__iframe", "pic1")} src={gymbo1} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="http://gymbo.fit">
                    <img className={cx("tags__iframe")} src={gymbo2} />
                  </a>
                </div>
              </div>
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    Gymbo allows users to connect and meet up to get the fitness
                    training they need.Users can connnect from all over the
                    world to any gym or recreational facility that they want to
                    find a partner to help them work out.
                  </p>
                  <div>Made using</div>
                  <ul>
                    <li>React-Native</li>
                    <li>Hack/PHP</li>
                    <li>HHVM</li>
                    <li>Obj-C</li>
                    <li>MySql</li>
                  </ul>
                </div>
                <iframe
                  width="50%"
                  height="100%"
                  src="https://www.youtube.com/embed/y2vDDr9_HVc"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <br />
            <div className={cx("tags_subContainer")}>
              <div className={cx("tags__header")}>
                <a href="https://twitchoverlays.herokuapp.com/#/">
                  <h3 style={{ fontSize: 16 }}>Twitch Stream Overlays</h3>
                </a>
                <div className={cx("tags__headerSub")}>
                  Update your stream overlay in realtime to have a dynamic view
                  over your stream for a event or just for fun.
                </div>
              </div>
              <div className={cx("tags_row")}>
                <div className={cx("tags_blocks")}>
                  <a href="https://twitchoverlays.herokuapp.com/#/">
                    <img className={cx("tags__iframe", "pic1")} src={twitchD} />
                  </a>
                </div>
                <div className={cx("tags_blocks")}>
                  <a href="https://twitchoverlays.herokuapp.com/#/">
                    <img className={cx("tags__iframe")} src={twitchM} />
                  </a>
                </div>
              </div>
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>About the Project</div>
                  <p>
                    Create realtime stream layouts and overlays to manage your
                    stream all off of one platform whether your about to have a
                    tournament and need to update what plays are on the screen
                    and such.Even if your just using this by yourself there are
                    some features that can enhance your stream by managing your
                    playlist and your twitch broadcast popup alerts.
                  </p>
                  <div>Made using</div>
                  <ul>
                    <li>Angular</li>
                    <li>Node</li>
                    <li>Mongo </li>
                    <li>MySql</li>
                  </ul>
                </div>
                <iframe
                  width="50%"
                  height="100%"
                  src="https://www.youtube.com/embed/ZehwRHdZ4ZQ"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className={cx("tags_blockBottom")}>
                <div className={cx("tags_info")}>
                  <div>Other solo apps</div>
                  <ul>
                    <li>
                      <a href="https://apps.apple.com/us/app/sports-trivia/id1444613045">
                        Sports-Trivia (4 stars)
                      </a>
                      <p>
                        done in under a 4 hour period and generates 10-30$ on a
                        monthly basis passive.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Tags