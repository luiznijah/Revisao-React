import React, { useState } from "react";
import { turmas } from "../../assets/arrayTurmas";


export function Cadastro(props){
    const [nome, setNome] = useState("")
    const [turmaSelect, setTumaSelect] = useState("")
    const [idade ,setIdade] = useState("")

    const cadastraUsusario = () =>{
        const novoUsuario = {
            nome: nome,
            turma: turmaSelect,
            idade: idade
        }
        props.setUsuario(novoUsuario)
    }
    function enter(e){
        if(e.key === "Enter"){
            console.log("enviado")
            cadastraUsusario()
        }
    }
    return(
        <div>
            <h1>inputs conrolados</h1>
            <input 
            value={nome} 
            onChange={(e)=>setNome(e.target.value)}
            onKeyUp={(e)=> enter(e) }
            />
            <input 
            value={idade} 
            onChange={(e)=>setIdade(e.target.value)}
            type="number" 
            onKeyUp={(e)=> enter(e)}
            />

            <select 
            value={turmaSelect} 
            onChange={(e)=>setTumaSelect(e.target.value)}>
                <option value="" disabled >selecione uma turma</option>
                {
                    turmas.map((turma)=>{
                        return <option key={turma.turma} value={turma.turma}>{turma.turma}</option>
                    })
                }

            </select>
            <button onClick={cadastraUsusario} >cadastra usuario</button>
            
        </div>
    )
}