import { useState } from "react";
import Burger from "./burger";

export default function Container() {
  const [inputAlooValue, setAlooValue] = useState(0);
  const [inputPaneerValue, setPaneerValue] = useState(0);
  const [inputCheeseValue, setCheeseValue] = useState(0);
  const [burgerCount, setBurgerCount] = useState(0);

  const burgerArr = Array.from({ length: burgerCount });
  return (
    <>
      <div className="image"></div>
      <div className="inputs">
        <div className="slice aloo-tikki">
          <h2> Aloo Tikki </h2>
          <div>
            <button
              onClick={() => {
                if (inputAlooValue - 1 < 0) {
                  setAlooValue(0);
                } else setAlooValue(inputAlooValue - 1);
              }}
            >
              -
            </button>
            <input disabled type="number" value={inputAlooValue} />

            <button
              onClick={() => {
                setAlooValue(inputAlooValue + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="slice paneer">
          <h2> Paneer Tikki </h2>
          <div>
            <button
              onClick={() => {
                if (inputPaneerValue - 1 < 0) {
                  setPaneerValue(0);
                } else setPaneerValue(inputPaneerValue - 1);
              }}
            >
              -
            </button>
            <input disabled type="number" value={inputPaneerValue} />

            <button
              onClick={() => {
                setPaneerValue(inputPaneerValue + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="slice cheese">
          <h2> Cheese </h2>
          <div>
            <button
              onClick={() => {
                if (inputCheeseValue - 1 < 0) {
                  setCheeseValue(0);
                } else setCheeseValue(inputCheeseValue - 1);
              }}
            >
              -
            </button>
            <input disabled type="number" value={inputCheeseValue} />

            <button
              onClick={() => {
                setCheeseValue(inputCheeseValue + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <h3>
        Total Price : Rs.
        {burgerCount *
          (inputAlooValue * 50 + inputPaneerValue * 60 + inputCheeseValue * 10)}
      </h3>

      <div className="add-burger">
        <h3> Qty. Burger </h3>
        <div>
          <button
            onClick={() => {
              if (burgerCount - 1 < 0) {
                setBurgerCount(0);
              } else setBurgerCount(burgerCount - 1);
            }}
          >
            -
          </button>
          <input disabled type="number" value={burgerCount} />

          <button
            onClick={() => {
              setBurgerCount(burgerCount + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      {burgerArr.map(() => {
        return (
          <>
            <Burger
              alooTikkiCount={inputAlooValue}
              paneerTikkiCount={inputPaneerValue}
              cheeseCount={inputCheeseValue}
            />
            <br />
          </>
        );
      })}
    </>
  );
}
