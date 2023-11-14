import React from "react";

const Button1 = () => {
  const [hidden, sethidden] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-xl">Locations</h1>
      <button onClick={() => sethidden(!hidden)} className="flex flex-row">
        <input
          className="border py-2 outline-none  rounded-lg text-center"
          type="text"
          placeholder="Select Location "
        />
      </button>
      <div className={`${hidden && "invisible"}`}>
        <div className="text-left">
          <h1 className="font-bold text-xl">STATES</h1>
          <ul>
            <li>Enugu</li>
            <li>Abia</li>
            <li>Enugu</li>
            <li>Anambra</li>
            <li>Ondo</li>
            <li>Ebony</li>
            <li>Imo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Button1;
