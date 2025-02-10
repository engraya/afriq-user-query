import { useState } from "react";
import DataModal from "./DataModal";
import TopLayout from "./TopLayout";
import { useMutation } from "react-query";
import { apiClient } from "../api/axios"; 
import { toast } from 'react-toastify';
import { ApiResponse } from "../types/types";
import LoadingSvg from "./LoadingSvg";
import { ApiData } from "../types/types";
import HeroText from "./HeroText";
function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<ApiData | null>(null); // Store fetched data

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

    // Email validation regex (simple version, you can enhance it further)
    const isValidEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };

  // Mutation for fetching user data using the provided email
  const mutation = useMutation<ApiResponse, Error>(
    // @ts-ignore
    async (data: typeof formData) => {
      const response = await apiClient.get<ApiResponse>(
        `/user/get-user?email=${data.email}`
      );
      return response.data; // Return the data for further use
    },
    {
      onSuccess: (data) => {
        toast.success("Data fetched successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          });
        setData(data?.data);
        setOpenModal(true); // Open the modal
        setFormData({ email: "" }); 
        console.log("User Data", data);
      },
      onError: (error: any) => {
        const errorMessage =
          error.response?.data?.message || "Failed to fetch data. Please try again.";
        toast.error(errorMessage || "Something went wrong!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          });
      },
      onSettled: () => {
        // Optionally clear the input when mutation is settled (either success or error)
        // setFormData({ email: "" });
      }
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = formData;

    // Validate form data
    if (!email || !isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Validate form data
    if (!email) {
      toast.error("Email is required.");
      return;
    }
    // Trigger the mutation to fetch data using the email
    mutation.mutate({ email });
  };

  const isEmailEmpty = !formData.email.trim(); 
  const isEmailValid = isValidEmail(formData.email); 

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 h-full w-full">
        <TopLayout />
    
        <div className="flex flex-col min-h-screen items-center justify-center">
        <HeroText/>
          <div className="max-w-full flex-shrink-0 text-center">
            <div className="w-full md:w-[500px]">
              <form onSubmit={handleSubmit} className="sm:flex sm:items-center">
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Email"
                  type="email" 
                />
              </form>
            </div>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <div className="flex flex-wrap justify-center gap-6">
                <div
                  className={`submitDiv relative cursor-pointer ${isEmailEmpty || !isEmailValid ? 'opacity-50 pointer-events-none' : ''}`}
                  onClick={() => handleSubmit(new Event("submit"))} 
                >
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700" />
                  <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                    {mutation.isLoading ? <LoadingSvg/> : "Search →"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Modal */}
      {openModal && (
        <div className="transition duration-700 ease-in-out">
          <DataModal onClose={() => setOpenModal(false)} data={data} />
        </div>
      )}
    </>
  );
}

export default Home;
