import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Category,
  Receipt, Flag, Mail, Feedback, Message
} from "@material-ui/icons";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <Category className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <Receipt className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Flag className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Flag className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
