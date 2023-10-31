import React from "react";
import { Chart } from "react-google-charts";
import Layout from "../layout/layout";
import { useSelector } from "react-redux";

const columns = ["name", "income", "electricityBill", "mobileBill"];
const options = {};

export function Dashboard() {
  const datatest = useSelector((state) => {
    return state.formData;
  });
  let dataGraph = [];
  
  if (datatest?.length > 0) {
    dataGraph.push(columns);
    datatest.forEach((item) => {
      let currentItem = [];
      columns.forEach((column) => {
        if (currentItem.length < 2) {
          currentItem.push(`${item[column]}`);
        } else {
          currentItem.push(item[column]);
        }
      });
      dataGraph.push(currentItem);
    });
  }

  return (
    <>
      <Layout>
        {dataGraph?.length > 0 && (
          <div className="mt-4">
          <Chart
            chartType="Sankey"
            data={dataGraph}
            options={options}
            style={{
              height: "20rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          </div>
        )}
      </Layout>
    </>
  );
}
