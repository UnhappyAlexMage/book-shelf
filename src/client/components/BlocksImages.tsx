import type { LibraryBook } from "../entities/types";

import defaultBookCover from '../assets/defaultBookCover.jpg';

interface PropsBlocksImages {
    selectedbook: LibraryBook;
};

export default function BlocksImages (props: PropsBlocksImages) {
    return(
            <article className='w-[40%] h-full overflow-y-auto bg-white p-6 flex justify-center'>
                <div className="rounded-2xl border border-slate-100 bg-slate-100 p-4">
                    <h3 className="text-xs tracking-wider text-black mb-3">
                        Так же просматривают: 
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                        {props.selectedbook.reccomendedImages?.map((imgUrl, index) => (
                            <div 
                                key={index} 
                                className="aspect-3/4 overflow-hidden rounded-lg border border-slate-200 bg-white cursor-pointer hover:border-sky-500 transition-colors"
                            >
                                <img 
                                    src={imgUrl} 
                                    alt={`Обложка ${index + 1}`} 
                                    className="h-full w-full object-cover"
                                    onError={(error) => {
                                        if (error.currentTarget.src !== defaultBookCover) {
                                            error.currentTarget.src = defaultBookCover;
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </article>
    )
};