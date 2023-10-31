import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../layout/layout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { LoginSchema } from "../components/FormikYup";
import { formValues } from "../store/Slice";
import {useDispatch, useSelector} from 'react-redux'



function Inflowoutflow() {
  const dispatch = useDispatch()

  const data = useSelector((state)=>{return state.formData})
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    name:"",
    income: 0,
    electricityBill: 0,
    mobileBill: 0
  }
  const {values, touched, handleSubmit, handleChange, errors} = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    
    

    onSubmit(values, action){
      if(values){
        dispatch(formValues(values))
        action.resetForm()
        handleClose()
      
      }
    }
  })

  return (
    <Layout>
      <div
        style={{
          margin: "2rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "end",
        }}
      >
        <Button variant="contained" onClick={handleClickOpen}>+</Button>
        
        <Dialog  open={open} onClose={handleClose}  >
          <DialogTitle >Add inflow</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter inflow details below:</DialogContentText>
            <TextField 
            style={{ borderColor: errors.name ? 'red' : '',
            width:"500px" }}
              autoFocus
              margin="dense"
              label="name"
              name="name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={values.name}
            />
            <div className="error">{touched && errors ? errors.name: null}</div>
            <TextField
              style={{ borderColor: errors.income ? 'red' : '' }}
              autoFocus
              margin="dense"
              label="Income"
              name="income"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={values.income}
            />
            <div className="error">{touched && errors ? errors.income: null}</div>
            <TextField
              style={{ borderColor: errors.electricityBill ? 'red' : '' }}
              autoFocus
              margin="dense"
              name="electricityBill"
              label="Electric Bill"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={values.electricityBill}
            />
            <div className="error">{touched && errors ? errors.electricityBill: null}</div>
            <TextField
              style={{ borderColor: errors.mobileBill ? 'red' : '' }}
              autoFocus
              margin="dense"
              name="mobileBill"
              label="Mobile Bill"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={values.mobileBill}
            />
            <div className="error">{touched && errors ? errors.mobileBill: null}</div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Income</TableCell>
              <TableCell align="center">Electric Bill</TableCell>
              <TableCell align="center">Mobile Bill</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((data,index) => (
              <TableRow
                key={`row-${index}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell align="center">{data.income}</TableCell>
                <TableCell align="center">{data.electricityBill}</TableCell>
                <TableCell align="center">{data.mobileBill}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export default Inflowoutflow;
