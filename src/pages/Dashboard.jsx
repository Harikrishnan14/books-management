import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Dashboard = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Autor</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Title ( Year )</h2>
                                <p className="mt-1">Genre</p>
                                <p className="mt-1 text-gray-900">Status</p>
                            </div>
                            <div className="flex flex-row gap-2 mt-3">
                                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition hover:cursor-pointer text-sm">
                                    <EditIcon />
                                </button>
                                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition hover:cursor-pointer text-sm">
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Dashboard