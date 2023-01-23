import React from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import { setFilter } from "../slices/DataSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Input.Search
      placeholder="Buscar..."
      style={{ marginBottom: 15 }}
      onChange={handleSearch}
      className=' dark:bg-slate-100  rounded-md '
    />
  );
};

export default Searcher;
