export default ( state = { message: 'initial message' }, action = {} ) => {
   switch (action.type) {
       case 'DEFAULT':
           return {
               ...state,
               message: action.message
           };
       default:
           return state;
    }
}