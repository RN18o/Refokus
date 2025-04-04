import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const Card = ({ width, start, para,hover="none" }) => {
  return (
    <div className={`bg-zinc-700 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <MdArrowRightAlt />
        </div>
        <h1 className="text-3xl mt-5">Whatever heading</h1>
      </div>
      <div className="down w-full">
        {start === true ? (
          <>
            <h1 className="text-8xl font-medium tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-50">
              {" "}
              contact us
            </button>
          </>
        ) : null}
        {para && (
          <p className="text-sm mt-4 opacity-55">
            Explore what drives our teams.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
