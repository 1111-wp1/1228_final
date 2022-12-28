import { useState } from "react";
import final_data_80 from "../../final_data_80";

const F2Page_80 = () => {
  const [persons, setPersons] = useState(final_data_80);
  console.log("persons", persons);

  const clearAllPersons = () => {
    setPersons([]);
  }
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
export default F2Page_80;
