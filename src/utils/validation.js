import * as Yup from "yup"

export const signUpSchema=Yup.object({
    name:Yup.string()
        .required("Name is required.")
        .matches(/^[a-zA-Z_]*$/,"No special characters allowed.")
        .min(2,"Name must be between 2-16 characters.")
        .max(16,"Name must be between 2-16 characters."),
    email:Yup.string()
        .required("Email is required.")
        .email("Invalid email address."),
    status:Yup.string()
        .max(64,"Status must be between 64 characters."),
    password:Yup.string()
        .required("Password is required.")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,"Password must contain 1 uppercase, 1 lowercase, 1 number and 1 special character.")
        .min(6,"Password must be atleast 6 characters long."),
});