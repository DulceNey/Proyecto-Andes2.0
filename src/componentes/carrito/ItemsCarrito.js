import React from "react";

const ItemsCarrito = ({
  data,
  deleteFromCart,
  incrementarContador,
  decrementarContador,
}) => {
  const { id, nombre, precio, cantidad } = data;

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full gap-12 pl-3 md:justify-between text-stone-900 dark:text-slate-900 bg-naranja-palete dark:bg-slate-300 md:w-full">
        <div className="p-3 tracking-wide ">
          <h3 className="font-semibold text-md ">{nombre}</h3>
          <h3 className="pt-1 pb-3 mb-2 font-normal opacity-0 text-md md:opacity-100">
            ${precio}
          </h3>

          <div className="inline-flex">
            <button
              onClick={() => {
                incrementarContador(data);
              }}
              type="button"
              className="text-slate-900 bg-slate-400  focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-0 mr-2 mb-2"
            >
              +
            </button>

            <h4 className="pb-2 pl-2 pr-4">{cantidad}</h4>

            <button
              onClick={() => {
                decrementarContador(data);
              }}
              type="button"
              className="px-3 py-0 mb-2 mr-2 text-sm font-medium rounded-lg text-slate-900 bg-slate-400 focus:ring-gray-300"
            >
              -
            </button>
          </div>
        </div>

        <div className="pr-1 ml-0 mr-3  w-fit md:mr-3">
          <button
            onClick={() => deleteFromCart(id)}
            className="pl-5 mr-3 md:pl-8"
          >
            <svg
              classname="fixed "
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="598 -476.1 1792 1792"
              width="15"
              height="15"
            >
              <path d="M1302 260v576c0 9.2-3 17-9 23s-13.7 9-23 9h-64c-9.3 0-17-3-23-9s-9-13.8-9-23V260c0-9.4 3-17 9-23s13.7-9 23-9h64c9.3 0 17 3 23 9s9 13.6 9 23zm256 0v576c0 9.2-3 17-9 23s-13.7 9-23 9h-64c-9.3 0-17-3-23-9s-9-13.8-9-23V260c0-9.4 3-17 9-23s13.7-9 23-9h64c9.3 0 17 3 23 9s9 13.6 9 23zm256 0v576c0 9.2-3 17-9 23s-13.7 9-23 9h-64c-9.3 0-17-3-23-9s-9-13.8-9-23V260c0-9.4 3-17 9-23s13.7-9 23-9h64c9.3 0 17 3 23 9s9 13.6 9 23zm128 724V36h-896v948c0 14.6 2.3 28 7 40.4s9.5 21.3 14.5 27 8.5 8.5 10.5 8.5h832c2 0 5.5-3 10.5-8.6s9.8-14.7 14.5-27 7-25.8 7-40.5zM1270-92h448l-48-117c-4.7-6-10.3-9.8-17-11h-317c-6.7 1.2-12.3 5-17 11l-49 117zm928 32V4c0 9.2-3 17-9 23s-13.7 9-23 9h-96v948c0 55.2-15.7 103-47 143.4-31.3 40.3-69 60.5-113 60.5h-832c-44 0-81.7-19.6-113-58.6s-47-86.2-47-141.5V36h-96c-9.3 0-17-3-23-9s-9-13.8-9-23v-64c0-9.4 3-17 9-23s13.7-9 23-9h309l70-167c10-24.8 28-45.8 54-63 26-17.4 52.3-26 79-26h320c26.7 0 53 8.6 79 26 26 17.2 44 38.2 54 63l70 167h309c9.3 0 17 3 23 9s9 13.6 9 23z"></path>
            </svg>
          </button>
          <h4 className="pt-7 md:pr-6"> ${precio * cantidad}</h4>
        </div>        
      </div>
    </>
  );
};

export default ItemsCarrito;
