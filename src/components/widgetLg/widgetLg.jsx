import "./widgetLg.css";
import smit from "../images/smit.jpg";

export default function widgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgBtn " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src={smit} alt="" />
            <span className="widgetLgName">Temitope Isaiah</span>
          </td>
          <td className="widgetLgDate">19 July 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src={smit} alt="" />
            <span className="widgetLgName">Temitope Isaiah</span>
          </td>
          <td className="widgetLgDate">19 July 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src={smit} alt="" />
            <span className="widgetLgName">Temitope Isaiah</span>
          </td>
          <td className="widgetLgDate">19 July 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src={smit} alt="" />
            <span className="widgetLgName">Temitope Isaiah</span>
          </td>
          <td className="widgetLgDate">19 July 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
