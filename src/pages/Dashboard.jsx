import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModal from '../components/modals/DeleteModal';
import ManageBookModal from '../components/modals/ManageBookModal';
import axios from 'axios';
import { CircularProgress } from "@mui/material";
import Pagination from '@mui/material/Pagination';

const Dashboard = () => {

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = booksData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(booksData.length / itemsPerPage);

    const handleOpenDeleteModal = (id) => {
        setSelectedId(id);
        setOpenDeleteModal(true);
    }

    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    const handleOpenModal = (type, item) => {
        setSelectedType(type);
        if (type === "edit") {
            setSelectedItem(item)
        }
        setOpenModal(true);
    }

    const handleCloseModal = () => setOpenModal(false);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get("https://crudcrud.com/api/08ad02d63b9c4eb78e6b428f2934fb95/books")
            if (response.data) {
                setBooksData(response.data)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage])

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 md:py-10 py-10 mx-auto">
                    <div className="flex justify-center md:justify-end mb-12 gap-4">
                        <input
                            type="text"
                            placeholder="Search books..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-transparent max-w-xs"
                        />
                        <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 hover:cursor-pointer rounded text-white" onClick={() => handleOpenModal("add")}>Add New
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {loading ? (
                            <div className="flex justify-center items-center h-70 md:h-100 w-full">
                                <CircularProgress />
                            </div>
                        ) : !booksData || booksData?.length === 0 ? (
                            <div className="flex items-center justify-center w-full h-[50vh] md:h-[60vh]">
                                <span className="text-gray-700 text-xl title-font font-medium">No Data!!!</span>
                            </div>
                        ) : (
                            currentItems?.filter((book) =>
                                book.title.toLowerCase().includes(searchTerm.toLowerCase())
                            )?.map((book) => (
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={book._id}>
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg" />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{book?.author}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{book?.title} ( {book?.published_at} )</h2>
                                        <p className="mt-1">{book?.genre}</p>
                                        <p className="mt-1 text-gray-900">
                                            {book?.status}
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-2 mt-3">
                                        <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition hover:cursor-pointer text-sm" onClick={() => handleOpenModal("edit", book)}>
                                            <EditIcon />
                                        </button>
                                        <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition hover:cursor-pointer text-sm" onClick={() => handleOpenDeleteModal(book?._id)}>
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    {!loading && booksData.length > 10 && (
                        <div className="flex justify-center mt-10">
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={handlePageChange}
                                color="primary"
                                shape="rounded"
                            />
                        </div>
                    )}
                </div>
            </section>

            <DeleteModal open={openDeleteModal} handleClose={handleCloseDeleteModal} selectedId={selectedId} fetchData={fetchData} />
            <ManageBookModal open={openModal} handleClose={handleCloseModal} selectedItem={selectedItem} selectedType={selectedType} fetchData={fetchData} setSelectedItem={setSelectedItem} />

        </>
    )
}

export default Dashboard