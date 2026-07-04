import React from "react"

import { InputSeacrhBooks } from "../../shared/ui/InputSearchBooks"
import CardsItem from "./CardsItem"

export default function CardsGrid() {
    return (
        <React.Fragment>
            <InputSeacrhBooks 
                search={""}
                setSearch={()=>""}

            />
            <article className="flex-1">
                <div className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 sm:p-10">
                    <CardsItem 
                    
                    />
                </div>
            </article>
        </React.Fragment>
    )
};