import React, { useState, useMemo } from "react";
import { PinContainer } from "../Components/ui/3d-pin";
import { SparklesPreview } from "./SparkelsAboutMe";
import { SmoothCursor } from "../Components/smooth-cursor";
import PressButton from "./PressButton";
import projectData from "../Settings/data";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../Components/ui/animated-modal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard() {
    motion


    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const cardsPerPage = 8;

    // Filtered and paginated data
    const filteredData = useMemo(() =>
        projectData.filter(
            (page) =>
                page.title.toLowerCase().includes(search.toLowerCase()) ||
                page.description.toLowerCase().includes(search.toLowerCase())
        ),
        // eslint-disable-next-line
        [search, projectData]
    );
    const totalPages = Math.ceil(filteredData.length / cardsPerPage);
    const paginatedData = useMemo(() =>
        filteredData.slice((page - 1) * cardsPerPage, page * cardsPerPage),
        [filteredData, page]
    );

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center ">
            <SparklesPreview text={'Projects'} />
            <SmoothCursor />
            <div className="w-full flex justify-between mb-4 items-center gap-4 p-0 lg:px-40 md:px-10 sm:px-5 px-2">
                <Link to={'/'}><PressButton  text={'Go Back'} extraClasses={'p-3'} /></Link>
                <div className="flex w-full max-w-[50%] items-center gap-2">
                    <h2 className="text-xl text-white/70">Search Project</h2>
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="i.e flow..."
                        className="rounded-lg border bg-gray-300 cursor-none  border-gray-300 px-4 py-2 w-full max-w-md text-black focus:outline-none"
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 w-full h-full min-h-[600px] px-4 py-5">
                {paginatedData.map((project, index) => (
                    <PinContainer title={project.title} key={index}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col p-2 tracking-tight text-slate-100/50 w-full min-w-[250px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[18rem] sm:h-[20rem] flex-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 cursor-pointer"
                        >
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                {project.title}
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    {project.description.slice(0, 56)}...
                                </span>
                            </div>
                            <img src={project.image} className="flex flex-1 w-full h-35 rounded-lg object-cover mt-4 bg-white" alt="" />
                        </a>
                    </PinContainer>
                ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex gap-2 my-7">

                <span onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} >
                    <PressButton text={'Prev'} extraClasses={'p-3'} />
                </span>
                <span className="px-2 py-1 flex justify-center items-center font-[Quicksand] text-white">Page {page} of {totalPages}</span>
                <span onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                    <PressButton text={'Next'} extraClasses={'p-3'} />
                </span>

            </div>
            {/* <div className="py-40  flex items-center justify-center">
                <Modal>
                    <ModalTrigger
                        className="bg-gray-500 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                        <span
                            className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                            Book your flight
                        </span>
                        <div
                            className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                            ✈️
                        </div>
                    </ModalTrigger>
                    <ModalBody>
                        <ModalContent>
                            <h1>hello</h1>
                        </ModalContent>
                    </ModalBody>
                </Modal>
            </div> */}
        </div>
    );
}

/*
 

*/ 