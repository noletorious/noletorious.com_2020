import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import AdidasLogo from "../images/adidas/Adidas_Logo.svg"

const AdidasPage = () => {
  const GradientContainer = styled.div`
    background: linear-gradient(-45deg, #9359ff, #fffc59, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    margin: 0 25px;
    @media only screen and (min-width: 576px) {
      padding: 20vh 0;
    }
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `
  const UnorderedList = styled.ul`
    list-style: none;
    padding-inline-start: 0;
  `
  const UnorderedListItem = styled.li`
    margin-bottom: 1.5em;
  `
  const SpanDivider = styled.span`
    line-height: 1;
    display: block;
  `
  return (
    <Layout>
      <SEO title="Adidas - UI Designer" />
      <GradientContainer className={["h-s-100"].join(" ")}>
        <Container className={["h-100"].join(" ")} fluid>
          <Row className={["h-100"].join(" ")}>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 6 }}
              md={{ span: 5, offset: 1 }}
              className={["h-100"].join(" ")}
            >
              <div
                className={[
                  "d-flex",
                  "text-center",
                  "align-items-center",
                  "h-100",
                  "justify-content-center",
                  "justify-content-sm-end",
                  "pr-0",
                  "pr-sm-5",
                ].join(" ")}
              >
                <div
                  className={[
                    "d-flex",
                    "flex-column",
                    "pb-0",
                    "pt-sm-5",
                    "pb-sm-5",
                  ].join(" ")}
                >
                  <AdidasLogo
                    className={["w-75", "mx-auto", "d-block"].join(" ")}
                    style={{ marginBottom: "-12px" }}
                  />
                  <p style={{ fontSize: "1.75em", color: "#000" }}>X</p>
                  <h1 style={{ fontSize: "2em" }}>
                    <span className={["bg-dark-black"].join(" ")}>
                      NOEL TORRES
                    </span>
                  </h1>
                </div>
              </div>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 5 }}
              md={{ span: 5 }}
              lg={{ span: 4 }}
            >
              <div
                className={[
                  "d-flex",
                  "text-center",
                  "align-items-center",
                  "h-100",
                  "justify-content-center",
                  "justify-content-sm-start",
                ].join(" ")}
              >
                <div
                  className={[
                    "d-flex",
                    "flex-column",
                    "px-3",
                    "bg-whiteblack",
                  ].join(" ")}
                >
                  <h5
                    className={["text-center", "small"].join(" ")}
                    style={{ marginTop: "-8px" }}
                  >
                    <span className={["bg-dark-black"].join(" ")}>
                      UI/MOTION DESIGNER
                    </span>
                  </h5>
                  <p className={["small"].join(" ")}></p>
                  <UnorderedList>
                    <UnorderedListItem>
                      <SpanDivider>TriMet</SpanDivider>
                      <Link to="/trimet#proofofconcept">
                        Progressive Web App POC
                      </Link>
                      ,{" "}
                      <a
                        href="https://www.youtube.com/watch?v=Cld-NITIMwo"
                        target="_blank"
                        alt=""
                      >
                        New Service Flythrough
                      </a>
                      ,{" "}
                      <a
                        href="https://twitter.com/trimet/status/1316881653474578432"
                        target="_blank"
                        alt="Airflow on MAX"
                      >
                        Airflow on MAX
                      </a>
                      , <Link to="/arrivals">Arrivals App Case Study</Link>
                    </UnorderedListItem>
                    <UnorderedListItem>
                      <SpanDivider>Hop Fastpass</SpanDivider>{" "}
                      <Link to="/hop#whatsmyfare">
                        Ways to pay questionnaire
                      </Link>
                      ,{" "}
                      <a
                        href="https://myhopcard.com/home/"
                        target="_blank"
                        alt="Hop Fastpass"
                      >
                        Website Animations
                      </a>
                      ,{" "}
                      <Link to="/hop#hopanimations">
                        Launch Commercials / Marketing Animations
                      </Link>
                      ,{" "}
                      <Link to="/hop#hopanimations">
                        Animated Hopster on Virtual Card
                      </Link>
                    </UnorderedListItem>
                    <UnorderedListItem>
                      <SpanDivider>Cascadia Threads</SpanDivider>{" "}
                      <Link to="cascadiathreads/#animations">
                        Marketing Animations
                      </Link>
                      ,{" "}
                      <a
                        href="https://instagram/cascadiathreads"
                        target="_blank"
                        alt="Instagram: @cascadiathreads"
                      >
                        Apparel Photography
                      </a>
                    </UnorderedListItem>
                    <UnorderedListItem>
                      <SpanDivider>Older Work</SpanDivider>{" "}
                      <a
                        href="https://dribbble.com/shots/3202015-Rappers-Favorite-Website/attachments/3202015-Rappers-Favorite-Website?mode=media"
                        target="_blank"
                        alt="Dribbble Rappers Favorite Idea"
                      >
                        Rappers Favorite
                      </a>
                    </UnorderedListItem>
                  </UnorderedList>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </GradientContainer>
    </Layout>
  )
}

export default AdidasPage
