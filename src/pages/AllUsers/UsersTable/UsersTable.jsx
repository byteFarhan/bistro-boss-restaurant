import TRowB from "./TRowB/TRowB";

const UsersTable = ({ items }) => {
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              scope="col"
              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center gap-x-3">
                <span>#</span>
              </div>
            </th>

            <th
              scope="col"
              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              Name
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              EMAIL
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              ROLE
            </th>

            <th scope="col" className="relative py-3.5 px-4">
              {/* <span className="sr-only">ACTION</span> */}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          {items?.map((item, idx) => (
            <TRowB key={item._id} rowData={item} index={idx} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
