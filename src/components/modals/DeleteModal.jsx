import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';

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

const DeleteModal = ({ open, handleClose, selectedId, fetchData }) => {

    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true)
        try {
            const response = await axios.delete(`https://crudcrud.com/api/29c302eb1cfd4d188bf74bb0a3434ffc/books/${selectedId}`)
            if (response.status === 200) {
                toast.success('Successfully Deleted', {
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
                handleClose();
                fetchData();
            }
        } catch (error) {
            console.error(error)
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
            setLoading(false)
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h3>Do you want to delete?</h3>
                <div className='flex align-center justify-center w-full gap-6'>
                    <button disabled={loading} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition hover:cursor-pointer" onClick={handleClose}>Cancel</button>
                    <button disabled={loading} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition hover:cursor-pointer" onClick={() => handleDelete()}>Confirm</button>
                </div>
            </Box>
        </Modal>
    )
}

export default DeleteModal