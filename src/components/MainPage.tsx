import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { deleteFromSelected, togglePin, handleDrag } from "../actions";
import "../styles/Card.css";
import { STATE } from "../actions";
import radixSort from "../helpers/radixSort";

interface MainPageProps {
  apps: STATE;
  deleteFromSelected: typeof deleteFromSelected;
}

const MainPage = ({ apps, deleteFromSelected }: MainPageProps): JSX.Element => {
  return (
    <div className="card-container">
      {radixSort(Object.values(apps) as [], "order", "ASC").map(
        ({ label, isSelected, pinnedBy }, idx: number) => {
          if (isSelected || Object.values(pinnedBy).some(el => el === true)) {
            return (
              <Card
                idx={idx}
                key={label}
                label={label.toString()}
                isSelected={Boolean(isSelected)}
                handleDelete={() => deleteFromSelected(idx)}
              />
            );
          }
        }
      )}
    </div>
  );
};

const mapStateToProps = ({ apps }: { apps: STATE }): { apps: STATE } => ({
  apps
});

export default connect(
  mapStateToProps,
  {
    deleteFromSelected,
    togglePin,
    handleDrag
  }
)(MainPage);
