import { Pencil } from "lucide-react";
import React from "react";

export default function DataTable({ data }: { data: DashboardData }) {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Data Table</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all data. You can add new data entry, edit or
              delete existing ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new data entry
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Visitors
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Sales
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        New Users
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Returning Users
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Product Sales
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Product Revenue
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.visitors.map((item, index) => (
                      <tr key={`visitor_${index}`}>
                        <td className=" px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {item.date}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {item.count}
                          </span>
                        </td>
                        <td className=" px-4 py-4 text-sm text-gray-700">
                          {data.sales[index].amount}
                        </td>
                        <td className=" px-4 py-4 text-sm text-gray-700">
                          {data.userActivity[index].newUsers}
                        </td>
                        <td className=" px-4 py-4 text-sm text-gray-700">
                          {data.userActivity[index].returningUsers}
                        </td>
                        <td className=" px-4 py-4 text-sm text-gray-700">
                          {data.products[index]?.name}
                        </td>
                        <td className=" px-4 py-4 text-sm text-gray-700">
                          {data.products[index]?.sales}
                        </td>
                        <td className=" px-4 py-4 text-sm text-gray-700">
                          {data.products[index]?.revenue}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href="#" className="text-gray-700 flex gap-1">
                            <Pencil className="w-4 h-5" /> Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
