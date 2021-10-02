import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
} from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ListIcon from '@material-ui/icons/List';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GetAppIcon from '@material-ui/icons/GetApp';
import NoteAddIcon from '@material-ui/icons/NoteAdd';


const SideNavigationBar = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const list = () => (
    <div role="presentation">
      <List>
        {
          <>
            <ListItem button key={"menu-item-1"}>
              <ListItemIcon>{<NoteAddIcon />}</ListItemIcon>
              <ListItemText primary={"Add Records"} />
            </ListItem>
            <ListItem button key={"menu-item-2"}>
              <ListItemIcon>{<ListIcon />}</ListItemIcon>
              <ListItemText primary={"View Records"} />
            </ListItem>
            <ListItem button key={"menu-item-3"}>
              <ListItemIcon>{<NotificationsIcon />}</ListItemIcon>
              <ListItemText primary={"Notifications "} />
            </ListItem>
            <ListItem button key={"menu-item-4"}>
              <ListItemIcon>{<GetAppIcon />}</ListItemIcon>
              <ListItemText primary={"Export As File "} />
            </ListItem>
            <ListItem button key={"menu-item-5"}>
              <ListItemIcon>{<AssessmentIcon />}</ListItemIcon>
              <ListItemText primary={"Reports"} />
            </ListItem>
            <ListItem button key={"menu-item-6"}>
              <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </>
        }
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left-menu-bar"}>
        <Drawer anchor={"left"} open={isOpen} onClose={handleClose}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

const styles = (theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default withStyles(styles)(SideNavigationBar);
