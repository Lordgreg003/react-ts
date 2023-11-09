import React from "react";

const Button1 = () => {
  const [hidden, sethidden] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-xl">Locations</h1>
      <button onClick={() => sethidden(!hidden)} className="flex flex-row">
        <input
          className="border py-2 "
          type="text"
          placeholder="select location "
        />
      </button>
      <div className={`${hidden && "invisible"}`}>
        <select className="w-36  space-y-3" name="" id="" multiple>
          <option className="font-bold py-2 px-3 bg-[#f7f4f4]" value="">
            LOCATIONS
          </option>
          <option value="">Anambra</option>
          <option value="">Enugu</option>
          <option value="">Akwaibom</option>
          <option value="">Abuja</option>
          <option value="">Imo</option>
          <option value="">Crossriver</option>
          <option value="">Lagos</option>
          <option value="">Abia</option>
          <option value="">Ondo</option>
        </select>
      </div>
    </div>
  );
};

export default Button1;
