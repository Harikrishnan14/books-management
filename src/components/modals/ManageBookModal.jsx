import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useFormik } from 'formik';
import { Bounce, toast } from 'react-toastify';
import * as Yup from 'yup';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
};

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    genre: Yup.string().required('Genre is required'),
    published_at: Yup.number()
        .required('Published year is required')
        .min(1000, 'Enter a valid year')
        .max(new Date().getFullYear(), 'Year cannot be in the future'),
    status: Yup.string().required('Status is required'),
});

const ManageBookModal = ({ open, handleClose, selectedItem, selectedType, fetchData, setSelectedItem }) => {

    const formik = useFormik({
        initialValues: {
            title: selectedItem?.title || '',
            author: selectedItem?.author || '',
            genre: selectedItem?.genre || '',
            published_at: selectedItem?.published_at || '',
            status: selectedItem?.status || 'Available',
        },
        validationSchema,
        enableReinitialize: true,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                if (selectedType === "edit") {
                    const response = await axios.put(`https://crudcrud.com/api/08ad02d63b9c4eb78e6b428f2934fb95/books/${selectedItem._id}`, values)
                    if (response.status === 200) {
                        toast.success('Successfully Updated', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                    }
                } else {
                    const response = await axios.post("https://crudcrud.com/api/08ad02d63b9c4eb78e6b428f2934fb95/books", values)
                    if (response.status === 200) {
                        toast.success('Successfully Added', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                    }
                }
            } catch (error) {
                console.error(error);
                toast.error('Oops, something went wrong!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            } finally {
                handleClose();
                setTimeout(() => {
                    resetForm();
                }, 100);
                setSelectedItem(null)
                fetchData();
                setSubmitting(false);
            }
        },
    });

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={style}>
                    <h3 className="text-lg font-semibold">{selectedType === "edit" ? "Edit" : "Add"} Book</h3>

                    <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-2">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            className="border p-2 rounded"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                        {formik.touched.title && formik.errors.title && (
                            <p className="text-red-500 text-sm">{formik.errors.title}</p>
                        )}

                        <input
                            type="text"
                            name="author"
                            placeholder="Author"
                            className="border p-2 rounded"
                            onChange={formik.handleChange}
                            value={formik.values.author}
                        />
                        {formik.touched.author && formik.errors.author && (
                            <p className="text-red-500 text-sm">{formik.errors.author}</p>
                        )}

                        <input
                            type="text"
                            name="genre"
                            placeholder="Genre"
                            className="border p-2 rounded"
                            onChange={formik.handleChange}
                            value={formik.values.genre}
                        />
                        {formik.touched.genre && formik.errors.genre && (
                            <p className="text-red-500 text-sm">{formik.errors.genre}</p>
                        )}

                        <input
                            type="number"
                            name="published_at"
                            placeholder="Published Year"
                            className="border p-2 rounded"
                            onChange={formik.handleChange}
                            value={formik.values.published_at}
                        />
                        {formik.touched.published_at && formik.errors.published_at && (
                            <p className="text-red-500 text-sm">{formik.errors.published_at}</p>
                        )}

                        <select
                            name="status"
                            className="border p-2 rounded"
                            onChange={formik.handleChange}
                            value={formik.values.status}
                        >
                            <option value="Available">Available</option>
                            <option value="Issued">Issued</option>
                        </select>
                        {formik.touched.status && formik.errors.status && (
                            <p className="text-red-500 text-sm">{formik.errors.status}</p>
                        )}

                        <div className="flex justify-between w-full mt-4">
                            <button
                                type="button"
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition hover:cursor-pointer"
                                onClick={handleClose}
                                disabled={formik.isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={formik.isSubmitting}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition hover:cursor-pointer"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </Box>
            </Box>
        </Modal>
    )
}

export default ManageBookModal