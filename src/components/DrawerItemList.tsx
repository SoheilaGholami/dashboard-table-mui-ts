import { Dashboard, SupervisedUserCircle } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const navList = [
  { id: 1, linkName: "item 1", icon: <SupervisedUserCircle /> },
  { id: 2, linkName: "item 2", icon: <SupervisedUserCircle /> },
  { id: 3, linkName: "item 3", icon: <SupervisedUserCircle /> },
];

export const DrawerList = () => {
  return (
    <List>
      {navList.map((items) => (
        <ListItem key={items.id}>
          <ListItemText>{items.linkName}</ListItemText>
          <ListItemIcon>{items.icon}</ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};
