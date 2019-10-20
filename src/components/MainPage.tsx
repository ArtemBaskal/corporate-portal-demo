import React from "react";
import {connect} from "react-redux";
import Card from "./Card";
import {deleteFromSelected, togglePin, handleDrag} from "../actions";
import "../styles/Card.css";
import {STATE, PinnedBy} from "../actions";
import radixSort from "../helpers/radixSort";

interface MainPageProps {
    apps: STATE;
    deleteFromSelected: typeof deleteFromSelected;
}

const MainPage = ({apps, deleteFromSelected}: MainPageProps): JSX.Element => {
    return (
        <div className="card-container">
            {radixSort(Object.values(apps) as [], "order", "ASC").map(
                ({label, isSelected, pinnedBy}: { label?: string; isSelected?: boolean; pinnedBy?: PinnedBy },
                 idx: number) => {
                    if (
                        isSelected ||
                        Object.values(pinnedBy as PinnedBy).some(el => el === true)) {
                        return (
                            <Card
                                key={label}
                                label={label as string}
                                isSelected={Boolean(isSelected)}
                                handleDelete={() => deleteFromSelected(label as string)}
                            />
                        );
                    }
                }
            )}
        </div>
    );
};

const mapStateToProps = ({apps}: { apps: STATE }): { apps: STATE } => ({
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
