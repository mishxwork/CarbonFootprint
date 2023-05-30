import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";


const SideBar = () => {
  return (
    <div>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>
            Dashboard <Link to="/dashboard" />
          </MenuItem>
          <SubMenu title="Pages">
            <MenuItem>
              Cloud Computing (CPU) <Link to="/dashboard" />
            </MenuItem>
            <MenuItem>
              Cloud Storage <Link to="/storage" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideBar;
