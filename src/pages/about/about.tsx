import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { newMessage } from "../../service";
import "./about.scss";

export const About = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const onSubmit = () => {
    const payload = {
      name,
      email,
      message,
      userUid: localStorage.getItem("userUid") || undefined,
    };
    newMessage(payload).subscribe((res) => {
      console.log(res.data?.message);
    });
  };

  return (
    <>
      <BlueLine />
      <Container className="about-us">
        <Photo
          src={`https://images02.nicepage.com/c461c07a441a5d220e8feb1a/418bb2b2192f56d08fcc72ac/rgerg.jpg`}
        />
        <FormContainer>
          <h1>Contact Us</h1>
          <Field>
            <TextField
              className="about-us-field"
              label="Your Name"
              placeholder="Enter your name"
              variant="standard"
              type="text"
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                setName(evt.target.value)
              }
            />
            {name === "" && <p>Need to add your name!</p>}
          </Field>
          <Field>
            <TextField
              className="about-us-field"
              label="Email Address"
              placeholder="Enter a valid email address"
              variant="standard"
              type="email"
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                setEmail(evt.target.value)
              }
            />
            {email === "" && <p>Need to add your email!</p>}
          </Field>
          <Field>
            <TextField
              className="about-us-field"
              label="Message"
              placeholder="Enter your message"
              variant="standard"
              type="text"
              rows={5}
              multiline
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                setMessage(evt.target.value)
              }
            />
          </Field>
          <Button
            variant="contained"
            color="info"
            onClick={() =>
              name && name !== "" && email && email !== "" && onSubmit()
            }
          >
            Submit
          </Button>
        </FormContainer>
      </Container>
    </>
  );
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlueLine = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 228px;
  background-color: #d0e4f4;
`;

const Container = styled(Center)`
  position: relative;
  width: 940px;
  height: auto;
`;

const Photo = styled.img`
  src: url(props.src);
  width: 583px;
  height: auto;
  position: absolute;
  right: 0;
  border-radius: 10px;
`;

const FormContainer = styled(Center)`
  justify-content: flex-start;
  flex-direction: column;
  width: 500px;
  height: 500px;
  padding: 75px;
  padding-top: 30px;
  position: absolute;
  left: 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
`;

const Field = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px !important;
`;
