import React from "react";
import { connect } from "react-redux";
import "../styles/Card.css";
import cardImages from "../api/superheroes.json";
import { AccessRights, STATE, Admins } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  idx: number;
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
  idx,
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
    {label.toString() && (
      <div
        onClick={handleSelect}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        className="card"
      >
        <img
          className="card__img"
          src={`${cardImages[Number(label) % (cardImages.length - 1)].image}`}
        ></img>
        {accessRights.status &&
          accessRights.status.slice(0, 5) === "Admin" &&
          !canShowBacketwaste && (
            <span onClick={handleDelete} className="card__cross">
              &#10060;
            </span>
          )}

        {apps[idx] && apps[idx].isSelected && (
          <span className="card__check">&#10003;</span>
        )}

        {accessRights.status &&
          accessRights.status.slice(0, 5) === "Admin" &&
          accessRights.level > 0 &&
          canShowBacketwaste && (
            <span className="card__basketwaste" onClick={handleDelete}>
              &#x2612;
            </span>
          )}

        {apps[idx] &&
          Object.values(apps[idx].pinnedBy).some(el => el === true) && (
            <span
              className={
                "card__pin " +
                Object.keys(apps[idx].pinnedBy)
                  .filter(el => apps[idx].pinnedBy[el as Admins] === true)
                  .join(" ")
              }
            >
              &#x1F4CC;
            </span>
          )}
        <h1 className="card__title">{label}</h1>
      </div>
    )}
  </div>
);

const mapStateToProps = (state: StoreState): StoreState => ({
  apps: state.apps,
  accessRights: state.accessRights
});

export default connect(mapStateToProps)(Card);
