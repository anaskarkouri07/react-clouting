import React from "react";
import "./directory.style.scss";
import SECTIONS_DATA from "./sections.data";
import MenuItem from "../itemDirectory/menu-item.comp";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      listDirectory: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <section className="directory">
        {this.state.listDirectory.map(({ id, ...directory }) => {
          return <MenuItem key={id} {...directory} />;
        })}
      </section>
    );
  }
}

export default Directory;
