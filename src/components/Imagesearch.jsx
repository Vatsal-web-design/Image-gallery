import React, { useState } from 'react';

const Imagesearch = ({ searchText }) => {
    const [text, setText] = useState('')

    const onclick = (e) => {
        // e.preventdefault();
        searchText(text)
    }

    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form className="w-full max-w-sm">
                <div className='flex items-center border-b-2 border-teal-500 py-2'>
                    <input onChange={e => setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" placeholder='serch Image Term' />
                    <button onClick={onclick} className='flex-shrink-0 bg-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type="button" placeholder='serch Image Term'> Search </button>
                </div>
            </form>
        </div>
    )
}

export default Imagesearch;