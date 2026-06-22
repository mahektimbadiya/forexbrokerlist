import React from "react";
import "./exploreAllButton.scss"
import { MoveRight, MoveRightIcon } from "lucide-react";

export default function ExploreAll() {
    return (
        <div>
            <button>
                <span>
                    Explore All
                    <div>
                        <MoveRightIcon />
                    </div>
                </span>
            </button>
        </div>
    )
}