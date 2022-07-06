import styled from "@emotion/styled";

export const Input = styled.input`
padding-top: 14px;
padding-bottom: 14px;
padding-left: 10px;
font-weight: 400;
font-size: 14px;
line-height: 1.88;
letter-spacing: 0.06em;
width: 200px;
height: 5px;
border: 1px solid rgba(33, 33, 33, 0.2);
border-radius: 4px;
transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);, outline 250ms cubic-bezier(0.4, 0, 0.2, 1);;

&:hover {
  cursor: pointer;
}

&:focus-visible {
  border: 1px solid #2196f3;
  outline: none;
}
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 15px;
`;

export const LabelText = styled.span`
color: black;
font-size: 14px;
font-weight: 700;
line-height: 2;
letter-spacing: 0.06em;
`;
