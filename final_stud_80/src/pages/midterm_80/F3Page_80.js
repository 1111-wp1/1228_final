import { useState } from "react";
import final_data_80 from "../../final_data_80";
import { useGlobalContext_80 } from "../../Context_80";
const F3Page_80 = () => {
    const {persons, clearAllPersons} = useGlobalContext_80();
    return (
    <>
      <main class="persons">
        <section class="container">
          <h3>5 birthdays today</h3>
          {persons.map((person) => {
            const { img, name, age } = person;
            return (
              <article class="person">
                <img src={img} alt="Bertie Yates" />
                <div>
                  <h4>{name}</h4>
                  <p>{age}</p>
                </div>
              </article>
            );
          })}
          <button onClick={clearAllPersons}>clear all</button>
        </section>
      </main>
    </>
  );
};
export default F3Page_80;
