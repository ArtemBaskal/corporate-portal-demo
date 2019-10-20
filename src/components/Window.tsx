import React, {useState} from "react";
import cn from "classnames"
import getCoords from "../helpers/getCoords";
// @ts-ignore
import {Window, TitleBar, View} from 'react-desktop/macOs';

const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let dragElement = e.target as any;
    let coords = getCoords(dragElement as HTMLElement);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    moveAt(e);

    function moveAt(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        dragElement.style.left = e.pageX - shiftX + "px";
        dragElement.style.top = e.pageY - shiftY + "px"
    }

    const eventMoveAt = function (e: any) {
        return moveAt(e);
    };


    document.addEventListener("mousemove", eventMoveAt);

    dragElement.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", eventMoveAt!);
        dragElement.removeEventListener("mouseup", eventMoveAt);
    });

    dragElement.addEventListener("dragstart", () => false);
};

const WindowWrapper = ({coords, setCoords, isWindowOpened, toggleOpen, title, content}: any) => {
    const [isSmall, toggleSmall] = useState(true);
    const [isMinimized, toggleMinimized] = useState(true);
    const [isFullscreen, toggleFullscreen] = useState(false);
    const [size, setSize] = useState({width: '50vw', height: '50vh'});
    const windowClass = cn({
        'draggable-window': isSmall && isMinimized,
        'draggable-window--large': !isSmall && isMinimized,
        'draggable-window--hidden': !isMinimized,
    });

    const handleClose = (e: any) => {
        toggleOpen(!isWindowOpened);
        const display = isWindowOpened ? "block" : "none";
        (e.target as any).parentElement.parentElement.parentElement.style.display = display;
    }

    const handleMinimize = () => toggleMinimized(!isMinimized);

    const handleResize = () => {
        setCoords({x: 0, y: 0});
        toggleFullscreen(!isFullscreen);
        isFullscreen
            ? setSize({width: '50vw', height: '50vh'})
            : setSize({width: '100vw', height: '100vh'});
        toggleMinimized(true);
        toggleSmall(!isSmall);
    }

    return <div
        onMouseDown={handleMouseDown}
        className={windowClass}
        style={{top: coords.y, left: coords.x}}
    >
        <Window
            // chrome
            padding="10px"
            isFullscreen={isFullscreen}
            {...size}
            style={{}}
            onMouseDown={handleMouseDown}
        >
            <TitleBar title={title} controls
                      onCloseClick={handleClose}
                      onMinimizeClick={handleMinimize}
                      onResizeClick={handleResize}
                      isFullscreen={isFullscreen}
            />
            {content}
            {/*<Text>Hello World</Text>*/}
        </Window>
    </div>
}

export default WindowWrapper;
