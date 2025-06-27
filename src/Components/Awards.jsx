import React, { useContext } from 'react';
import { ThemeContext } from '../Settings/ThemeProvider.jsx';
import { awardsData } from '../Settings/data.js';

const Awards = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <div id='certificates' className='min-h-96 mb-20 w-full flex flex-col items-center justify-center overflow-hidden relative'>
            {awardsData.map((award, index) => (
                <div key={index + "awards"} class="relative my-6 w-[80%] max-w-3xl flex flex-col items-center justify-center gap-4">
                    <button class={`absolute text-shadow-2xs text-shadow-black py-1 px-3 -left-8 -top-2 -rotate-[10deg] border border-black black_border ${theme.text === "text-black" ? "#08639D" : theme.text} bg-white font-bold`}>
                        {award.title}
                    </button>

                    <div style={{ boxShadow: ` 4px 4px 1px ${theme.text === "text-black" ? "#08639D" : theme.color}` }} class="flex flex-col-reverse sm:flex-row p-4 sm:p-8 border bg-white border-black font-[Quicksand] rounded-lg shadow-md shadow-black/20 dark:bg-gray-800 dark:border-gray-700 dark:shadow-none items-center justify-between gap-4 w-full">
                        <span>{award.description}</span>
                        <a href={award.PDF_link} target="_blank">
                            <img src={award.image} className='w-20 h-10' />
                        </a>
                    </div>
                </div>
            ))

            }

        </div>
    )
}

export default Awards