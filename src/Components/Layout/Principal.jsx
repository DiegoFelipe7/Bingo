import Bingo from "../../icons/Bingo.jpg";

const Principal = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <img src={Bingo} />
        </div>
        <div className="w-100">
          <h2>Reglas del juego</h2>
          <hr></hr>
          <p>Estas apunto de empezar a jugar:</p>
          <p>
            el bingo es un juego de azar que consiste en un bombo con un número
            determinado de bolas numeradas en su interior. Los jugadores juegan
            con cartones con números aleatorios escritos en ellos, dentro del
            rango correspondiente. Un locutor va sacando bolas del bombo,
            anunciando los números en voz alta. Si un jugador tiene dicho número
            en su cartón lo tacha, y el juego continúa así hasta que alguien
            consigue marcar todos los números de su cartón.
          </p>
        </div>
      </div>
    </>
  );
};

export default Principal;
