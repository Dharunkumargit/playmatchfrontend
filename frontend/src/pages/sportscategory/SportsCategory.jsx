import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { GiGolfFlag } from "react-icons/gi";
import { sportscategorydata } from "../../components/Data";
import AddNewSport from "./AddNewSport";
import DeleteSports from "./DeleteSports";
import axios from "axios";
import { API } from "../../../const";

const SportsCategory = () => {
  const [sports, setSports] = useState([]);

  const fetchSports = async () => {
    try {
      const response = await axios.get(`${API}/sportmanagement/getsport`);
      setSports(response.data.data); 
    } catch (error) {
      console.error("Error fetching sports:", error);
    }
  };
  useEffect(() => {
    fetchSports();
  }, []);
  const Columns = [
    { label: "Sports Name", key: "sportname" },
    { label: "Slot Time Options", key: "slotduration" },

    { label: "Status", key: "status" },
  ];
  return (
    <div>
      <Table
        title="Sports Category Management"
        pagetitle="Sports Category Management"
        addButtonLabel="Add New Sport"
        addButtonIcon={<GiGolfFlag size={22} />}
        colomns={Columns}
        tabledata={sports}
        showviewButton={false}
        DeleteModal={DeleteSports}
        AddModal={AddNewSport}
        onDeleted={fetchSports}
      />
    </div>
  );
};

export default SportsCategory;
