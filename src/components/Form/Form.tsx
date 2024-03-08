import { useFormik } from "formik";
import { MdOutlineUploadFile } from "react-icons/md";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-start gap-2 flex-col">
        <label htmlFor="name" className="text-blue-300">
          Full Name:
        </label>
        <input
          className="w-full border-gray-200 border rounded-lg"
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        )}
      </div>

      <div className="flex items-start gap-2 flex-col">
        <label htmlFor="phone" className="text-blue-300">
          Phone:
        </label>
        <input
          className="w-full border-gray-200 border rounded-lg"
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div style={{ color: "red" }}>{formik.errors.phone}</div>
        )}
      </div>

      <div className="flex items-start gap-2 flex-col mb-5">
        <label htmlFor="email" className="text-blue-300">
          E-mail:
        </label>
        <input
          className="w-full border-gray-200 border rounded-lg"
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
      </div>

      <div className="relative overflow-hidden cursor-pointer text-blue-300 rounded-lg p-2 min-h-[75px] border-gray-200 border text-center mb-7">
        <span className="flex justify-center items-center gap-3">
          <MdOutlineUploadFile /> Upload CV
        </span>
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer top-0 left-0 w-full"
        />
        <span>uploaded file: Hellen_Fox_CV.pdf</span>
      </div>
      <button
        type="submit"
        className="border bg-blue-300 rounded-xl px-3 py-2 text-sm"
      >
        Save Changes
      </button>
    </form>
  );
};

export default Form;
