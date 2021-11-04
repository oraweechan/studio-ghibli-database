import React, { useRef } from "react";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { ClearAllRounded } from "@mui/icons-material";

function Form(props) {
  const getSearchTerm = () => {
    // console.log(inputEl.current.value);
    props.searchKeyword(inputEl.current.value);
  };
  const inputEl = useRef("");

  return (
    <>
      <Col xs={12} sm={12} md={12}>
        <div className="banner">
          <Image
            src="https://res.cloudinary.com/orawee/image/upload/v1635965664/StudioGhibli/Screen_Shot_2021-11-03_at_11.52.20_AM_ycxuua.png"
            fluid
          />
        </div>
        <div className="searchForm">
          <input
            
            ref={inputEl}
            type="text"
            placeholder="Search Films"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <button
            onClick={() => {
              props.handleClearClick({ getSearchTerm });
            }}
          >
            <ClearAllRounded></ClearAllRounded>
          </button>
        </div>
      </Col>
    </>
  );
}

export default Form;
