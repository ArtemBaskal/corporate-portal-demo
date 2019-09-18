import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import {
  selectFromCatalog,
  deleteFromCatalog,
  togglePin,
  handleDrag
} from "../actions";
import { App, User } from "../actions";
import { StoreState } from "../reducers";

interface CatalogProps {
  accessRights: User;
  apps: App[];
  selectFromCatalog: typeof selectFromCatalog;
  deleteFromCatalog: typeof deleteFromCatalog;
  togglePin: typeof togglePin;
  handleDrag(apps: App[]): any;
}

class Catalog extends React.Component<CatalogProps> {
  onDragStart = (e: any, idx: number): void => {
    const { accessRights } = this.props;
    if (accessRights.status && accessRights.status.slice(0, 5) === "Admin") {
      this.draggedItem = this.props.apps[idx];
      e.dataTransfer.effectAllowed = "grabbing";
      e.dataTransfer.setData("text/html", e.target.parentNode);
      e.dataTransfer.setDragImage(e.target.parentNode, 50, 50);
    }
  };

  onDragOver = (idx: number): void => {
    const { accessRights, apps, handleDrag } = this.props;
    if (accessRights.status && accessRights.status.slice(0, 5) === "Admin") {
      const draggedOverItem = apps[idx];

      if (this.draggedItem === draggedOverItem) {
        return;
      }

      let items = apps.filter(item => item !== this.draggedItem);

      items.splice(idx, 0, this.draggedItem);

      handleDrag(items);
    }
  };

  onDragEnd = (): void => {
    const { accessRights } = this.props;
    if (accessRights.status && accessRights.status.slice(0, 5) === "Admin") {
      this.draggedIdx = null;
    }
  };
  // draggedItem: App;
  // draggedIdx: number | void;
  draggedItem: any;
  draggedIdx: any;

  render() {
    const {
      accessRights,
      apps,
      selectFromCatalog,
      deleteFromCatalog,
      togglePin
    } = this.props;
    return (
      <div className="card-container">
        {apps.map(
          (card, idx) =>
            card.isInCatalog && (
              <Card
                onDragStart={(e: Event) => this.onDragStart(e, idx)}
                onDragOver={() => this.onDragOver(idx)}
                onDragEnd={this.onDragEnd}
                idx={idx}
                label={card.label.toString()}
                key={card.label}
                canShowBacketwaste
                handleSelect={(e: Event) => {
                  e.stopPropagation();
                  if (
                    accessRights &&
                    accessRights.status &&
                    accessRights.status.slice(0, 5) === "Admin"
                  )
                    return togglePin(idx, accessRights);
                  selectFromCatalog(idx);
                }}
                handleDelete={(e: Event) => {
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

const mapStateToProps = ({
  accessRights,
  apps
}: StoreState): { accessRights: User; apps: App[] } => ({
  accessRights,
  apps
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
