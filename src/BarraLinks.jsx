import LogoBlanco from "./img/logoBlanco.png"

export default function BarraLinks() {
    return (
        <nav className="flex items-center justify-center bg-white h-28 " >
          <img src={LogoBlanco} className="w-24" />
          <p className="text-gray-500 p-5">Pasteles a Domicilio</p>            
          <p className="text-gray-500 p-5">Productos</p>            
          <p className="text-gray-500 p-5">Pasteles para Eventos</p>
          <div className="flex divide-x-2 divide-gray-700">
            <p className="pr-4 basis-1">Contacto</p>
            <p className="pl-4">Carrito</p>
          </div>           
        </nav>        
    );
  }