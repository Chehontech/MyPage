import React from "react";
import { Link } from 'react-router-dom';
import { icons } from "./Icon";

function CardHomeTest({data}){
    return (
        <div class="grid justify-items-start">
            {data.map((item) => (
                <div key={item.id} class="card bg-base-200  shadow-sm shadow-base-300 m-10 hover:inset-shadow-sm">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title uppercase">{item.title}</h2>
                        <div class="card-actions">
                            <Link to={item.link} class="opacity-50 hover:opacity-1000 hover:animate-pulse mt-3">
                                {icons.ArrowRight()}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CardHomeTest;