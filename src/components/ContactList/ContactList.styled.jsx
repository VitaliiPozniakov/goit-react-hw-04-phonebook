import styled from '@emotion/styled';

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 100wh;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const Span = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background: black;
  margin-left: 5px;
`;
export const Btn = styled.button`
padding: 2px 5px;
color: black;
background-color: #ffffffff;
font-weight: 500;
font-size: 10px;
line-height: 1.88;
letter-spacing: 0.06em;
border: none;
border-radius: 4px;
border: 1px solid rgba(238, 238, 238, 1);
box-shadow: 0px 4px 4px $button-shadow;
width: 80px;
height: 25px;
margin-left: auto;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
  background-color: #1e90ff;
  color: #ffffffff;
}
&:active {
  background-color: #1e90ff;
  color: red;
}
`;
