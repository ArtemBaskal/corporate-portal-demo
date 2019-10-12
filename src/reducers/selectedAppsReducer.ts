import {
    STATE,
    Action,
    ActionTypes,
    TogglePinPayload,
    Admins,
    HandleDragPayload
} from "../actions";
import p from "immer";

const INITAL_STATE = {
    react: {
        order: 0,
        label: "react",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    "vue-dot-js": {
        order: 1,
        label: "vue-dot-js",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    angular: {
        order: 2,
        label: "angular",
        isSelected: true,
        pinnedBy: {
            Admin_System: false,
            Admin_RF: true,
            Admin_MRF: false,
            level: 3
        },
        isInCatalog: true
    },

    bitcoin: {
        order: 3,
        label: "bitcoin",
        isSelected: true,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    css3: {
        order: 4,
        label: "css3",
        isSelected: true,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    docker: {
        order: 5,
        label: "docker",
        isSelected: true,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    "dot-net": {
        order: 6,
        label: "dot-net",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    electron: {
        order: 7,
        label: "electron",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    github: {
        order: 8,
        label: "github",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    gmail: {
        order: 9,
        label: "gmail",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    googlechrome: {
        order: 10,
        label: "googlechrome",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    graphql: {
        order: 11,
        label: "graphql",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    html5: {
        order: 12,
        label: "html5",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    huawei: {
        order: 13,
        label: "huawei",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    instagram: {
        order: 14,
        label: "instagram",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    java: {
        order: 15,
        label: "java",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    linux: {
        order: 16,
        label: "linux",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    microsoftaccess: {
        order: 17,
        label: "microsoftaccess",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    microsoftexcel: {
        order: 18,
        label: "microsoftexcel",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    microsoftonedrive: {
        order: 19,
        label: "microsoftonedrive",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    microsoftonenote: {
        order: 20,
        label: "microsoftonenote",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    microsoftoutlook: {
        order: 21,
        label: "microsoftoutlook",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    microsoftpowerpoint: {
        order: 22,
        label: "microsoftpowerpoint",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    microsoftword: {
        order: 23,
        label: "microsoftword",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    mongodb: {
        order: 24,
        label: "mongodb",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    nvidia: {
        order: 25,
        label: "nvidia",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    php: {
        order: 26,
        label: "php",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    python: {
        order: 27,
        label: "python",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    r: {
        order: 28,
        label: "r",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },

    youtube: {
        order: 29,
        label: "youtube",
        isSelected: false,
        pinnedBy: {
            Admin_System: true,
            Admin_MRF: false,
            Admin_RF: false,
            level: 1
        },
        isInCatalog: true
    },
    redux: {
        order: 30,
        label: "redux",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    skype: {
        order: 31,
        label: "skype",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    twitter: {
        order: 32,
        label: "twitter",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    visa: {
        order: 33,
        label: "visa",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    visualstudiocode: {
        order: 34,
        label: "visualstudiocode",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    vk: {
        order: 35,
        label: "vk",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    vlcmediaplayer: {
        order: 36,
        label: "vlcmediaplayer",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    apple: {
        order: 37,
        label: "apple",
        isSelected: true,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: true,
            Admin_RF: false,
            level: 2
        },
        isInCatalog: true
    },
    wikipedia: {
        order: 38,
        label: "wikipedia",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    },
    yandex: {
        order: 39,
        label: "yandex",
        isSelected: false,
        pinnedBy: {
            Admin_System: false,
            Admin_MRF: false,
            Admin_RF: false,
            level: 0
        },
        isInCatalog: true
    }
};

export default p((state: STATE = INITAL_STATE, action: Action) => {
    let {type, payload} = action;
    switch (type) {
        case ActionTypes.DRAG: {
            const {
                idx,
                draggedIdx
            }: HandleDragPayload = payload as HandleDragPayload;
            [state[idx].order, state[draggedIdx as string].order] = [
                state[draggedIdx as string].order,
                state[idx].order
            ];
            return state;
        }

        case ActionTypes.DELETE_FROM_SELECTED: {
            state[payload as string].isSelected = false;
            state[payload as string].pinnedBy = {
                Admin_System: false,
                Admin_MRF: false,
                Admin_RF: false,
                level: 0
            };

            return state;
        }

        case ActionTypes.DELETE_FROM_CATALOG:
            state[payload as string].isSelected = false;
            state[payload as string].isInCatalog = false;
            state[payload as string].pinnedBy = {
                Admin_System: false,
                Admin_MRF: false,
                Admin_RF: false,
                level: 0
            };

            return state;

        case ActionTypes.TOGGLE_SELECT:
            state[payload as string].isSelected = !state[payload as string]
                .isSelected;

            return state;

        case ActionTypes.TOGGLE_PIN:
            const {
                label,
                accessRights: {status, level}
            } = payload as TogglePinPayload;

            let prevLevel = state[label].pinnedBy.level;

            state[label].pinnedBy[status as Admins] = !state[label].pinnedBy[
                status as Admins
                ];
            state[label].pinnedBy.level = level > prevLevel ? level : prevLevel;

            return state;

        default:
            return state;
    }
});
