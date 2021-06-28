import * as Yup from "yup";  
  
export const UserValidationSchema = Yup.object().shape({  
  
firstName: Yup.string()  
.required('First Name is required'),  
lastName: Yup.string()  
.required('Last Name is required'),  
emailId: Yup.string()  
.email('Email is invalid')  
.required('Email is required'),  
campus: Yup.string()  
.required('Campus Name is required'),  
// confirmPassword: Yup.string()  
// .oneOf([Yup.ref('password'), null], 'Passwords must match')  
// .required('Confirm Password is required'),  
mobileNo: Yup.string()  
.required('Mobile Numer is required'),  
address: Yup.string()  
.required('Address is required'),  
// pinCode: Yup.string()  
// .min(6, 'Password must be at 6 digits')  
// .max(6,'Password must be at 6 digits')  
// .required('Pin Code is required'),  
 studentId: Yup.string()  
 .required('Student Id is required')  
}); 