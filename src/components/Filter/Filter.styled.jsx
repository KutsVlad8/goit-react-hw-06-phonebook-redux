import Styled from '@emotion/styled';

export const Label = Styled.label`
margin-bottom: 5px;
margin-left: 30px;
color:#1f76c1;
`;

export const Input = Styled.input`
display: block;
width: 350px;
height: 30px;
margin-bottom: 10px;
margin-left: 30px;
border: none;
border-bottom: 2px solid #1f76c1;
color: #1f76c1;

&:focus{
    outline:none;
	border: 1px solid #1f76c1;
    border-radius:5px;
   
}

 &::placeholder {
    font: inherit;
    font-size: 16px;
    color:#1f76c1;
  }

`;
