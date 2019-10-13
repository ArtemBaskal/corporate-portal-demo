import React, {Component} from "react";
import cn from "classnames"

function getCoords(elem: HTMLElement) {
    const box = elem.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

class Window extends Component {
    state = {
        isSmall: true,
        isVisible: true
    }
    handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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

        dragElement!.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", eventMoveAt!);
            dragElement!.removeEventListener("mouseup", eventMoveAt);
        });

        dragElement!.addEventListener("dragstart", () => false);
    };

    render() {
        const {isSmall, isVisible} = this.state;
        const windowClass = cn({
            'draggable-window': isSmall && isVisible,
            'draggable-window--large': !isSmall && isVisible,
            'draggable-window--hidden': !isVisible,
        });
        return <div
            onMouseDown={this.handleMouseDown}
            className={windowClass}
        >
                    <span
                        role="icon"
                        className="draggable-window__controls">
                        <svg width="10" height="10">
                            <image
                                className="card__img"
                                href={`${process.env.PUBLIC_URL}/SVG/icon-cross.svg`}
                                // @ts-ignore
                                onClick={(e: Event) => e.target.parentElement.parentElement.parentElement.style.display = "none"}
                            />
                    </svg>
                    </span>
            <span
                role="icon"
                className="draggable-window__controls">
                        <svg width="10" height="10">
                             <image
                                 className="card__img"
                                 href={`${process.env.PUBLIC_URL}/SVG/icon-rollup.svg`}
                                 onClick={() => this.setState({isVisible: !this.state.isVisible})}
                             />
                    </svg>
                    </span>
            <span
                role="icon"
                className="draggable-window__controls">
                        <svg width="10" height="10">
                            <image
                                className="card__img"
                                href={`${process.env.PUBLIC_URL}/SVG/icon-window.svg`}
                                onClick={() => this.setState({isSmall: !this.state.isSmall, isVisible: true})}
                            />
                    </svg>
                    </span>
            <br/>
            Initial test vanilla draggable window
        </div>;
    }
}

export default Window;
