import { useState } from "react";
import { Pagina } from "../../components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const estilo = "bg-blue-300 p-10 gap-4 m-5 rounded-full text-4xl"
const estilo2 = "bg-purple-400 p-5 gap-4 m-5 rounded-full text-2x"

export function Contador() {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    function Incrementar(e) {

        if (e.target.id == "some1") {
            setNum(num + 1);
        }
        else if (e.target.id == "diminua1") {
            setNum(num - 1);
        }
    
        else if (e.target.id == "some5") {
            setNum2(num2 + 5);
        }
    
        else if (e.target.id == "diminua5") {
            setNum2(num2 - 5);
        }
    }
    
    


    return (
        <Pagina titulo="Contador" subtitulo="Contador">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <span>
                    <button className={estilo}id="some1" onClick={Incrementar}><IconPlus/></button>
   
                    <span className="text-7xl">{num}</span>

                    <button className={estilo} id="diminua1" onClick={Incrementar}><IconMinus/></button>
                </span>

                <span>
                    <button className={estilo2} id="some5" onClick={Incrementar}><IconPlus/></button>
   
                    <span className="text-3xl">{num2}</span>

                    <button className={estilo2} id="diminua5" onClick={Incrementar}><IconMinus/></button>
                </span>
            </div>
        </Pagina>
    )
}