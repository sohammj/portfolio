import React from "react";
import me from "../../assets/pictures/workingAtComputer.jpg";
import meNow from "../../assets/pictures/currentme.jpg";
import { Link } from "react-router-dom";
import ResumeDownload from "./ResumeDownload";

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
  return (
    // add on resize listener
    <div className="site-page-content">
      {/* <img src={me} style={styles.topImage} alt="" /> */}
      <h1 style={{ marginLeft: -16 }}>Welcome</h1>
      <h3>I&apos;m Soham Joshi</h3>
      <br />

      <div className="text-block">
        <p>
          I’m a B.Tech Computer Science (Data Science) student based in Mumbai,
          currently building products and client work under SovraTech — ranging
          from interactive, design-forward websites to data-heavy dashboards and
          automation-driven web features.
        </p>
        <br />
        <p>
          Thanks for taking the time to explore my portfolio. I try to make my
          work feel fun to navigate while staying clean and intentional under
          the hood. If you have any questions, feedback, or just want to connect,
          feel free to reach out via{" "}
          <Link to="/contact">this form</Link>.
        </p>
      </div>

      <ResumeDownload />

      <div className="text-block">
        <h3>About Me</h3>
        <br />

        <p>
          I’ve always been curious about how things work — especially the kind of
          “why does this behave like that?” curiosity that makes you open devtools
          for fun. Over time, that turned into building: first small experiments,
          then full projects, and now complete systems that I actually ship and
          maintain.
        </p>

        <br />

        <div className="captioned-image">
          <img src={me} style={styles.image} alt="" />
          <p>
            <sub>
              <b>Figure 1:</b> A photo of me teaching C & C++ to students :)
            </sub>
          </p>
        </div>

        <p>
          On the engineering side, I work across the stack and enjoy problems that
          sit at the intersection of product and systems. I’ve built an advanced
          SQL-like database engine in C++ (ToySQL) to deeply understand how real
          databases work — parsing, planning, transactions, concurrency control,
          joins, aggregates, views, user management, and more. On the web side,
          I build interactive experiences with React / Next.js, and I’m also an
          Apple ecosystem person — I build iOS prototypes and data tools as well.
        </p>

        <br />

        <p>
          Professionally, I’ve worked as a Data Analyst Intern in a product team,
          where I also got hands-on with ERP customization and real-world
          workflows. That mix — data + product + engineering — is what I want to
          keep leaning into, especially toward internships and roles in data
          science.
        </p>

        <br />
        <br />

        <div style={{}}>
          <div
            style={{
              flex: 1,
              textAlign: "justify",
              alignSelf: "center",
              flexDirection: "column",
            }}
          >
            <h3>My Hobbies</h3>
            <br />

            <p>
              Outside of work, I like building things in different ways too —
              from experimenting with UI motion/3D scenes, to photography-style
              visuals, to exploring how design and technology can feel more
              “alive” on the web. I also enjoy learning new tools, staying active,
              and I’m usually running a couple of ambitious side projects at once.
            </p>

            <br />

            <p>
              I’m also interested in entrepreneurship and freelancing — I like
              the full loop of building something, shipping it, and seeing it
              genuinely help a real user or client.
            </p>
          </div>

          <div style={styles.verticalImage}>
            <img src={meNow} style={styles.image} alt="" />
            <p>
              <sub>
                <b>Figure 2:</b> Me, now
              </sub>
            </p>
          </div>
        </div>

        <br />
        <br />

        <p>
          Thanks for reading! I hope you enjoy exploring the rest of my portfolio
          and the projects inside it. If you find something interesting (or spot
          an easter egg), definitely tell me — I love that kind of detail.
        </p>

        <br />

        <p>
          If you’d like to connect, you can reach me via the{" "}
          <Link to="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  contentHeader: {
    marginBottom: 16,
    fontSize: 48,
  },
  image: {
    height: "auto",
    width: "100%",
  },
  topImage: {
    height: "auto",
    width: "100%",
    marginBottom: 32,
  },
  verticalImage: {
    alignSelf: "center",
    // width: '80%',
    marginLeft: 32,
    flex: 0.8,

    alignItems: "center",
    // marginBottom: 32,
    textAlign: "center",
    flexDirection: "column",
  },
};

export default About;
