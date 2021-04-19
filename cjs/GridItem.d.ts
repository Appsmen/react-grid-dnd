import * as React from "react";
interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onDragStart: () => void;
    onDragEnd: () => void;
}
export declare function GridItem({ children, onDragStart, onDragEnd, style, className, ...other }: GridItemProps): any;
export {};
