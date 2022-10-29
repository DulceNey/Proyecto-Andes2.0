import Boton from "../Boton";
import Imagen2 from "../Imagen2";

const Oferta = () => {
  return (
    <div className=" w-full bg-slate-100 dark:bg-slate-900 border-4 h-[auto] border-amber-900 dark:border-gray-400">
      <Imagen2 />
      <h1 className="text-black dark:text-neutral-300 text-4xl mx-7 text-center">
        {" "}
        Sorprenda a alguien <br /> Con esta oferta especial
      </h1>
      <h2 className="text-black dark:text-neutral-300 mt-3 mx-7 text-center">
        {" "}
        Aproveche esta oportunidad única <br />
        para viajar con una persona.
        <br /> Disfruten de las maravillas <br /> de la Patagonia juntos.
      </h2>
      <div className="mx-7 text-center">
        <Boton />
      </div>
    </div>
  );
};
export default Oferta;
