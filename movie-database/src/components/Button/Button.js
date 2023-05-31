import styled, {css} from "styled-components";

// const colors ={
//     primary: "#4361ee",
//     secondary: "#b5179e",
// }

const Button = styled.button`
padding: 0.8rem 2rem;
border: none;
border-radius: 10px;
color: #fff;
background-color: #4361ee;
cursor: pointer;

/* props variant */
background-color: ${function (props){
    if (props.variant) {
        // return colors[props.variant];
        return props.theme.colors[props.variant];
    }  else {
        // return "#4361ee";
        // return colors["primary"];
        return props.theme.colors["primary"];
    }
}};

/* props full */
${function (props) {
    return (
        props.full && css`
        display: block;
        /* width: 100%; */
        width: 280px;
        `
    );
}}

/* props sm */
${function (props) {
    return (
        props.sm && css`
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        `
    );
}}

/* props md */
${function (props) {
    return (
        props.md && css`
         font-size: 1rem; 
         padding: 0.5rem 1rem;
        `
    );
}}

/* props lg */
${function (props) {
    return (
        props.lg && css`
        font-size: 1.3rem;
        padding: 0.5rem 1rem;
        `
    );
}}

`;

export default Button;