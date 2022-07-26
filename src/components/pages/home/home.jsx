import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../chart/chart";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetLg from "../../widgetLg/widgetLg";
import WidgetSm from "../../widgetSm/widgetSm";

export default function home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
