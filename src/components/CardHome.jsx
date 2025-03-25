import React from "react";
import { Link } from 'react-router-dom';
import { icons } from "./Icon";

function CardHome({title, link}){
    return (
        <div class="card bg-base-200 w-102 shadow-sm shadow-base-300 hover:inset-shadow-sm">
            <div class="card-body items-center text-center">
                <h2 class="card-title uppercase">{title}</h2>
                <div class="card-actions">
                    <Link to={link} class="opacity-50 hover:opacity-1000 hover:animate-pulse mt-3">
                        {icons.ArrowRight()}
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CardHome;