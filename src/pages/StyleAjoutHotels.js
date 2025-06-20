import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  font-family: 'Arial', sans-serif;
`;

export const BackLink = styled.div`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.2rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

export const Select = styled.select`
  flex: 1;
  padding: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

export const UploadBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  height: 150px;
  cursor: pointer;
  color: #999;
  text-align: center;
  font-size: 14px;
  background-color: #f9f9f9;

  svg {
    font-size: 32px;
    margin-bottom: 0.5rem;
  }

  input {
    display: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: #333;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;
  float: right;

  &:hover {
    background-color: #222;
  }
`;