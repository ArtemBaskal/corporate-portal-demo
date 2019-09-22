import React from "react";
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
import p from "immer";

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
    private draggedIdx?: string | null,
    private draggedOverIdx?: string | null
  ) {
    super(props);
  }

  onDragStart = (e: any, idx: string): void => {
    const {
      accessRights: { status }
    } = this.props;

    if (status && status.slice(0, 5) === "Admin") {
      this.draggedIdx = idx;
      e.dataTransfer.effectAllowed = "grabbing";
      e.dataTransfer.setDragImage(e.target.parentNode, 50, 50);
    }
  };

  onDragOver = (idx: string): void => {
    const { accessRights, apps, handleDrag } = this.props;
    if (accessRights.status && accessRights.status.slice(0, 5) === "Admin") {
      this.draggedOverIdx = idx;

      if (this.draggedIdx === this.draggedOverIdx) {
        return;
      }

      handleDrag({ idx, draggedIdx: this.draggedIdx as string });
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
          ({ isInCatalog, label }: { isInCatalog?: boolean; label?: string }) =>
            isInCatalog && (
              <Card
                onDragStart={(e: React.DragEvent) =>
                  this.onDragStart(e, label as string)
                }
                onDragOver={() => this.onDragOver(label as string)}
                onDragEnd={this.onDragEnd}
                label={label as string}
                key={label as string}
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
                    return togglePin({
                      label: label as string,
                      accessRights
                    });
                  return selectFromCatalog(label as string);
                }}
                handleDelete={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  return deleteFromCatalog(label as string);
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
