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
import { App, AccessRights } from "../actions";
import { StoreState } from "../reducers";

interface CatalogProps {
  accessRights: AccessRights;
  apps: App[];
  selectFromCatalog: typeof selectFromCatalog;
  deleteFromCatalog: typeof deleteFromCatalog;
  togglePin: typeof togglePin;
  handleDrag: typeof handleDrag;
}

class Catalog extends React.Component<CatalogProps> {
  constructor(
    props: CatalogProps,
    private draggedItem?: App,
    private draggedIdx?: number | null
  ) {
    super(props);
  }

  onDragStart = (e: React.DragEvent, idx: number): void => {
    const {
      accessRights: { status }
    } = this.props;
    if (status && status.slice(0, 5) === "Admin") {
      this.draggedItem = this.props.apps[idx];
      e.dataTransfer.effectAllowed = "grabbing";
      e.dataTransfer.setDragImage(e.target as HTMLDivElement, 50, 50);
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

      this.draggedItem && items.splice(idx, 0, this.draggedItem);

      handleDrag(items);
    }
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
        {apps.map(
          (card, idx) =>
            card.isInCatalog && (
              <Card
                onDragStart={(e: React.DragEvent) => this.onDragStart(e, idx)}
                onDragOver={() => this.onDragOver(idx)}
                onDragEnd={this.onDragEnd}
                idx={idx}
                label={card.label.toString()}
                key={card.label}
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
