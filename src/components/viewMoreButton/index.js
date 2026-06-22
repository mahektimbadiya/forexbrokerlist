import React from "react";
import "./viewMoreButton.scss"
import { MoveRight, MoveRightIcon } from "lucide-react";

export default function ViewMore() {
    return (
        <div>
            <button>
                <span>
                    View More
                    <div>
                        <MoveRightIcon />
                    </div>
                </span>
            </button>
        </div>
    )
}