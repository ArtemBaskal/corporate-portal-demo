import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import {
  selectFromCatalog,
  deleteFromCatalog,
  togglePin,
  handleDrag
} from "../actions";

class Catalog extends React.Component {
  onDragStart = (e, idx) => {
    const { accessRights } = this.props;
    if (accessRights.status && accessRights.status.slice(0, 5) === "Admin") {
      this.draggedItem = this.props.cards[idx];
      e.dataTransfer.effectAllowed = "grabbing";
      e.dataTransfer.setData("text/html", e.target.parentNode);
      e.dataTransfer.setDragImage(e.target.parentNode, 50, 50);
    }
  };

  onDragOver = idx => {
    const { accessRights } = this.props;
    if (accessRights.status && accessRights.status.slice(0, 5) === "Admin") {
      const draggedOverItem = this.props.cards[idx];

      if (this.draggedItem === draggedOverItem) {
        return;
      }

      let items = this.props.cards.filter(item => item !== this.draggedItem);

      items.splice(idx, 0, this.draggedItem);

      this.props.handleDrag(items);
    }
  };

  onDragEnd = () => {
    const { accessRights } = this.props;
    if (accessRights.status && accessRights.status.slice(0, 5) === "Admin") {
      this.draggedIdx = null;
    }
  };

  render() {
    const {
      accessRights,
      cards,
      selectFromCatalog,
      deleteFromCatalog,
      togglePin
    } = this.props;
    return (
      <div className="card-container">
        {cards.map(
          (card, idx) =>
            card.isInCatalog && (
              <Card
                onDragStart={e => this.onDragStart(e, idx)}
                onDragOver={() => this.onDragOver(idx)}
                onDragEnd={this.onDragEnd}
                idx={idx}
                label={card.label}
                key={card.label}
                pinnedBy={card.pinnedBy}
                canShowBacketwaste
                handleSelect={e => {
                  e.stopPropagation();
                  if (
                    accessRights.status &&
                    accessRights.status.slice(0, 5) === "Admin"
                  )
                    return togglePin(idx, accessRights);
                  selectFromCatalog(idx);
                }}
                handleDelete={e => {
                  e.stopPropagation();
                  return deleteFromCatalog(idx);
                }}
              />
            )
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessRights: state.accessRights,
  cards: state.item
});

export default connect(
  mapStateToProps,
  {
    selectFromCatalog,
    deleteFromCatalog,
    togglePin,
    handleDrag
  }
)(Catalog);
