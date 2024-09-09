import React from 'react'

function Form() {
    return (
        <div className='bg-white mx-10 my-10 p-5 border-solid rounded-lg shadow-slate-700 shadow-2xl'>
            <h1 className='text-center text-3xl font-bold'>Write Your Blog</h1>
            <form>
                <div className="space-y-12">
                    <div className="border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Blog Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        placeholder="Enter your blog title here"
                                        className="block w-full rounded-xl border-2 border-violet-950 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-2"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Publish Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        placeholder="Enter your blog title here"
                                        className="block w-full rounded-xl border-2 border-violet-950 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Category
                                </label>
                                <div className="mt-2">
                                    <select
                                        className="block w-full rounded-xl border-2 border-violet-950 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                    >
                                        <option>Select Category</option>
                                        <option>Select Category</option>
                                        <option>Select Category</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Tags (Multiple Selection)
                                </label>
                                <div className="mt-2">
                                    <select
                                        className="block w-full rounded-xl border-2 border-violet-950 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                    >
                                        <option>Select Category</option>
                                        <option>Select Category</option>
                                        <option>Select Category</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Feature Image
                                    <div className="mt-2 flex items-center border-2 border-violet-950 rounded-xl">
                                        <label className="bg-violet-950 hover:bg-indigo-500 text-white font-bold py-2 px-8 rounded-l-lg cursor-pointer">
                                            Choose
                                            <input type="file" className="hidden" />
                                        </label>
                                        <span className="ml-4 text-gray-400">No file choosen</span>
                                    </div>
                                </label>
                            </div>

                            <div className="col-span-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Blog Content
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        rows={7}
                                        className="block w-full rounded-xl border-2 border-violet-950 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-violet-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit {`>`}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
