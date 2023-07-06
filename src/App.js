import React from "react";

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1>Un lecteur de text</h1>
        <p>
          Vous entrer un texte dans ce champs puis vous cliquez sur lire pour
          ecouter
        </p>
        <textarea placeholder="Ecrivez un texte..." />
        <div className="button-and-voice">
          <button o>Lire</button>
        </div>
      </div>
    </div>
  );
}

export default App;
