import { twMerge } from "tailwind-merge";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  startPage: number;
  endPage: number;
  middlePages: number[];
  totalPages: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  startPage,
  endPage,
  middlePages,
  totalPages,
}) => (
  <div className="flex justify-center mt-6 gap-2">
    <button
      key={1}
      className={twMerge(
        "px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 font-medium text-sm transition lg:hover:bg-primary-50 lg:hover:border-primary-600",
        page === 1 && "bg-primary-50 border-primary-600 text-primary-700"
      )}
      onClick={() => setPage(1)}
    >
      1
    </button>
    {startPage > 2 && <span className="px-2">...</span>}
    {middlePages.map((num) => (
      <button
        key={num}
        className={twMerge(
          "px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 font-medium text-sm transition lg:hover:bg-primary-50 lg:hover:border-primary-600",
          page === num && "bg-primary-50 border-primary-600 text-primary-700"
        )}
        onClick={() => setPage(num)}
      >
        {num}
      </button>
    ))}
    {endPage < totalPages - 1 && <span className="px-2">...</span>}
    <button
      key={totalPages}
      className={twMerge(
        "px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 font-medium text-sm transition lg:hover:bg-primary-50 lg:hover:border-primary-600",
        page === totalPages &&
          "bg-primary-50 border-primary-600 text-primary-700"
      )}
      onClick={() => setPage(totalPages)}
    >
      {totalPages}
    </button>
  </div>
);
