import React, { Component } from "react";
import "./style.css";
import { glassesArr } from "./dataGlasses";

export default class RenderGlasses extends Component {
  state = {
    idGlass: "v1",
    nameGlass: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
  };
  handleChangeType = (value, name, desc) => {
    this.setState({ idGlass: value, nameGlass: name, desc: desc });
  };
  renderListGlasses = () => {
    return glassesArr.map(({ id, name, url, desc }, index) => {
      return (
        <div key={index} className="col-2 mb-2">
          <img
            className="w-100 h-100"
            src={url}
            onClick={() => {
              let idGlass = "v" + `${id}`;
              this.handleChangeType(idGlass, name, desc);
            }}
            alt="Glasses"
          />
        </div>
      );
    });
  };
  render() {
    let { idGlass } = this.state;
    let { nameGlass } = this.state;
    let { desc } = this.state;
    return (
      <div>
        <div id="glasses_content">
          <h2 className="text-center bg-dark py-4 opacity-75 text-white">
            TRY GLASS APP ONLINE
          </h2>
          <div className="container">
            <div className="row justify-content-center pt-5">
              <div className="col-6">
                <div className="position-relative w-75">
                  <img
                    className="w-100"
                    src="./glassesImage/model.jpg"
                    alt="Models"
                  />
                  <img
                    className="position-absolute"
                    src={`./glassesImage/${idGlass}.png`}
                    alt="Glasses"
                  />
                  <div className="position-absolute">
                    <h5 className="text-primary fs-4">{`${nameGlass}`}</h5>
                    <p className="text-white">{`${desc}`}</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="w-75">
                  <img
                    className="w-100"
                    src="./glassesImage/model.jpg"
                    alt="Models"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bg-white p-4">
              <div className="row gx-2">{this.renderListGlasses()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
