import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #1e1e1e;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px 25px;
  width: 360px;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 25px;
  color: #000;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  padding: 10px 0;
  margin-bottom: 20px;
  outline: none;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #3d3d3d;
  color: white;
  font-size: 16px;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const LinkWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const YellowLink = styled(Link)`
  color: #f4c10f;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;