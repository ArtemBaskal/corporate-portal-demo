import React, { DragEvent } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import {
  selectFromCatalog,
  deleteFromCatalog,
  togglePin,
  handleDrag,
  HandleByIdAction,
  TogglePinAction
} from "../actions";
import { STATE, AccessRights } from "../actions";
import { StoreState } from "../reducers";
import radixSort from "../helpers/radixSort";

interface CatalogProps {
  accessRights: AccessRights;
  apps: STATE;
  selectFromCatalog: typeof selectFromCatalog;
  deleteFromCatalog: typeof deleteFromCatalog;
  togglePin: typeof togglePin;
  handleDrag: typeof handleDrag;
}

class Catalog extends React.Component<CatalogProps> {
  constructor(
    props: CatalogProps,
    // private draggedItem: App,
    // private draggedOverItem?: App,
    private draggedIdx?: number | null,
    private draggedOverIdx?: number | null
  ) {
    super(props);
  }

  onDragStart = (e: React.DragEvent, idx: number): void => {
    const {
      accessRights: { status },
      apps
    } = this.props;

    if (status && status.slice(0, 5) === "Admin") {
      this.draggedIdx = idx;
      e.dataTransfer.effectAllowed = "grabbing";
      e.dataTransfer.setDragImage(e.target as HTMLElement, 50, 50);
    }
  };

  onDragOver = (idx: number): void => {
    const { accessRights, apps, handleDrag } = this.props;
    if (accessRights.status && accessRights.status.slice(0, 5) === "Admin") {
      this.draggedOverIdx = idx;

      if (this.draggedIdx === this.draggedOverIdx) {
        return;
      }

      const items = JSON.parse(JSON.stringify(apps));

      [
        items[idx].order,
        items[this.draggedIdx as number].order,
        items[idx],
        items[this.draggedIdx as number],
        this.draggedIdx,
        this.draggedOverIdx
      ] = [
        items[this.draggedIdx as number].order,
        items[idx].order,
        items[this.draggedIdx as number],
        items[idx],
        this.draggedOverIdx,
        this.draggedIdx
      ];

      handleDrag(items);
    }
    return;
  };

  onDragEnd = (): void => {
    const { accessRights } = this.props;
    if (accessRights.status && accessRights.status.slice(0, 5) === "Admin") {
      this.draggedIdx = null;
    }
  };

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
        {radixSort(Object.values(apps) as [], "order", "ASC").map(
          (app, idx) =>
            app.isInCatalog && (
              <Card
                onDragStart={(e: React.DragEvent) => this.onDragStart(e, idx)}
                onDragOver={() => this.onDragOver(idx)}
                onDragEnd={this.onDragEnd}
                idx={idx}
                label={app.label.toString()}
                key={app.label.toString()}
                canShowBacketwaste
                handleSelect={(
                  e: React.MouseEvent
                ): TogglePinAction | HandleByIdAction => {
                  e.stopPropagation();
                  if (
                    accessRights &&
                    accessRights.status &&
                    accessRights.status.slice(0, 5) === "Admin"
                  )
                    return togglePin({ idx, accessRights });
                  return selectFromCatalog(idx);
                }}
                handleDelete={(e: React.MouseEvent) => {
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

const mapStateToProps = ({ accessRights, apps }: CatalogProps): StoreState => ({
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
