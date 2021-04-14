import { Row } from "antd";
import React from "react";
import ChartWidget from "../../../../../components/shared-components/ChartWidget";
import DonutChartWidget from "../../../../../components/shared-components/DonutChartWidget";
import Flex from "../../../../../components/shared-components/Flex";
import { Col, Tabs, Card } from "antd";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const generalBalance = () => {
  //Barrasdeingresosversusegresos
  const uniqueVisitorsData = {
    series: [
      {
        name: "Ingresos",
        data: [950000, 750000, 820000, 500000],
      },
      {
        name: "Egresos",
        data: [680000, 560000, 900000, 450000],
      },
    ],
    categories: ["Enero", "Febrero", "Marzo", "Abril"],
  };

  const uniqueVisitorsData2 = {
    series: [
      {
        name: "Ingresos",
        data: [950000, 750000, 820000, 500000],
      },
    ],
    categories: ["Enero", "Febrero", "Marzo", "Abril"],
  };

  const sessionColor = ["#ffc107", "#3e82f7", "#04d182"];
  const sessionData = [3500000, 5700000, 2400000];
  const sessionLabels = ["SG&A", "COGS", "Planilla"];
  const jointSessionData = () => {
    let arr = [];
    for (let i = 0; i < sessionData.length; i++) {
      const data = sessionData[i];
      const label = sessionLabels[i];
      const color = sessionColor[i];
      arr = [
        ...arr,
        {
          data: data,
          label: label,
          color: color,
        },
      ];
    }
    return arr;
  };

  return (
    <div>
      <row>
        <div className="ant-row">
          <div className="ant-col ant-col-24">
            <Tabs onChange={callback} type="card">
              <TabPane tab="Enero 2021" key="1">
              <div className="ant-col ant-col-4">
                <Card
                  title="Balance Enero"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Ingresos: 950000</p>
                  <p>COGS: 250000</p>
                  <p>Planilla: 300000</p>
                  <p>SG&A: 130000</p>
                  <p>CAPEX: 0</p>
                  <h4>Ganancia Bruta: 270000</h4>
                </Card>
                </div>
              </TabPane>
              <TabPane tab="Febrero 2021" key="2">
              <Card
                  title="Balance Febrero"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Ingresos: 750000</p>
                  <p>COGS: 130000</p>
                  <p>Planilla: 300000</p>
                  <p>SG&A: 130000</p>
                  <p>CAPEX: 0</p>
                  <h4>Ganancia Bruta: 190000</h4>
                </Card>
                
              </TabPane>
              <TabPane tab="Marzo 2021" key="3">
              <Card
                  title="Balance Marzo"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Ingresos: 820000</p>
                  <p>COGS: 130000</p>
                  <p>Planilla: 300000</p>
                  <p>SG&A: 130000</p>
                  <p>CAPEX: 340000</p>
                  <h4>Ganancia Bruta: -80000</h4>
                </Card>
              </TabPane>
              <TabPane tab="Abril 2021" key="4">
              <Card
                  title="Balance Abril"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Ingresos: 500000</p>
                  <p>COGS: 0</p>
                  <p>Planilla: 300000</p>
                  <p>SG&A: 150000</p>
                  <p>CAPEX: 0</p>
                  <h4>Ganancia Bruta: 50000</h4>
                </Card>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </row>

      <row>
        <ChartWidget
          series={uniqueVisitorsData.series}
          xAxis={uniqueVisitorsData.categories}
          title="Ingresos Versus Egresos"
          height={410}
          type="bar"
          customOptions={{
            colors: ["#04d182", "#ff6b72"],
          }}
        />
      </row>
      <row>
        <DonutChartWidget
          series={sessionData}
          labels={sessionLabels}
          title="Egresos"
          customOptions={{ colors: sessionColor }}
          extra={
            <Row justify="center">
              <Col xs={20} sm={20} md={20} lg={24}>
                <div className="mt-4 mx-auto" style={{ maxWidth: 200 }}>
                  {jointSessionData().map((elm) => (
                    <Flex
                      alignItems="center"
                      justifyContent="between"
                      className="mb-3"
                      key={elm.label}
                    >
                      <div>
                        <span className="text-gray-light">{elm.label}</span>
                      </div>
                      <span className="font-weight-bold text-dark">
                        {elm.data}
                      </span>
                    </Flex>
                  ))}
                </div>
              </Col>
            </Row>
          }
        />
      </row>

      <row>
        <ChartWidget
          series={uniqueVisitorsData2.series}
          xAxis={uniqueVisitorsData2.categories}
          title="Ingresos"
          height={410}
          type="bar"
          customOptions={{
            colors: ["#04d182"],
          }}
        />
      </row>
    </div>
  );
};

export default generalBalance;
