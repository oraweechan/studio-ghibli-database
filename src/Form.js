import React, { useRef } from "react";

function Form(props) {
  const getSearchTerm = () => {
    // console.log(inputEl.current.value);
    props.searchKeyword(inputEl.current.value);
  };
  const inputEl = useRef("");

  return (
      <>
    <div className="banner">
        <img src="https://res.cloudinary.com/orawee/image/upload/v1635965664/StudioGhibli/Screen_Shot_2021-11-03_at_11.52.20_AM_ycxuua.png"
        alt=""/>

    </div>
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
    </>
  );
}

export default Form;
