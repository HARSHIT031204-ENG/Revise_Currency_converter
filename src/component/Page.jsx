import React from "react";
import { useId, useState } from "react";
import useFetch from "../Hooks/useFetch";
const page = ({ data, from, setFrom, to, setTo, fromAmt, setFromAmt, toAmt, setToAmt }) => {
  const [list, setList] = useState({});


  
  const {data, loading} = useFetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json");
  setList(data);
    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center font-display">
            {" "}
            <div className="w-full max-w-md bg-[#1e293b] rounded-2xl shadow-2xl p-8">
                {/* Header */}{" "}
                <div className="text-center">
                    {" "}
                    <h2 className="text-2xl font-bold text-white">
                        Currency Converter
                    </h2>{" "}
                    <p className="mt-1 text-sm text-slate-400">
                        Up-to-date exchange rates
                    </p>{" "}
                </div>
                <div className="mt-8 space-y-6">
                    {/* From Section */}
                    <div>
                        <label
                            htmlFor="from-currency"
                            className="block text-sm font-medium text-slate-300 mb-1"
                        >
                            From
                        </label>
                        <div className="flex rounded-lg border border-slate-700 bg-[#0f172a] overflow-hidden">
                            <select
                                id="from-currency"
                                className="bg-[#0f172a] px-4 py-3 text-white font-semibold focus:outline-none w-1/3"
                                
                            >
                               
                            </select>
                            <input
                                type="number"
                                placeholder="1,000"
                                className="w-2/3 bg-[#0f172a] px-4 py-3 text-right text-white font-semibold focus:outline-none"
                               />
                        </div>
                    </div>

                    {/* Swap Button */}
                    <div className="flex justify-center">
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0f172a] text-slate-400 border border-slate-600 hover:bg-slate-800 transition">
                            <span className="material-symbols-outlined">
                                swap_vert
                            </span>
                        </button>
                    </div>

                    {/* To Section */}
                    <div>
                        <label
                            htmlFor="to-currency"
                            className="block text-sm font-medium text-slate-300 mb-1"
                        >
                            To
                        </label>
                        <div className="flex rounded-lg border border-slate-700 bg-[#0f172a] overflow-hidden">
                            <select
                                id="to-currency"
                                className="bg-[#0f172a] px-4 py-3 text-white font-semibold focus:outline-none w-1/3"
                               
                            >
                                {/* {optionelem()} */}
                            </select>
                            <input
                                type="number"
                                placeholder="926.56"
                                className="w-2/3 bg-[#0f172a] px-4 py-3 text-right text-white font-semibold focus:outline-none"
                                
                            />
                        </div>
                    </div>

                    {/* Exchange Rate Info */}
                    <div className="text-center">
                        <p className="text-lg font-semibold text-white">
                            1 USD = 0.92656 EUR
                        </p>
                        <p className="text-sm text-slate-400">
                            Last updated: 2 mins ago
                        </p>
                    </div>

                    {/* Convert Button */}
                    <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
                    >
                        Convert
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;
