import React from "react";
import { HeaderStyle } from "./headerStyle";
import Button from "./Button";

export function Header(props){
    return(
        <HeaderStyle>
            <Button/>
            <h1>Header do react {props.turma} </h1>
        </HeaderStyle>
    )
}