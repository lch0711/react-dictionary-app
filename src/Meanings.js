import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong> {definition.definition}
                <br />
                <strong>Example:</strong> <em>{definition.example}</em>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
