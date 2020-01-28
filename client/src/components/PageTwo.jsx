import React from "react";

import { Field, reduxForm, getFormValues } from "redux-form";
import { Col, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import friendsPic from "../assets/friends.jpeg";
import internetPic from "../assets/internet.png";
import tvPic from "../assets/tv.jpg";

let PageTwo = ({ prevPage, nextPage, values }) => {
  //const { prevPage, nextPage } = props;
  const selectionStyle = {
    boxShadow: "0 0 5px 5px #2ecc71"
  };
  let selection;
  const friend = "friend";
  const internet = "internet";
  const tv = "tv";
  if (values) {
    selection = values.referral;
  }
  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>What brings you to CMCFlow</h2>
      <form className="row" onSubmit={nextPage}>
        <Col sm="4" md="4" lg="4">
          <label className="special-label">
            <Field
              className="card-input-element"
              name="referral"
              component="input"
              type="radio"
              value="friend"
            />
            <div
              className="card card-input"
              style={selection === friend ? selectionStyle : null}
            >
              <div className="card-body">
                <img
                  src={friendsPic}
                  alt="friends"
                  className="card-image-top"
                  style={{ width: "278px", height: "259px" }}
                />
                <div className="card-title">Friend</div>
              </div>
            </div>
          </label>
        </Col>
        <Col sm="4" md="4" lg="4">
          <label className="special-label">
            <Field
              className="card-input-element"
              name="referral"
              component="input"
              type="radio"
              value="internet"
            />
            <div
              className="card card-input"
              style={selection === internet ? selectionStyle : null}
            >
              <div className="card-body">
                <img
                  src={internetPic}
                  alt="internet"
                  className="card-image-top"
                  style={{ width: "278px", height: "259px" }}
                />
                <div className="card-title">Internet</div>
              </div>
            </div>
          </label>
        </Col>
        <Col sm="4" md="4" lg="4">
          <label className="special-label">
            <Field
              className="card-input-element"
              name="referral"
              component="input"
              type="radio"
              value="tv"
            />
            <div
              className="card card-input"
              style={selection === tv ? selectionStyle : null}
            >
              <div className="card-body">
                <img
                  src={tvPic}
                  className="card-image-top"
                  style={{ width: "278px", height: "259px" }}
                  alt="tv"
                />
                <div className="card-title">TV</div>
              </div>
            </div>
          </label>
        </Col>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%"
          }}
        >
          <Button
            color="info"
            type="button"
            className="previous"
            onClick={prevPage}
          >
            Previous
          </Button>
          <Button
            color="primary"
            type="button"
            className="next"
            onClick={nextPage}
          >
            Next
          </Button>
        </div>
      </form>
    </Container>
  );
};

PageTwo = connect(state => ({
  values: getFormValues("quiz")(state)
}))(PageTwo);

export default reduxForm({
  form: "quiz", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(PageTwo);
