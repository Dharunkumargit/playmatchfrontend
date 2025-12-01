import React from 'react'
import Button from '../../components/Button'
import { TbFileExport } from 'react-icons/tb'
import Title from '../../components/Title'
import { BiFilterAlt } from 'react-icons/bi'
import ChartTitle from '../../components/ChartTitle'
import BarCharts from '../../components/BarCharts'
import AreaCharts from '../../components/AreaCharts'
import { HiArrowsUpDown } from 'react-icons/hi2'
import { performersData } from '../../components/Data'

const Tables = ({ headers, data, renderRow }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg  no-scrollbar">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-5 font-bold text-black border-b-5 border-b-light-orange text-center whitespace-nowrap"
              >
                <div className="flex items-center justify-center gap-1">
                  <span>{header}</span>
                  <HiArrowsUpDown className="rotate-0" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => renderRow(row, idx))}
        </tbody>
      </table>
    </div>
  );
};

const Reports = () => {
  return (
    <div className="mr-4">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 gap-3">
        <Title title="Dashboard" page_title="Dashboard Overview" />
        <div className="flex flex-wrap items-center gap-2">
          <Button
            button_icon={<TbFileExport size={20} />}
            button_name="Export"
            bgColor="bg-white"
            textColor="text-dark-brown"
          />
          <Button
            button_icon={<BiFilterAlt size={20} />}
            button_name="Filter"
            bgColor="bg-white"
            textColor="text-dark-brown"
          />
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {[
          { label: "Today Sales", value: "₹12,45,000" },
          { label: "This Week", value: "₹3,240" },
          { label: "This Month", value: "₹1,240" },
          { label: "Commission Earned", value: "₹3,20,000" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 px-5 py-5 rounded-md border border-gray-200 bg-white"
          >
            <p className="text-sm font-medium text-gray-600">{item.label}</p>
            <p className="text-lg md:text-xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        <div className="rounded-md bg-white p-4">
          <ChartTitle title="Sales Trend" count="₹12,45,000" growth="+12%" />
          <AreaCharts />
        </div>
        <div className="rounded-md bg-white p-4">
          <ChartTitle title="Sales By Turf/Class" count="3,240" growth="+8%" />
          <BarCharts />
        </div>
      </div>

     
      <div className="mb-10">
        <Tables
          headers={["S.no", "Date", "Category", "Type", "Amount", "Commission"]}
          data={performersData.reports}
          renderRow={(row, idx) => (
            <tr
              key={row.id}
              className="border-b-3 border-b-light-orange text-center text-dark-grey"
            >
              <td className="px-4 py-3.5">{idx + 1}</td>
              <td className="px-4 ">{row.date}</td>
              <td className="px-4 ">{row.category}</td>
              <td className="px-4 ">{row.type}</td>
              <td className="px-4 ">{row.amount}</td>
              <td className="px-4 py-3.5">{row.commission}</td>
            </tr>
          )}
        />
      </div>
    </div>
  );
};

export default Reports;