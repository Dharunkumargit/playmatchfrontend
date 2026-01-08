import React, { useState } from "react";
import Button from "./Button";
import { Pencil, Trash2 } from "lucide-react";
import Title from "./Title";


const ViewPage = ({
  headings = [],
  data = [],
  mainFields = [],
  revenue = [],
  Title_title,
  active_title,
  viewpage_title,
  buttonname,
  showActions = false,

  
}) => {
  
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mr-5">
        <Title title={Title_title} active_title={active_title} />
        {showActions && (
          <div className="flex items-center gap-2">
            <Button
              button_icon={<Pencil />}
              button_name={buttonname || "Edit"}
            />
            <Button
              bgColor="bg-white"
              button_icon={<Trash2 />}
              button_name="Delete"
            />
          </div>
        )}
      </div>
      <div className="bg-white p-4 rounded-lg space-y-2 text-sm mt-3 mr-4">
        <p className="font-semibold text-center text-lg">{viewpage_title}</p>
        <div className="grid grid-cols-12 gap-1.5 items-start mt-3">
          {mainFields.map((field, idx) => (
            <React.Fragment key={idx}>
              <p className="col-span-5 font-medium">{field.label}</p>
              <div className="col-span-7">
                <span
                  className={`text-sm font-medium ${
                    field.value?.toLowerCase() === "active"
                      ? "text-green-600"
                      : "text-dark-grey"
                  }`}
                >
                  {field.value}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 my-5">
          {revenue.map((items, idx) => (
            <div
              key={idx}
              className="col-span-1 bg-light-orange rounded-md px-5 space-y-2 py-5"
            >
              <p className="text-dark-grey font-roboto-flex text-base">
                {items.label}
              </p>
              <p className="text-lg font-semibold">{items.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-auto no-scrollbar  pr-4 my-2">
        <table className="w-full ">
          <thead>
            <tr className="border-b-3 border-light-orange">
              <th className="text-left pl-5 font-semibold text-sm rounded-l-lg bg-white">
                S.no
              </th>
              {headings.map((heading, i) => (
                <th
                  key={i}
                  className={`p-5 text-sm font-semibold bg-white ${
                    i === headings.length - 1 ? "rounded-r-lg" : ""
                  }`}
                >
                  <span className="flex items-center text-sm justify-center gap-1 select-none">
                    {heading.label}
                    <span className="text-xs">↑↓</span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white rounded-lg border-b-2 border-light-orange text-sm text-gray-400 "
                >
                  <td className="p-3 text-center font-normal rounded-l-lg">
                    {index + 1}
                  </td>
                  {headings.map((heading, i) => {
                    const cellValue = row[heading.key];
                    const isPaid = String(cellValue).toLowerCase() === "paid";
                    const isCompleted =
                      String(cellValue).toLowerCase() === "completed";

                    return (
                      <td
                        key={i}
                        className={`p-3 text-center font-normal ${
                          i === headings.length - 1 ? "rounded-r-lg" : ""
                        } ${isPaid ? "text-green-600 font-semibold" : ""}${
                          isCompleted ? "text-green-600 font-semibold" : ""
                        }`}
                      >
                        {cellValue}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headings.length + 1}
                  className="p-4 text-center text-gray-400 font-normal"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
     
    
    </div>
  );
};

export default ViewPage;
