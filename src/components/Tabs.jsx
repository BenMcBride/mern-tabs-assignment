import React, { useState } from "react";

const Tabs = (props) => {
  const [tab1, setTab1] = useState("");
  const [tab2, setTab2] = useState("");
  const [tab3, setTab3] = useState("");
  
  const [selectedTab, setSelectedTab] = useState("");

  const onClickHandler = (value) => {
    setSelectedTab(value);
    if (props.onClickTab) {
      props.onClickTab(value);
    }
  };

  let currentTabContent = tab1
  switch (selectedTab) {
    case props.tab[0]:
      currentTabContent = tab1
      break;
    case props.tab[1]:
      currentTabContent = tab2
      break;
    case props.tab[2]:
      currentTabContent = tab3
      break;
    default:
      currentTabContent = tab1
  }

  return (
    <div>
      <div>
        {props.tab.map((item, index) => (
          <button key={index} onClick={() => onClickHandler(item)} className={selectedTab === item ? "current-tab" : ""}>
          {item}
          </button>
        ))}
      </div>
      <div>
        <textarea value={currentTabContent} onChange={(e) => {
          switch (selectedTab) {
            case props.tab[0]:
                setTab1(e.target.value)
                break
              case props.tab[1]:
                setTab2(e.target.value)
                break
              case props.tab[2]:
                setTab3(e.target.value)
                break
              default:
                break
          }
        }}></textarea>
      </div>
    </div>
  );
};
export default Tabs;