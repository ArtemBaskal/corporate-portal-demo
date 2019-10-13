import React, {Component} from "react";
import cn from "classnames"

function getCoords(elem) {
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
    handleMouseDown = e => {
        let dragElement = e.target;
        let coords = getCoords(dragElement);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;

        moveAt(e);

        function moveAt(e) {
            dragElement.style.left = e.pageX - shiftX + "px";
            dragElement.style.top = e.pageY - shiftY + "px"
        }

        const eventMoveAt = function (e) {
            return moveAt(e);
        };

        document.addEventListener("mousemove", eventMoveAt);

        dragElement.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", eventMoveAt);
            dragElement.removeEventListener("mouseup", eventMoveAt);
        });

        dragElement.addEventListener("dragstart", () => false);
    };

    render() {
        const {isSmall, isVisible} = this.state;
        const windowClass = cn({
            'draggable-window': isSmall && isVisible,
            'draggable-window--large': !isSmall && isVisible,
            'draggable-window--hidden': !isVisible,
        });
        return (
            <div
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
                                onClick={e => e.target.parentElement.parentElement.parentElement.style.display = "none"}
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
            </div>
        );
    }
}

export default Window;
