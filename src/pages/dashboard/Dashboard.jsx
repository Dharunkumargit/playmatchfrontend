import React from 'react'
import Title from '../../components/Title'
import Button from '../../components/Button'
import { TbFileExport } from 'react-icons/tb'
import { BiFilterAlt } from 'react-icons/bi'
import ChartTitle from '../../components/ChartTitle'
import BarCharts from '../../components/BarCharts'
import AreaCharts from '../../components/AreaCharts'
import { performersData } from '../../components/Data'
import { HiArrowsUpDown } from 'react-icons/hi2'



const Table = ({ headers, data, renderRow }) => {
  return (
    <div className="overflow-x-auto rounded-lg no-scrollbar">
    <table className="w-full border-collapse bg-white   overflow-hidden text-sm mb-3 mt-2 rounded-lg ">
      <thead className="">
        <tr>
          {headers.map((header, idx) => (
            <th key={idx} className="px-4 py-4  font-bold text-black border-b-4 border-b-light-orange text-center ">
              <div className="flex items-center justify-center gap-2">
                <span>{header}</span>
                <HiArrowsUpDown className=" rotate-0" />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody >
        {data.map((row, idx) => renderRow(row, idx))}
      </tbody>
    </table>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div >
      
      <div className="flex flex-col sm:flex-row justify-between  pb-4">
        <Title title="Dashboard" page_title="Dashboard Overview" />
        <div className="flex flex-wrap gap-2 sm:gap-3 mr-4">
          <Button
            button_icon={<TbFileExport size={22} />}
            button_name="Export"
            bgColor="bg-white"
            textColor="text-dark-brown"
          />
          <Button
            button_icon={<BiFilterAlt size={22} />}
            button_name="Filter"
            bgColor="bg-white"
            textColor="text-dark-brown"
          />
        </div>
      </div>

      
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-3  mb-4 mr-4">
        {[
          { label: "Total Users", value: "1,234" },
          { label: "Total Turfs", value: "$56,789" },
          { label: "Total Bookings", value: "12" },
          { label: "Revenue", value: "3,420" },
        ].map((item, i) => (
          <div
            key={i}
            className="col-span-1 flex flex-col gap-2 pl-6 rounded-md border-gray-300 border bg-white py-4"
          >
            <p className="text-sm font-medium">{item.label}</p>
            <p className="text-xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

     
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mr-3 mb-3">
        <div className="rounded-md bg-white col-span-1 p-5">
          <ChartTitle title="Booking Volume" count="₹12,45,000" growth="+12%" />
          <BarCharts />
        </div>
        <div className="rounded-md bg-white col-span-1 p-5">
          <ChartTitle title="Wallet Recharge Distribution" count="₹3,20,000" growth="+12%" />
          <AreaCharts />
        </div>
        <div>
        <h2 className="text-xl font-bold mt-4">Turf Performers</h2>
        <Table
          headers={["S.no", "Turf Name", "Location", "Bookings", "Revenue"]}
          data={performersData.turf}
          renderRow={(row, idx) => (
            <tr key={row.id} className="border-b-3 border-b-light-orange text-center text-dark-grey ">
              <td className="px-4 py-3.5 ">{idx + 1}</td>
              <td className="px-4 ">{row.name}</td>
              <td className="px-4 ">{row.location}</td>
              <td className="px-4 ">{row.bookings}</td>
              <td className="px-4 py-3.5">{row.revenue}</td>
            </tr>
          )}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold mt-4 ">Coaches Performers</h2>
        <Table
          headers={["S.no", "Coach Name", "Classes Taken", "Rating", "Revenue"]}
          data={performersData.coaches}
          renderRow={(row, idx) => (
            <tr key={row.id} className="border-b-3 border-b-light-orange text-center text-dark-grey ">
              <td className="px-4 py-3.5 ">{idx + 1}</td>
              <td className="px-4 ">{row.name}</td>
              <td className="px-4 ">{row.classes}</td>
              <td className="px-4 ">{row.rating}</td>
              <td className="px-4 py-3.5">{row.revenue}</td>
            </tr>
          )}
        />
      </div>
      </div>

      
      <div className='mr-4 mb-10'>
        <h2 className="text-xl font-bold  ">Classes Performers</h2>
        <Table
          headers={["S.no", "Class Name", "Turf", "Registrations", "Revenue"]}
          data={performersData.classes}
          renderRow={(row, idx) => (
            <tr key={row.id} className="border-b-3 border-b-light-orange text-center text-dark-grey">
              <td className="px-4 py-3.5">{idx + 1}</td>
              <td className="px-4 ">{row.name}</td>
              <td className="px-4 ">{row.turf}</td>
              <td className="px-4 ">{row.registrations}</td>
              <td className="px-4 ">{row.revenue}</td>
            </tr>
          )}
        />
      </div>
    </div>
  )
}

export default Dashboard