import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

const DeleteModal = ({ open, handleClose }) => {
    const handleDelete = () => {

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
                    <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition hover:cursor-pointer" onClick={handleClose}>Cancel</button>
                    <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition hover:cursor-pointer" onClick={() => handleDelete()}>Confirm</button>
                </div>
            </Box>
        </Modal>
    )
}

export default DeleteModal