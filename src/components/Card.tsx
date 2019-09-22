import React, { Fragment } from "react";
import { connect } from "react-redux";
import { AccessRights, STATE, Admins } from "../actions";
import { StoreState } from "../reducers";
import "../styles/Card.css";

interface AppProps {
  label: string;
  apps: STATE;
  handleSelect?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  handleDelete?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  accessRights: AccessRights;
  canShowBacketwaste?: boolean;
  onDragStart?(e: React.DragEvent): void;
  onDragOver?(e: React.DragEvent): void;
  onDragEnd?(e: React.DragEvent): void;
  isSelected?: boolean;
}

const Card = ({
  label,
  apps,
  handleSelect,
  handleDelete,
  accessRights,
  canShowBacketwaste,
  onDragStart,
  onDragOver,
  onDragEnd
}: AppProps): JSX.Element => (
  <div>
    {label && (
      <div onClick={handleSelect} className="card">
        <svg width="100" height="100">
          <image
            className="card__img"
            href={`${process.env.PUBLIC_URL}/SVG/${label}.svg`}
          />
        </svg>

        {accessRights.status &&
          accessRights.status.slice(0, 5) === "Admin" &&
          !canShowBacketwaste && (
            <span onClick={handleDelete} className="card__cross">
              &#10060;
            </span>
          )}

        {apps[label] && apps[label].isSelected && (
          <span className="card__check">&#10003;</span>
        )}
        {accessRights.status &&
          accessRights.status.slice(0, 5) === "Admin" &&
          accessRights.level > 0 &&
          canShowBacketwaste && (
            <Fragment>
              <span className="card__basketwaste" onClick={handleDelete}>
                &#x2612;
              </span>
              <img
                className="card__drag"
                src={`${process.env.PUBLIC_URL}/drag-and-drop.png`}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
              />
            </Fragment>
          )}

        {apps[label] &&
          Object.values(apps[label].pinnedBy).some(el => el === true) && (
            <span
              className={
                "card__pin " +
                Object.keys(apps[label].pinnedBy)
                  .filter(el => apps[label].pinnedBy[el as Admins] === true)
                  .join(" ")
              }
            >
              &#x1F4CC;
            </span>
          )}
        <h1 className="card__title">
          {label[0].toUpperCase() + label.slice(1)}
        </h1>
      </div>
    )}
  </div>
);

const mapStateToProps = (state: StoreState): StoreState => ({
  apps: state.apps,
  accessRights: state.accessRights
});

export default connect(mapStateToProps)(Card);
