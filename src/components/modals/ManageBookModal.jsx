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

const ManageBookModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={style}>
                    <h3 className="text-lg font-semibold">Add/Edit Book</h3>

                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="genre"
                        placeholder="Genre"
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="number"
                        name="year"
                        placeholder="Published Year"
                        className="border p-2 rounded w-full"
                    />

                    <select
                        name="status"
                        className="border p-2 rounded w-full"
                    >
                        <option value="Available">Available</option>
                        <option value="Issued">Issued</option>
                    </select>

                    <div className="flex justify-between w-full mt-4">
                        <button
                            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition hover:cursor-pointer"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition hover:cursor-pointer"
                        >
                            Confirm
                        </button>
                    </div>
                </Box>
            </Box>
        </Modal>
    )
}

export default ManageBookModal