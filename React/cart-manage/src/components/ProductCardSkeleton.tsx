export const ProductCardSkeleton = () => {
    return <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between animate-pulse">
        <div>
            <div className="h-48 w-full bg-gray-200"></div>
            <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                <div className="flex items-center justify-between">
                    <div className="h-6 bg-gray-200 rounded w-20"></div>
                    <div className="h-5 bg-gray-200 rounded w-12"></div>
                </div>
            </div>
        </div>
        <div className="p-4 pt-0">
            <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
        </div>
    </div>
};