import React from "react";
import Accordion from "../Components/accordion/Accordion";

const AccordionPage = () => {
  const process_checkbox = (e) => {
    const chk_box = e.target;
    const attribute = chk_box.getAttribute("data-attribute");
    const accordion = document.querySelector("#demo_accordion");
    const chk_box_value = chk_box.checked ? "true" : false;

    accordion.setAttribute(attribute, chk_box_value);
  };
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
  const instructions = [
    {
      id: "instuctions_item_1",
      active: false,
      title: "About and Demo options",
      body: (
        <div>
          <p>This Accordion has been built with React and Tailwind CSS.</p>
          <p>
            There are 2 optional html attributes that are applied, they are
            "data-toggle-open" (Toggle) and "data-keep-open" (Keep Open)
          </p>
          <ul className="list-disc list-outside my-4 ml-4">
            <li>
              Both Attributes set to false: With this configuration, the
              Accordion behaves as many before it have, that is, clicking on the
              header of each item, opens that item and closses all other items.
              In other words only one item can be open at a time.
            </li>
            <li className="">
              Toggle: If this is set to true, then as with the above
              configuration, only one item can be open at any time however, this
              option allows you to toggle the active item between active (open)
              not active (closed)
            </li>
            <li>
              Keep Open: Like Toggle, this option allows you to toggle the items
              between active (open) and not active (closed). However, unlike the
              previous two configurations, you can open as many items as you
              wish.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "instuctions_item_2",
      active: false,
      title: "Try it for yourself",
      body: (
        <div>
          <div>
            <p>
              Try enabling and disabling the two attributes. checking these
              check boxes will toggle the relevant html attribute causing the
              configuration to take effect.
            </p>
            <ul className="list-inside mb-4">
              <li>
                <div className="input_container inline">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    data-attribute="data-toggle-open"
                    onClick={(e) => process_checkbox(e)}
                  />
                  <label className="pl-2" htmlFor="toggle">
                    Enable/Disable Toggle attribute
                  </label>
                </div>
              </li>
              <li>
                <div className="input_container inline">
                  <input
                    type="checkbox"
                    name="keep_open"
                    id="keep_open"
                    data-attribute="data-keep-open"
                    onClick={(e) => process_checkbox(e)}
                  />
                  <label className="pl-2" htmlFor="keep_open">
                    Enable/Disable Keep Open attribute
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const pressme = () => {
    alert("ok");
  };
  return (
    <div>
      <div className="container lg:w-4/6 md:w-5/6 sm:w-full max-w-5xl mx-auto mt-4">
        <Accordion items={instructions} toggle="true" keep_open="false" />
      </div>
      <div className="container lg:w-4/6 md:w-5/6 sm:w-full max-w-5xl mx-auto mt-4">
        <h2 className="text-lg font-medium">Demo Accordion</h2>
      </div>
      <div className="container lg:w-4/6 md:w-5/6 sm:w-full max-w-5xl mx-auto mt-4">
        <Accordion
          id="demo_accordion"
          className=""
          items={items}
          toggle="false"
          keep_open="false"
        />
      </div>
      <div className="container lg:w-4/6 md:w-5/6 sm:w-full max-w-5xl mx-auto mt-4">
        View code on{" "}
        <a
          className="underline decoration-solid text-blue-700"
          href="https://github.com/Tiiatcha/react_accordion/tree/feedback"
          targe="blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default AccordionPage;
