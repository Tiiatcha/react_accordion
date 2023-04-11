import "./App.css";
import Accordion from "./Components/accordion/Accordion.js";
function App() {
  let items = [
    {
      id: "item1",
      active: true,
      title: "item1",
      body: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quam.
          Praesentium eum, esse ipsam eaque neque eos earum recusandae adipisci
          veritatis consequatur doloribus, est tenetur doloremque dignissimos
          totam explicabo laudantium?
        </div>
      ),
    },
    {
      id: "item2",
      active: false,
      title: "item2",
      body: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quasi doloribus, ipsa doloremque dignissimos error unde provident
          cumque quas magni modi quaerat a ullam in reprehenderit quis sit
          veniam fugit?
        </div>
      ),
    },
    {
      id: "item3",
      active: false,
      title: "item3",
      body: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          voluptatum culpa id doloremque rerum quisquam dolores magnam adipisci
          nostrum nisi. Asperiores tenetur dicta cumque adipisci sunt libero
          recusandae ea quas!
        </div>
      ),
    },
  ];

  const pressme = () => {
    alert("ok");
  };

  const process_checkbox = (e) => {
    const chk_box = e.target;
    const attribute = chk_box.getAttribute("data-attribute");
    const accordion = document.querySelector(".accordion");
    const chk_box_value = chk_box.checked ? "true" : false;

    accordion.setAttribute(attribute, chk_box_value);
  };

  return (
    <div className="App">
      <div className="container w-3/6 mx-auto">
        <div className="input_container">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            data-attribute="data-toggle-open"
            onClick={(e) => process_checkbox(e)}
          />
          <label className="pl-2" htmlFor="toggle">
            Enable/Disable Item Toggle (Only one item can be open at a time but
            you can close the currently open item)
          </label>
        </div>
        <div className="input_container">
          <input
            type="checkbox"
            name="keep_open"
            id="keep_open"
            data-attribute="data-keep-open"
            onClick={(e) => process_checkbox(e)}
          />
          <label className="pl-2" htmlFor="keep_open">
            Enable/Disable keep items open (like toggle but items do not close
            when selecting another item)
          </label>
        </div>
      </div>
      <div className="container w-3/6 mx-auto">
        <Accordion
          className=""
          items={items}
          toggle="false"
          keep_open="false"
        />
      </div>
    </div>
  );
}

export default App;
