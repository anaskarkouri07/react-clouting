import React from "react";
import "./directory.style.scss";
import MenuItem from "../itemDirectory/menu-item.comp";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      listDirectory: [
        {
          id: 1,
          imageUrl: "https://source.unsplash.com/900x900/?jeans",
          title: "Jeans",
        },
        {
          id: 2,
          imageUrl: "https://source.unsplash.com/900x900/?jacket",
          title: "jacket",
        },
        {
          id: 3,
          imageUrl: "https://source.unsplash.com/900x900/?t-shirt",
          title: "t-shirt",
        },
        {
          id: 4,
          imageUrl: "https://source.unsplash.com/900x900/?fashion,man",
          title: "Man",
          size: "large",
        },
        {
          id: 5,
          imageUrl: "https://source.unsplash.com/900x900/?fashion-women",
          title: "women",
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <section className="directory">
        {this.state.listDirectory.map(({ id, imageUrl, title, size }) => {
          return (
            <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
          );
        })}
      </section>
    );
  }
}

export default Directory;
