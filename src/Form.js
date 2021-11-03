import React, { useRef } from "react";

function Form(props) {
  const getSearchTerm = () => {
    // console.log(inputEl.current.value);
    props.searchKeyword(inputEl.current.value);
  };
  const inputEl = useRef("");

  return (
    <div className="searchForm">
      <div className="icon input">
        <input
          ref={inputEl}
          type="text"
          placeholder="Search Films"
          className="prompt"
          value={props.term}
          onChange={getSearchTerm}
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
}

export default Form;
