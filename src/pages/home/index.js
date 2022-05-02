import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "../../sidebar";
import { skillData } from "./constants";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const gifs = [
  "https://media.giphy.com/media/xUA7aOwHM0Z6OwuTq8/giphy.gif",
  "https://media.giphy.com/media/BlcWQ9L2VfOFO/giphy.gif",
  "https://media.giphy.com/media/1YuLb2AkGFyIKJOmh7/giphy.gif",
];

export const Home = () => {
  const [selectedGif, setSelectedGif] = React.useState(
    gifs[Math.floor(Math.random() * gifs.length)]
  );

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <Sidebar open={true} />
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            onClick={() =>
              setSelectedGif(gifs[Math.floor(Math.random() * gifs.length)])
            }
            style={{
              cursor: "pointer",
              backgroundImage: `url(${selectedGif})`,
            }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <Typography
                  variant="subtitle2"
                  color="white"
                  mb={2}
                  sx={{ textAlign: "justify", color: "var(--text-color)" }}
                >
                  {introdata.description}
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" my={2}>
                  {Object.keys(skillData).map((i) => (
                    <Box display="flex">
                      <IconButton
                        sx={{ cursor: "pointer", color: "var(--text-color)" }}
                      >
                        {skillData[i].icon}
                      </IconButton>
                    </Box>
                  ))}
                </Box>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
