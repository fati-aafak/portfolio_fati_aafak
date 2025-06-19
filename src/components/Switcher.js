import { Fragment, useState } from "react";
import Head from "next/head";

const Switcher = () => {
  const colors = [
    { id: 1, name: "yellow" },
    { id: 2, name: "green" },
    { id: 3, name: "blue" },
    { id: 4, name: "red" },
    { id: 5, name: "purple" }
  ];

  const [color, setColor] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href={`css/skins/${color}.css`} />
      </Head>
      <div
        id="switcher"
        className={toggle ? "open" : "close"}
        style={{ display: "block" }}
      >
        <div className="content-switcher">
          <h4>COLOR SWITCHER</h4>
          <ul>
            {colors.map((colorItem) => (
              <li key={colorItem.id}>
                <a
                  href="#"
                  title={colorItem.name}
                  className="color"
                  onClick={() => setColor(colorItem.name)}
                >
                  <img
                    src={`assets/styleswitcher/${colorItem.name}.png`}
                    alt={colorItem.name}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div id="hideSwitcher" onClick={() => setToggle(false)}>
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className={`styleSecondColor ${toggle ? "close" : "open"}`}
        onClick={() => setToggle(true)}
      >
        <i className="fa fa-cog" />
      </div>
    </Fragment>
  );
};

export default Switcher;