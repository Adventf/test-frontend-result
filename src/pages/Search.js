import React, { useEffect, useState } from "react";
import Select from "react-select";

function Search() {
  const [datas, setDatas] = useState([]);
  const [userSelect, setUserSelect] = useState("");
  const [isShow, setIsShow] = useState(false);

  const getBerries = async () => {
    const berries = await fetch("https://my-json-server.typicode.com/glendmaatita/userjsondemo/db");
    const value = await berries.json();
    const result = value.data;
    console.log(result);

    const hasil = result.map((nama) => {
      return { value: nama.name, label: nama.name };
    });
    setDatas(hasil.sort((a, b) => a.label.localeCompare(b.label)));
  };

  const handleSubmit = () => {
    setIsShow((state) => !state);
  };

  const handleChange = (value) => {
    setUserSelect(value);
  };

  useEffect(() => {
    getBerries();
  }, []);

  return (
    <div>
      <h1 className="title-search text-center">Search from List</h1>
      <Select placeholder="Search..." className="select" options={datas} onChange={(e) => handleChange(e.value)}></Select>

      <button
        onClick={() => {
          handleSubmit();
        }}
        disabled={!userSelect}
      >
        {isShow ? "Hide" : "Show Values"}
      </button>
      <h3 className="text-center">{isShow ? userSelect : ""}</h3>
    </div>
  );
}

export default Search;
