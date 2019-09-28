import React, { Component } from "react";
import { connect } from "react-redux";

function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

class Window extends Component {
  handleMouseDown = e => {
    let dragElement = e.target;
    let coords = getCoords(dragElement);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    moveAt(e);

    function moveAt(e) {
      dragElement.style.left = e.pageX - shiftX + "px";
      dragElement.style.top = e.pageY - shiftY + "px";
    }

    const eventMoveAt = function(e) {
      return moveAt(e);
    };

    document.addEventListener("mousemove", eventMoveAt);

    dragElement.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", eventMoveAt);
      dragElement.removeEventListener("mouseup", eventMoveAt);
    });

    dragElement.addEventListener("dragstart", () => false);
  };

  handleDragStart = () => () => false;

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        onDragStart={this.handleDragStart}
        className="draggable-window"
      >
        <span
          onClick={e => (e.target.parentElement.style.display = "none")}
          role="icon"
          className="draggable-window__controls"
        >
          X
        </span>
        <br />
        inintial test vanilla draggable window
      </div>
    );
  }
}

export default connect()(Window);
