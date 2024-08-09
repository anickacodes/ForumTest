// import firebase from "firebase";
// import "firebaseui";
// // Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());

// const Register = () => {
//   ui.start("#firebaseui-auth-container", {
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     ],
//   });

//   return (
//     <div className="register_container">
//       <h2> Sign up to use our forum</h2>
//     </div>
//   );
// };

// export default Register;

import styled from "styled-components";
import { useRef } from "react";

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
    padding: 2em;
  background: papayawhip;
  border-radius: 1.3em;
  max-width: 400px;
`;

const Heading = styled.h2`
  color: #040303;
  font-size: 16px;
  font-family: poppins;
  font-weight: 80px;
  text-align: center;
`;
const Label = styled.label`
  color: #5b1919;
  font-size: 16px;
  font-family: poppins;
`;

const Input = styled.input`
  width: 100%;
  outline-color: orange;
  padding: 4px;
border-radius: 8%;
`;
const Button = styled.button`
all: unset;
background-color: #228ce9;
color: #e3e3f4;
width: 50%;
border-radius: 33%;
border: 1px solid brown;
text-align: center;
margin: 8px 85px ;
`;

const FormGroup = styled.div`
padding: 20px;`;


const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <Container className="outside-register">
      <Wrapper className="registration_container">
        <div>
          <Heading> Sign Up </Heading>
          <form>
            <FormGroup id="email">
              <Label htmlFor="email"> Email </Label>
              <Input
                type="email"
                className="registration_email"
                id="register-email"
                aria-describedby="emailHelp"
                ref={emailRef}
                placeholder="enter email"
              />
            </FormGroup>

            <FormGroup id="password">
              <Label htmlFor="password"> Password </Label>
              <Input
                type="password"
                className="registration_password"
                id="register-password"
                aria-describedby="passwordHelp"
                ref={passwordRef}
                placeholder="password"
              />
            </FormGroup>

            <FormGroup id="password_confirm">
              <Label htmlFor="password_confirm"> Confirm Password</Label>
              <Input
                type="password"
                className="password_confirm"
                id="password_confirm"
                aria-describedby="passwordconfirm"
                ref={passwordConfirmRef}
                placeholder="confirm password"
              />
            </FormGroup>
            <Button type="submit"> Register </Button>
          </form>
        </div>
        <div style={{ color: "black", textAlign: "center" }}>
          {" "}
          Already have an account? Log In
        </div>
      </Wrapper>
    </Container>
  );
};

export default Register;
