import styled from '@emotion/styled';

export const PossibleAnswerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cec4f0;
  border: none;
  border-radius: 10px;
  margin: 10px;
  padding: 0.7em 0;
  min-width: 300px;
  font-size: 1em;
  cursor: pointer;
  color: #4940b6;
  font-weight: 600;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #665cde;
  border: none;
  border-radius: 10px;
  padding: 0.7em 1.3em;
  min-width: 60px;
  color: #fff;
  font-size: 1em;
  margin-top: 2em;
  cursor: pointer;
  font-weight: 600;
  &[disabled] {
    background-color: #8e7c7cb3;
  }
`;

export const StartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #665cde;
  border: 3px solid #fff;
  border-radius: 10px;
  margin: 20px;
  padding: 0.7em 0.5em;
  min-width: 100px;
  color: #fff;
  font-size: 1.2em;
  font-weight: 600;
  cursor: pointer;
`;
