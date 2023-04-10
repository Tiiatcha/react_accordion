import React, { useEffect, useState } from "react";

const AccordionItem = (params) => {
  const { id, title, body, active } = params;
  const [maxHeight, setMaxHeight] = useState("1000");

  const accordion_set_section_height = (section) => {
    const section_body = section.querySelector(".accordion_body");
    const height = `${section_body.offsetHeight}px`;
    section.querySelector(".accordion_body_container").style.maxHeight = height;
  };
  const accordion_toggle_active = (clicked_section) => {
    const body_container = clicked_section.querySelector(
      ".accordion_body_container"
    );
    const item_switch = clicked_section.querySelector(".accordion_head_switch");
    if (clicked_section.classList.contains("active")) {
      item_switch.classList.remove("rotate-180");
      item_switch.classList.add("rotate-0");
      clicked_section.classList.remove("active");
      body_container.style.maxHeight = "0px";
    } else {
      accordion_set_section_height(clicked_section);
      item_switch.classList.add("rotate-0");
      item_switch.classList.remove("rotate-180");
      clicked_section.classList.add("active");
    }
  };

  const setActive = (e) => {
    const accordion = e.target.closest(".accordion");

    const accordion_items = accordion.querySelectorAll(".accordion_item");
    const this_item = e.target.closest(".accordion_item");

    const toggle = accordion.getAttribute("data-toggle-open") === "true";
    const keep_open = accordion.getAttribute("data-keep-open") === "true";
    if (keep_open) {
      accordion_toggle_active(this_item);
    } else {
      for (const item of accordion_items) {
        const item_switch = item.querySelector(".accordion_head_switch");
        if (item !== this_item) {
          item.querySelector(".accordion_body_container").style.maxHeight =
            "0px";
          item.classList.remove("active");
          item_switch.classList.remove("rotate-0");
          item_switch.classList.add("rotate-180");
        } else {
          if (toggle) {
            accordion_toggle_active(this_item);
          } else {
            accordion_set_section_height(this_item);
            item_switch.classList.add("rotate-0");
            item_switch.classList.remove("rotate-180");
            item.classList.add("active");
          }
        }
      }
    }
  };
  useEffect(() => {
    // Is there a better way to reference this component from within useEffect
    const thisItem = document.querySelector(`#item_${id}`);
    const thisBody = thisItem.querySelector(".accordion_body");
    const bodyHeight = thisBody.offsetHeight;
    setMaxHeight(bodyHeight);
  }, []);

  return (
    <div
      className={`accordion_item overflow-hidden  ${active ? "active" : ""}`}
      id={`item_${id}`}
    >
      <div
        className={`accordion_head flex flex-row p-2 border-b border-slate-200 cursor-pointer select-none`}
        onClick={(e) => setActive(e)}
      >
        <span className="accordion_head_title flex-1">{title}</span>
        <span
          className={`accordion_head_switch transition-all ${
            active ? "rotate-0" : "rotate-180"
          } transform-gpu`}
        >
          <span className="material-symbols-outlined">expand_more</span>
        </span>
      </div>
      <div
        className={`accordion_body_container transition-all ${
          active ? "border-b" : "border-b-0"
        } border-slate-200`}
        style={{ maxHeight: `${active ? maxHeight : "0"}px` }}
      >
        <div className="accordion_body p-2">{body}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
