import React, { useState, useMemo } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../Pagination/Pagination";
import { CgClose } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";

// Default items per page if not specified
const DEFAULT_ITEMS_PER_PAGE = 9;

export default function PaginatedGrid({
    data,
    itemsPerPage = DEFAULT_ITEMS_PER_PAGE,
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Calculate total pages based on data length and items per page
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const getPageNumbers = useMemo(() => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, "ellipsis", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(
                    1,
                    "ellipsis",
                    totalPages - 2,
                    totalPages - 1,
                    totalPages
                );
            } else {
                pages.push(
                    1,
                    "ellipsis",
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    "ellipsis",
                    totalPages
                );
            }
        }
        return pages;
    }, [currentPage, totalPages]);

    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer"
                        onClick={() => openModal(item)} // Open modal on item click
                    >
                        <img
                            src={item.imageUrl}
                            alt={`Item ${item.id}`}
                            className="w-full h-[250px] object-cover"
                            loading="lazy" // Enables native lazy loading
                        />
                        <p className="p-4 b capitalize body-large w-600 font-playfair absolute top-0 left-0">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                if (currentPage > 1)
                                    handlePageChange(currentPage - 1);
                            }}
                            className={
                                currentPage === 1
                                    ? "pointer-events-none opacity-50"
                                    : ""
                            }
                        />
                    </PaginationItem>

                    {getPageNumbers.map((page, index) => (
                        <PaginationItem key={index}>
                            {page === "ellipsis" ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(page);
                                    }}
                                    isActive={currentPage === page}
                                >
                                    {page}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                if (currentPage < totalPages)
                                    handlePageChange(currentPage + 1);
                            }}
                            className={
                                currentPage === totalPages
                                    ? "pointer-events-none opacity-50"
                                    : ""
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-85 backdrop-blur-sm flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-black p-1  rounded-lg shadow-lg max-w-4xl max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <IoCloseCircle
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white bg-black h-12 w-12 rounded-full"
                            size={30}
                        />

                        <img
                            src={selectedItem.imageUrl}
                            alt={`Item ${selectedItem.id}`}
                            className="w-full h-full md:h-[70vh] max-h-[70vh] object-contain md:object-cover rounded-md"
                        />
                        <p className="px-6 py-4 mt-2 capitalize body-large w-600 font-playfair">
                            {selectedItem.text}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
