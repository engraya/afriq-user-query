import { ApiData } from "../types/types";
import { PiHandDepositFill } from "react-icons/pi";
import { PiHandWithdrawFill } from "react-icons/pi";
import { BsBank } from "react-icons/bs";
type DataModalProps = {
    onClose: () => void
    data: ApiData | null;
}

function DataModal({ onClose, data } : DataModalProps) {
  if (!data) return null;
  return (
    <>
<div className="fixed inset-0 z-50 flex items-center p-4 justify-center bg-[#9c9ea8] bg-opacity-50 transition duration-700 ease-in-out">
<div className="w-[600px] pb-8 bg-white rounded-xl flex-col justify-start items-start inline-flex">
    <div className="self-stretch px-4 pt-6 pb-3 bg-[#d2d4dd] rounded-tl-xl rounded-tr-xl border-b border-[#dcdfea] justify-center items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-[#202b3c] text-lg font-bold leading-[27px]">Details</div>
        <div onClick={onClose} className="w-[27.26px] cursor-pointer h-[27px] px-[2.27px] py-[2.25px] justify-center items-center flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45232 0.249023H16.2995C20.1498 0.249023 22.728 2.92652 22.728 6.90902V16.1014C22.728 20.0726 20.1498 22.749 16.2995 22.749H6.45232C2.60203 22.749 0.0124512 20.0726 0.0124512 16.1014V6.90902C0.0124512 2.92652 2.60203 0.249023 6.45232 0.249023ZM14.789 14.8743C15.1752 14.493 15.1752 13.8742 14.789 13.4917L12.7673 11.4892L14.789 9.48559C15.1752 9.10422 15.1752 8.47422 14.789 8.09172C14.4028 7.70809 13.7782 7.70809 13.3806 8.09172L11.3703 10.0931L9.34861 8.09172C8.95109 7.70809 8.32641 7.70809 7.94025 8.09172C7.55408 8.47422 7.55408 9.10422 7.94025 9.48559L9.96194 11.4892L7.94025 13.4805C7.55408 13.8742 7.55408 14.493 7.94025 14.8743C8.13333 15.0656 8.39456 15.168 8.64443 15.168C8.90566 15.168 9.15553 15.0656 9.34861 14.8743L11.3703 12.8842L13.392 14.8743C13.5851 15.078 13.8349 15.168 14.0848 15.168C14.346 15.168 14.5959 15.0656 14.789 14.8743Z" fill="#6E7180"/>
            </svg>
        </div>
    </div>
    <div className="self-stretch px-8 pt-8 flex-col justify-start items-start gap-6 flex">
    <div className="flex flex-col md:flex-row">
    <div className="md:pl-8">
      <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">About</h2>
      <div className="border-t border-gray-200 px-4 py-3 sm:p-0">
      <div className="sm:divide-y sm:divide-gray-200">
        <div className="sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Full Name
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {data?.user?.name}
          </dd>
        </div>
        <div className="sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Email address
          </dt>
          <dd className="text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {data?.user?.email}
          </dd>
        </div>
        <div className="sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Phone number
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {data?.user?.country_code} {data?.user?.phone}
          </dd>
        </div>
      </div>
    </div>

      <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Transaction Info</h2>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        <li className="flex items-center">
          <PiHandDepositFill className="ml-2 gap-2"/>
          <span className="text-md flex whitespace-nowrap font-bold text-gray-900">Total Deposit</span><span className="text-sm ml-3 font-semibold">${data?.totalDeposit}</span>
        </li>
        <li className="flex items-center gap-2">
        <BsBank className="ml-2"/>
          <span className="text-md flex whitespace-nowrap font-bold text-gray-900">Total Investments</span><span className="text-sm ml-3 font-semibold">${data?.totalInvestments}</span>
        </li>
        <li className="flex items-center gap-2">
        <PiHandWithdrawFill className="ml-2"/>
          <span className="text-md flex whitespace-nowrap font-bold text-gray-900">Total Withdrawals</span><span className="text-sm ml-3 font-semibold">${data?.totalWithdrawals}</span>
        </li>
      </ul>
    </div>
  </div>

    </div>
</div>
</div>
    </>

  )
}

export default DataModal