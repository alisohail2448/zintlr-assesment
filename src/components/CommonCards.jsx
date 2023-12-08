import React from "react";
import { BigCard } from "./BigCard";
import { SmallCard } from "./SmallCard";

const CommonCards = () => {
  return (
    <div className="flex justify-between w-full px-4">
      <BigCard heading="home" />
      <SmallCard icon="briefcase" color="red" heading="home" />
      <SmallCard icon="risk" color="red" heading="home" />
      <SmallCard icon="ticket" color="blue" heading="home" />
    </div>
  );
};

export default CommonCards;
