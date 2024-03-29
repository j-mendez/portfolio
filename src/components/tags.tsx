import React from "react";

const videoStyles = {
  maxHeight: "55.5vh",
  maxWidth: "95vw",
  minHeight: "38vh",
  minWidth: "100%",
  margin: 0,
  padding: 0,
  border: 0,
};

class Tags extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Roles in projects</h1>
          <p>A couple of projects that I got to work on over the years.</p>
          <h2>Software from different stacks along the way.</h2>
          <p>
            Most of the projects show cased are mobile apps since that was a big
            area of focus.
          </p>
          <div
            style={{
              flexDirection: "row",
              paddingRight: 14,
              justifyContent: "center",
            }}
          >
            <div>
              <a href="https://a11ywatch.com">
                <h3 style={{ fontSize: 16 }}>A11yWatch</h3>
              </a>
              <div>
                Improve your website inclusiveness and prevent your page from
                having drastic accessibility problems.
              </div>
            </div>
          </div>
          <div
            style={{
              background: "none",
              boxShadow: "none",
              border: 0,
              flex: 1,
              paddingTop: 12,
              paddingBottom: 12,
            }}
          >
            <iframe
              style={videoStyles}
              src="https://player.vimeo.com/video/389034032?title=0&amp;byline=0&amp;portrait=0&amp;muted=1&amp;autoplay=0&amp;autopause=0&amp;controls=1&amp;loop=1&amp;"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={"Video of A11yWatch initial prototype"}
            ></iframe>
          </div>
          <div>
            <div>
              <div>About the Project</div>
              <p>
                A11ywatch is a SaaS product that allows users to attach a
                monitoring service on their website that will notify you as
                accessibility issues arise. The project provides a helper CDN
                that you include to your website that will automatically link
                the fixes you provide from a11ywatch. The cdn even has the
                ability to automatically fix the issues with the power of
                machine learning and AI. If you want more control on fixing
                issues there's also scripts that you can include directly into
                your project as an alternative. The main reason for this project
                as after trying to make a big project fully ADA compliant and
                realizing the amount of time and effort it takes. You can spend
                days/weeks/months depending on how big your product is to become
                ADA compliant and it is also against the law in the United
                States to not comply section 508. in the United States to not
                comply. I wanted to make this tasks simple instead of something
                that takes experienced engineers to come in and do.
              </p>
              <p>Creator</p>
              <div>Made using</div>
              <ul style={{ marginBottom: 12 }}>
                <li>React</li>
                <li>Next.js</li>
                <li>GraphQL</li>
                <li>Node</li>
                <li>TensorFlow</li>
                <li>Rust</li>
                <li>WebAssembly</li>
                <li>
                  <a
                    href="https://a11ywatch.com"
                    style={{ color: "rgb(30, 64, 175)" }}
                  >
                    Visit A11yWatch
                  </a>
                </li>
              </ul>
              <a
                href="https://www.producthunt.com/posts/a11ywatch?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-a11ywatch"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=193816&theme=light"
                  alt="A11yWatch - instantly fix web accessibility issues on your website | Product Hunt Embed"
                  style={{ maxWidth: 250, maxHeight: 54 }}
                />
              </a>
            </div>
          </div>
          <br />
          <div>
            <div
              style={{
                flexDirection: "row",
                paddingRight: 14,
                justifyContent: "center",
              }}
            >
              <div>
                <h3 style={{ fontSize: 16 }}>Carsight</h3>
                <div>Never lose where your car is parked again.</div>
              </div>
            </div>
            <div>
              <div
                style={{
                  background: "none",
                  boxShadow: "none",
                  border: 0,
                  flex: 1,
                }}
              >
                <iframe
                  style={videoStyles}
                  src="https://player.vimeo.com/video/373720284?title=0&byline=0&portrait=0&muted=1&autoplay=0&autopause=0&controls=1&loop=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Carsight car finding app"
                ></iframe>
              </div>
            </div>
            <div />
            <div>
              <div>About the Project</div>
              <p>
                Carsight is a mobile app that allows you to find your car in
                augmented reality without having to press a manual park button.
                Useful for when you are in a city and need to park in elevated
                parking lots.
              </p>
              <div>Personal Project</div>
              <div>Made using</div>
              <ul>
                <li>React-Native</li>
                <li>Swift</li>
              </ul>
            </div>
          </div>
          <br />
          <div>
            <div
              style={{
                flexDirection: "row",
                paddingRight: 14,
                justifyContent: "center",
              }}
            >
              <div>
                <a
                  href="https://www.zeemee.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <h3 style={{ fontSize: 16 }}>Zeemee</h3>
                </a>
                <div>
                  Apply with confidence Join the #1 app to discover colleges,
                  stand out in your applications, and connect with other
                  students.
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>About the Project</div>
                <p>
                  Zeeme is a application that allows students to connect with
                  their classmates and teachers before it starts.
                </p>
                <div>Part in project</div>
                <p>
                  I mainly focused on the web application and backend doing ruby
                  on rails with graphql work. While working on this project, I
                  was able to fully automate and bootstrap the project into
                  micro services using Docker. The main focus initially was to
                  make the web application fully ADA compliant.
                </p>
                <div>Made using</div>
                <ul>
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>MYSQL</li>
                  <li>Rails</li>
                  <li>Redis</li>
                  <li>
                    <a
                      href="https://apps.apple.com/us/app/zeemee/id1044878258"
                      style={{ color: "rgb(30, 64, 175)" }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View on App Store
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.zeemee.zeemee_android&hl=en"
                      style={{ color: "rgb(30, 64, 175)" }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View on Play Store
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div>
              <div
                style={{
                  flexDirection: "row",
                  paddingRight: 14,
                  justifyContent: "center",
                }}
              >
                <div>
                  <a
                    href="https://itunes.apple.com/us/app/arcus-load-management/id1331606155?mt=8"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <h3 style={{ fontSize: 16 }}>Arcus</h3>
                  </a>
                  <div>
                    Track and manage your truck freights across your company.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>About the Project</div>
                <p>
                  Arcus is a freight management and navigation TBT(turn-by-turn)
                  application for truck drivers and brokers to co-exist and work
                  together easier. Has custom themes to tailor app experience.
                </p>
                <div>Part in project</div>
                <p>
                  The API and web application was already set. I joined the team
                  to create the iOS and android applications. Will show the
                  driver part soon its comparable to Uber.
                </p>
                <div>Made using</div>
                <ul>
                  <li>React-Native</li>
                  <li>React</li>
                  <li>Java</li>
                  <li>Obj-C</li>
                  <li>MySql</li>
                  <li>
                    <a
                      href="https://itunes.apple.com/us/app/arcus-load-management/id1331606155?mt=8"
                      style={{ color: "rgb(30, 64, 175)" }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View on App Store
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.arcus"
                      style={{ color: "rgb(30, 64, 175)" }}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View on Play Store
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <a href="https://joinknack.com" rel="noreferrer" target="_blank">
                <h3 style={{ fontSize: 16 }}>Knack</h3>
              </a>
              <div>Find a tutor for any college course.</div>
            </div>

            <div>
              <div>
                <div>About the Project</div>
                <p>
                  Knack allows users to find a tutor for any subject that they
                  need help with on your own time.
                </p>
                <div>Part in project</div>
                <p>
                  I mainly focused on the front-end part of the application. The
                  app was already done in obj-C so we recreated it from scratch
                  in react-native.
                </p>
                <div>Made using</div>
                <ul>
                  <li>React-Native</li>
                  <li>React</li>
                  <li>PHP</li>
                  <li>Relay</li>
                  <li>GraphQL</li>
                  <li>MySql</li>
                  <li>Realm</li>
                </ul>
              </div>
            </div>
          </div>
          <br />
        </div>
      </>
    );
  }
}

export default Tags;
