import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = (params) => {
  const { id, items, className, toggle, keep_open } = params;
  return (
    <div
      data-toggle-open={toggle}
      data-keep-open={keep_open}
      className={`accordion overflow-hidden border rounded-md border-slate-200 ${className}`}
      id={id}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={item.id}
          title={item.title}
          body={item.body}
          active={item.active}
        />
      ))}
    </div>
  );
};

export default Accordion;
