import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";

const Pagination = React.forwardRef(({ className, ...props }, ref) => (
    <nav
        ref={ref}
        role="navigation"
        aria-label="pagination"
        className={`mx-auto flex w-full justify-center ${className}`}
        {...props}
    />
));
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={`flex flex-row items-center gap-1 ${className}`}
        {...props}
    />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
    <li ref={ref} className={className} {...props} />
));
PaginationItem.displayName = "PaginationItem";

const PaginationLink = React.forwardRef(
    ({ className, isActive, children, ...props }, ref) => (
        <a
            ref={ref}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium ${
                isActive
                    ? "bg-primary active-pagination-item text-primary-foreground"
                    : "text-gray-700 hover:bg-gray-100"
            } ${className}`}
            {...props}
        >
            {children}
        </a>
    )
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }) => (
    <PaginationLink
        aria-label="Go to previous page"
        className={`${className}`}
        {...props}
    >
        <HiChevronLeft className="h-5 w-5" />
    </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }) => (
    <PaginationLink
        aria-label="Go to next page"
        className={`${className}`}
        {...props}
    >
        <HiChevronRight className="h-5 w-5" />
    </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }) => (
    <span
        aria-hidden
        className={`flex h-9 w-9 items-center justify-center ${className}`}
        {...props}
    >
        <FiMoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
    </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
};
