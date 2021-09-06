import * as AdminActions from "../actions/AdminActions";
const initialState = {
    admins: [],
    gotAdmins: false,
    isRegistered: false,
    isNotRegistered: false,
    user: null,
    isUserRemoved: false,
    error: ''
};


const onDeleteAdmin = (state,action) => {
    const filteredAdminIdx = state.admins.findIndex(adm => adm.id === action.id);
    const updatedAdmins = [...state.admins];
    updatedAdmins.splice(filteredAdminIdx,1);
    return {
        ...state,
        isUserRemoved: true,
        admins: updatedAdmins
    }
}

const AdminReducer = (state = initialState,action) => {
    switch (action.type) {
        case AdminActions.REMOVE_ADMIN_SUCCESS:
            return onDeleteAdmin(state,action);
        case AdminActions.GET_ADMIN_SUCCESS:
            return {
                ...state,
                admins: action.admins,
                gotAdmins: true
            }
        case AdminActions.REGISTER_ADMIN_SUCCESS:
            return {
                ...state,
                isRegistered: true,
                admins: [...state.admins, action.user]
            }
        case AdminActions.CLEAR_USER_REMOVED_STATUS:
            return {
                ...state,
                isUserRemoved: false
            }
        default:
            return state;
    }
}

export default AdminReducer;