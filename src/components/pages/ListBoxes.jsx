import React, { useContext } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { AppContext } from "../../context/AppContext";

const ListBoxes = () => {
  const { boxes } = useContext(AppContext);

  return (
    <Paper sx={{ maxWidth: 600, margin: "auto", mt: 5, padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        List of Shipping Boxes
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Receiver</TableCell>
            <TableCell>Weight (kg)</TableCell>
            <TableCell>Box Color</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Cost (INR)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {boxes.map((box, index) => (
            <TableRow key={index}>
              <TableCell>{box.receiver}</TableCell>
              <TableCell>{box.weight}</TableCell>
              <TableCell>
                <div style={{ backgroundColor: box.color, width: 20, height: 20 }} />
              </TableCell>
              <TableCell>{box.country}</TableCell>
              <TableCell>₹{box.cost.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ListBoxes;
