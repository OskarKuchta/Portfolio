import { AnimationControls } from "framer-motion";

export interface Data {
    id: number;
    name: string;
    image: string;
    github: string;
    live: string;
}

export type NavLink = {
    title: string;
    href: string;
    onClick?: () => void;
}

export type MobileLinkVars = {
    initial: {
        y: number | string;
        transition: {
            duration: number;
            ease: [number, number, number, number];
        };
    };
    open: {
        y: number;
        transition: {
            ease: [number, number, number, number];
            duration: number;
        };
    };
};
export type MenuVars = {
    initial: {
        scaleY: number;
    };
    animate: {
        scaleY: number;
        transition: {
            duration: number;
            ease: [number, number, number, number];
        };
    };
    exit: {
        scaleY: number;
        transition: {
            delay: number;
            duration: number;
            ease: [number, number, number, number];
        };
    };
};

export type ContainerVars = {
    initial: {
        transition: {
            staggerChildren: number;
            staggerDirection: number;
        };
    };
    open: {
        transition: {
            delayChildren: number;
            staggerChildren: number;
            staggerDirection: number;
        };
    };
};

export interface SkillsData {
    img: string;
    label: string;
}

export interface SectionProps {
    Component: React.FC;
    name: string;
}

export interface SectionAnimationResult {
    ref: (node: Element | null | undefined) => void;
    controls: AnimationControls;
    inView: boolean;
}

export interface ProjectCardProps {
    name: string;
    src: string;
    alt: string;
    liveHref: string;
    githubHref: string;
}

export interface inputValue {
    email: string,
    message: string
}