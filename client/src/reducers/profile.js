export default (profile = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload;
        default:
            return profile;
    }
}