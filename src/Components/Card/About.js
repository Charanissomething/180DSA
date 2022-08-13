import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import themeColor from "../../Data/themeColor.json";
import Reset from "./Reset";
import Button from "@mui/material/Button";

function About() {
  const currTheme = useSelector((state) => state.theme);
  let navigate = useNavigate();
  const fun2 = () => {
    navigate("/about/contact");
  };
  return (
    <>
      <Cont color={themeColor[currTheme][0].background}>
        <Wrapper>
          <Description descrip="true" txtcolor={themeColor[currTheme][0].text}>
            180 DSA is your personal web app progress tracker based on sde sheet
            by{" "}
            <Anchor href="https://www.linkedin.com/in/rajarvp/" target="_blank">
              Striver
            </Anchor>
            .
          </Description>
          <Btn>
            <Button variant="contained" onClick={fun2}>
              Contact Me
            </Button>

            <Reset />
          </Btn>
          <Description txtcolor={themeColor[currTheme][0].text}>
            to the ❤️ for DSA 🤌
          </Description>
        </Wrapper>
      </Cont>
      <Footer />
    </>
  );
}
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85.5vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 85.5vh;
  /* justify-content: center; */
  align-items: center;
`;
const Description = styled.h2`
  color: ${(props) => props.txtcolor};
  font-size: 2rem;
  margin: 2rem;
  word-spacing: 0.5rem;
  letter-spacing: 0.05rem;
  margin-top: ${(props) => (props.descrip === "true" ? "3rem" : "0rem")};
`;
const Anchor = styled.a`
  color: #3399ff;
  text-decoration: none;
`;
const Btn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 4rem 0 4rem;
`;

export default About;
