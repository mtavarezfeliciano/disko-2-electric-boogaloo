import React from "react";
import { getList } from "../setData";
import './SetList.css'

const SetList: React.FC = () => {
  const listItems = getList();
  return (
    <section id="Sets" className="setList-section">
      <div className="set-title">
        <h2>sets.</h2>
      </div>
      <div className="set-list-container container">
        <ul className="sets">
          {listItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SetList;
