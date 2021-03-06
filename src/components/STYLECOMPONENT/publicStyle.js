import {color} from '../../style/index'
import styled from 'styled-components'

export const Background = styled.div`
overflow:hidden;
width:100%;
height:100vh;
background-color:${color}; 
overflow:hidden;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
a{
    position:absolute;
    color:white;
    margin-top:46%;
    font-size:1.3vmin;
}
`

export const FirstPageContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
    color:white;
    font-size:7vmin;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-shadow:0px 3px 3px rgb(20,20,20,0.2);   
    margin-bottom:0.7%;
}
h3{
    margin-top:0;
    text-transform:uppercase;
    color:white;
    font-size:1.5vmin;
}
form{
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    
}
`

export const StartButton = styled.button`
    border-radius:3px;
    border:none;
    width:100%;
    height:100%;
    background-color:white;
    color:${color};
    font-size:2vmin;
    font-weight:bold;
    box-shadow:0px 3px 6px rgb(20,20,20,0.2);
    cursor: pointer;
    outline:none;
`

export const ButtonContainer = styled.div`
margin-top:2%;
width:16%;
height:6.5%;
`

export const ButtonContainer2 = styled.div`
margin-top:0.9%;
width:18%;
height:6%;
`


export const NicknameInput = styled.input`
margin-top:0.8%;
width:15%;
padding:0 1.5%;
height:6%;
border:none;
outline:none;
background-color:white;
font-size:2vmin;
font-weight:bold;
color:gray;
box-shadow:0px 3px 6px rgb(20,20,20,0.2);
::placeholder{
    font-size:1.4vmin;
    font-weight:bold;
    color:#A7A7A7;
}
:focus{
    border:2px solid black;
}
`

export const LanguageSlide = styled.div`
width:10%;
height:4%;
background-color:blue;
margin-bottom:44%;
margin-right:89%;
position:absolute;
z-index:30;
background-color:${color};
display:flex;
border-radius:24px;
transition:1s;
button{
    width:140%;
    height:100%;
    border:none;
    outline:none;
    background-color:white;
    border-radius:24px;
    display:flex;
    justify-content:space-between;
    padding:0 9%;
    align-items:center;
    cursor: pointer;
    position:sticky;
    img{
        height:50%;
        padding:0px 10%;
        :hover{
            opacity:0.6;
        }
        :last-child{
            :hover{
                opacity:1;
            }
        }
    }
}
`

export const ChatingContainer = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
`

export const NickSubButton = styled.button`
width:100%;
height:100%;
background-color:rgb(50, 52, 58);
margin-top:0.9%;
border:none;
color:white;
font-size:1.8vmin;
font-weight:bold;
:hover{
    box-shadow:1px 3px 3px rgb(50, 52, 58, 0.4);
}
`

export const Loading = styled.div`
width:100%;
height:100%;
position:absolute;
background-color:rgb(0,0,0,0.7);
z-index:33;
display:flex;
justify-content:center;
align-items:center;
`

export const LoadingBar = styled.div`
width:4%;
height:1%;
color:black;
position:absolute;
display:flex;
justify-content:flex-start;
`

export const LoadingBarCont = styled.div`
width:25%;
height:40%;
background-color:skyblue;
border-radius:24px;
transition:0.05s;
opacity:0.7;
`

export const LoadingText = styled.div`
position:absolute;
color:white;
margin-top:6%;
`

export const SignUp = styled.div`
position:absolute;
width:40px;
height:40px;
right:0;
top:0;
background-color:white;
border-radius:80%;
display:flex;
justify-content:center;
align-items:center;
color:${color};
margin-top:40px;
margin-right:40px;
cursor: pointer;
i{
    font-size:1.8vmin;
    color:${color};
}
`