import {
  IconAddressBook,
  IconBrandReact,
  IconHome,
  IconInfoCircle,
  IconMessageDown,
  IconMessageUp,
  IconSquareRoundedNumber1,
  IconSquareRoundedNumber2,
  IconSquareRoundedNumber3,
  IconSquareRoundedNumber4,
  IconSquareRoundedNumber5,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export function Menu() {
  const getEstilo = (props) => {
    let estilo = `
      flex items-center gap-4
      px-3 py-3 w-full
      text-sm text-custom-white 
      hover:bg-zinc-900 `;
    let ativo = "border-r-4 border-solid border-slate-800 ";

    // let final
    // if (props.isActive){
    //     final = estilo + ativo
    // } else {
    //     final = estilo
    // }
    let final = props.isActive ? estilo + ativo : estilo;

    return final;
  };

  return (
    <aside className="flex flex-col gap-5 bg-red-800 min-w-72">
      <header
        className={`
          flex justify-center items-center gap-2
          bg-red-900 text-custom-white 
          px-1 py-5 h-16          
          text-2xl font-black
        `}
      >
        <IconBrandReact />
        <span className="font-bold">React Rotas</span>
      </header>

      <nav
        className={`
          flex flex-col justify-start items-start gap-2    
               
        `}
      >
        <NavLink to="home" className={getEstilo}>
          <IconHome />
          Home
        </NavLink>
        <NavLink to="contato" className={getEstilo}>
          <IconAddressBook />
          Contato
        </NavLink>
        <NavLink to="sobre" className={getEstilo}>
          <IconInfoCircle />
          Sobre
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Estado</span>

        <NavLink to="SemEstado" className={getEstilo}>
          <IconSquareRoundedNumber1 />
          Sem Estado
        </NavLink>

        <NavLink to="ComEstado" className={getEstilo}>
          <IconSquareRoundedNumber2 />
          Com Estado
        </NavLink>
        
        <NavLink to="CampoTexto" className={getEstilo}>
          <IconSquareRoundedNumber3 />
          Campo Texto
        </NavLink>
        
        <NavLink to="Contador" className={getEstilo}>
          <IconSquareRoundedNumber4 />
          Contador
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Comunicação</span>
        
        <NavLink to="ComunicacaoDireta" className={getEstilo}>
          <IconMessageDown />
          ComunicacaoDireta
        </NavLink>
        
        <NavLink to="ComunicacaoIndireta" className={getEstilo}>
          <IconMessageUp />
          ComunicacaoIndireta
        </NavLink>

        <NavLink to="Tradutor" className={getEstilo}>
          <IconSquareRoundedNumber5 />
          Tradutor
        </NavLink>


        <span className="pt-4 pl-3 text-xs text-zinc-500">Hooks Básicos</span>
        
        <NavLink to="UseRef" className={getEstilo}>
          <IconBrandReact />
          Use Ref
        </NavLink>
        
        <NavLink to="UseEffect" className={getEstilo}>
          <IconBrandReact />
          Use Effect
        </NavLink>
      </nav>
    </aside>
  );
}
