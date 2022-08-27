import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import "../styles/style.css";

const API_URL = "https://my-json-server.typicode.com/glendmaatita/userjsondemo/db";

function Participant() {
  const [participant, setParticipant] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setParticipant(result.data);
      });
  }, []);

  return (
    <>
      <h1 className="title text-center">List of Participants</h1>
      <div>
        {participant.length > 0 ? (
          <div className="container">
            {participant.map((part) => (
              <Detail key={part.id} {...part} />
            ))}
          </div>
        ) : (
          <h2>Sorry, No participant Found</h2>
        )}
      </div>
    </>
  );
}

export default Participant;
