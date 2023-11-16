import React from "react";

// import { Drawer, List, ListItem } from "@mui/material";

// interface SideDrawerProps {
//   open: boolean;
//   onClose: (value: boolean) => void; 
// }

// const Menu: React.FC<SideDrawerProps> = (props) => {
//   const links = [
//     { where: "featured", value: "To top" },
//     { where: "schedule", value: "Schedule" },
//     { where: "about", value: "About" },
//     { where: "pricing", value: "Pricing" },
//     { where: "location", value: "Location" }
//   ];

//   const renderItem = (item: {where: string, value: string}) => {
//     return (
//     <ListItem 
//       button 
//       onClick={() => alert(item.where)} 
//       key={item.where}
//       sx={{
//         justifyContent: 'center',             
//       }}
//     >
//       <div className='menuListItem'>
//         {item.value}
//       </div>
//     </ListItem>
//     );
//   };

//   return (
//     <Drawer
//       anchor='top'
//       open={props.open}
//       onClose={() => props.onClose(false)}
//     >
//       <List 
//       component='nav'
//       sx={{
//         backgroundColor: '#2c2c2c',
//         padding: '0',
//       }}
//       >
//         { links.map((item)=> renderItem(item)) },
//       </List>
//     </Drawer>
//   );
// };

// export default Menu;
