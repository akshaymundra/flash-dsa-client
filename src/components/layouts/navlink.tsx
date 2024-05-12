'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { sideLinkFill } from "@/animation-variants";

interface sidelinkProps {
    href: string;
    label: string;
    tooltip?: string;
    icon?: React.ReactNode;
}

const Navlink: React.FC<sidelinkProps> = ({
    href,
    label,
    tooltip,
    icon,
}) => {

    const path = useLocation().pathname;

    const linkClass = clsx(
        'rounded-lg flex justify-center items-center h-10 w-10 relative overflow-hidden',
        {
            'text-primary-foreground': path === href,
            'bg-transparent text-background hover:text-primary': path !== href,
        }
    )

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    to={href}
                    aria-label={label}
                    className={linkClass}
                >
                    {href === path &&
                        <motion.div
                            className={`absolute w-10 h-10 rounded-lg bg-primary`}
                            variants={sideLinkFill}
                            initial="hidden"
                            animate="enter"
                            transition={{ type: 'ease-out', duration: 0.15 }}
                        ></motion.div>
                    }
                    <div className="z-10">
                        {icon ? icon : label}
                    </div>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
                <span>{tooltip}</span>
            </TooltipContent>
        </Tooltip>
    )
}

export default Navlink;