import Paneer from "./paneer";
import UpperBun from "./upperBun";
import LowerBun from "./lowerBun";
import Cheese from "./cheese";
import AlooTikki from "./alooTikki";

export default function Burger({
  alooTikkiCount,
  paneerTikkiCount,
  cheeseCount
}) {
    const alooArr = Array.from({ length: alooTikkiCount });
    const paneerArr = Array.from({ length: paneerTikkiCount });
    const cheeseArr = Array.from({ length: cheeseCount });
  return (
    <>
      <UpperBun />
      <br />
      {alooArr.map((item, index) => {
        return (
          <>
            <AlooTikki />
            <br />
          </>
        );
      })}
      {paneerArr.map((item, index) => {
        return (
          <>
            <Paneer />
            <br />
          </>
        );
      })}

      {cheeseArr.map((item, index) => {
        return (
          <>
            <Cheese />
            <br />
          </>
        );
      })}
      <LowerBun />
    </>
  );
}
