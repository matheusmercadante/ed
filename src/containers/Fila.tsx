import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "../components/CloseButton";
import { NextButton } from "../components/PagingButtons";
import { add, clean, remove } from "../utils/array-utils";

export const Fila = (): JSX.Element => {
  const [items, setItems] = useState([0]);

  return (
    <div className="section">
      <div className="section-title">
        <h1>Fila <NextButton next="/pilha" /></h1>
      </div>

      <div className="container">
        <ul>
          <AnimatePresence initial={false}>
            {items.map(id => (
              <motion.li
                key={id}
                positionTransition
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              >
                <CloseButton close={id} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <button className="clean" onClick={() => setItems(clean())}>
          /
        </button>

        <button className="remove" onClick={() => setItems(remove(items))}>
          -
        </button>

        <button className="add" onClick={() => setItems(add(items))}>
          +
        </button>
      </div>
    </div>
  );
};
