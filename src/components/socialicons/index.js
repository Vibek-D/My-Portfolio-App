import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <IconButton color="primary" sx={{ cursor: "pointer" }}>
                <FaTwitter />
              </IconButton>
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <IconButton color="primary" sx={{ cursor: "pointer" }}>
                <FaGithub size={20} />
              </IconButton>
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <IconButton color="primary" sx={{ cursor: "pointer" }}>
                <FaFacebookF size={20} />
              </IconButton>
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <IconButton color="primary" sx={{ cursor: "pointer" }}>
                <FaLinkedin size={20} />
              </IconButton>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
