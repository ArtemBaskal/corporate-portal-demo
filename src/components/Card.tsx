import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {AccessRights, STATE, Admins, Users} from "../actions";
import {StoreState} from "../reducers";
import "../styles/Card.css";
import WindowWrapper from "./Window"
import cn from "classnames";

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
    isCatalog?: boolean;

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
                  isCatalog,
                  onDragStart,
                  onDragOver,
                  onDragEnd
              }: AppProps): JSX.Element => {
    const [isWindowOpened, toggleOpen] = useState(false);
    const [coords, setCoords] = useState({x: 0, y: 0});
    const cardClass = cn({
        card__pin: true,
        Admin_System: apps[label].pinnedBy.Admin_System,
        Admin_MRF: apps[label].pinnedBy.Admin_MRF,
        Admin_RF: apps[label].pinnedBy.Admin_RF

    })
    return (
        <div>
            {isWindowOpened &&
            <WindowWrapper
                isWindowOpened={isWindowOpened}
                toggleOpen={toggleOpen}
                coords={coords}
                setCoords={setCoords}
                title={label}
                content={
                    <svg width="100" height="100">
                        <image
                            className="card__img"
                            href={`${process.env.PUBLIC_URL}/SVG/${label}.svg`}
                        />
                    </svg>}
            />
            }

            {label && (
                <div onClick={handleSelect} onMouseDown={(e) => {
                    setCoords({x: e.clientX, y: e.clientY})
                    !isCatalog && toggleOpen(true)
                }}
                     className="card">
                    <svg width="100" height="100">
                        <image
                            className="card__img"
                            href={`${process.env.PUBLIC_URL}/SVG/${label}.svg`}
                        />
                    </svg>

                    {/* {accessRights.status &&
                    accessRights.status.slice(0, 5) === "Admin" &&
                    !isCatalog && (
                        <span onClick={handleDelete} className="card__cross">
              &#10060;
            </span>
                    )}*/}

                    {apps[label] && apps[label].isSelected && (
                        <span className="card__check">&#10003;</span>
                    )}
                    {accessRights.status &&
                    accessRights.status.slice(0, 5) === "Admin" &&
                    accessRights.level > 0 &&
                    isCatalog && (
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
                            className={cardClass}
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
}
const mapStateToProps = (state: StoreState): StoreState => ({
    apps: state.apps,
    accessRights: state.accessRights
});

export default connect(mapStateToProps)(Card);
