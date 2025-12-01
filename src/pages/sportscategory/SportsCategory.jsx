import React from "react";
import Table from "../../components/Table";
import { GiGolfFlag } from "react-icons/gi";
import { sportscategorydata } from "../../components/Data";
import AddNewSport from "./AddNewSport";
import DeleteSports from "./DeleteSports";

const SportsCategory = () => {
  const Columns = [
    { label: "Sports Name", key: "sportsname" },
    { label: "Slot Time Options", key: "slottimeoptions" },

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
        tabledata={sportscategorydata}
        showviewButton={false}
        DeleteModal={DeleteSports}
        AddModal={AddNewSport}
      />
    </div>
  );
};

export default SportsCategory;
