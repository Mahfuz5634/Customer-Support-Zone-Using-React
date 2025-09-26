import React, { use, useState } from "react";
import { toast } from "react-toastify";

const Cardsec = ({ fetchData, setcard, card }) => {
  const data = use(fetchData);

  const handlefunc = (ticket) => {
    if (!card.some((f) => f.id === ticket.id)) {
      setcard([...card, ticket]);
      toast("In-Progress");
    }
  };
  return (
    <>
      {
        <div className="bg-[#f5f5f5] pb-5">
          <div className="container mx-auto   ">
            <h1 className="text-2xl font-bold mb-[5px]">Cutomer Tickets</h1>
          </div>
          <div className="container mx-auto md:flex  ">
            <div className="md:w-9/12  md:grid grid-cols-2 gap-y-6 ">
              {data.map((data) => (
                <div
                  onClick={() => {
                    handlefunc(data);
                  }}
                  className="card md:w-[450px] h-auto  bg-white p-5"
                >
                  <div className="flex justify-between  gap-5">
                    <h1 className="text-[20px] font-semibold">{data.title}</h1>
                    <button>
                      <div
                        className={`p-2 md:w-[125px] h-[30px] rounded-2xl flex justify-center items-center gap-1 ${
                          card.some((f) => f.id === data.id)
                            ? "bg-amber-300"
                            : "bg-green-300"
                        }`}
                      >
                        <div
                          className={`h-[20px] w-[20px] rounded-full ${
                            card.some((f) => f.id === data.id)
                              ? "bg-amber-500"
                              : "bg-green-600"
                          }`}
                        ></div>
                        <h1
                          className={`${
                            card.some((f) => f.id === data.id)
                              ? "text-amber-700"
                              : "text-green-800"
                          }`}
                        >
                          {card.some((f) => f.id === data.id)
                            ? "In-Progress"
                            : "Open"}
                        </h1>
                      </div>
                    </button>
                  </div>
                  <p className="opacity-90">{data.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex justify-center items-center gap-4">
                      <h1 className="opacity-90">#{data.id}</h1>
                      <h1 className="text-rose-500 opacity-90">
                        {data.priority}
                      </h1>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <h1 className="opacity-90">{data.customer}</h1>
                      <h1 className="opacity-90">
                        <i class="fa-solid fa-calendar"></i>
                        {data.createdAt}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="3/12 w-[350px] p-2">
              <div>
                <h1 className="text-[20px] font-bold opacity-90">
                  Task Status
                </h1>
                <div>
                  {card.length ? (
                    card.map((data) => (
                      <div
                        key={data.id}
                        className="bg-white h-auto w-full flex justify-between items-center p-4 mb-2 rounded-2xl"
                      >
                        <div className="w-full">
                            <h1 className="text-[18px] mt-1">{data.title}</h1>
                        <button className="btn w-full bg-green-700 text-white">Complete</button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Select a ticket to add to Task Status</p>
                  )}
                </div>
              </div>

              <div>
                <h1 className="text-[20px] font-bold opacity-90">
                  Resolved Task
                </h1>
                <p>No resolved tasks yet.</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Cardsec;
