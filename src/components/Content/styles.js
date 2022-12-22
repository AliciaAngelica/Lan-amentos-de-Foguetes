import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  margin-top: -5%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #046ee5;
  border-bottom: 1px solid #046ee0;
  min-height: 82px;
  width: 100%;
`;

export const Logo = styled.div`
  text-align: center;
  width: 100%;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

`;


export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40vh;
  box-shadow: 0 1px 2px #0003;
  background-color: #c2c2c2;
  max-width: 350px;
  padding: 20px;
  height: 40vh;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;


export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;