import * as Yup from "yup";

export const LoginSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Please Enter Valid Name")
    .required("You must enter the alphabet"),

  income: Yup.string()
    .min(1)
    .matches(/^[1-9]+[0-9]*[^"-999" - "-1"]*/, "The number must be greater than 0!")
    .required("You must enter the number"),
    
  electricityBill: Yup.string()
  .min(1)
  .matches(/^[1-9]+[0-9]*[^"-999" - "-1"]*/, "The number must be greater than 0!")
  .required("You must enter the number"),

  mobileBill: Yup.string()
    .min(1)
    .matches(/^[1-9]+[0-9]*[^"-999" - "-1"]*/, "The number must be greater than 0!")
    .required("ERROR: The number is required!")
});
