import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", inputs.name);
    console.log("email", inputs.email);
  };

  return (
    <>
      <Container maxWidth="xl">
        <div>
          <h1>Hola</h1>
        </div>
      </Container>
    </>
  );
};

export default Contact;
