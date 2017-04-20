// Your all app state is a JS object

/*
  Everything that changes in your application
  included the data and the UI state
  in contained in a single object - state, or in other words state tree
 */
const SHOW_ROOT_ENTITY_TREE = 'SHOW_ROOT_ENTITY_TREE'
const SHOW_CHILD_ENTITY_TREE = 'SHOW_CHILD_ENTITY_TREE'

const OPEN_DETAILS_TAB = 'OPEN_DETAILS_TAB_IS'
const CLOSE_DETAILS_TAB = 'CLOSE_DETAILS_TAB_IS'

const SHOW_ENTITY = 'SHOW_ENTITY'
const ADD_ENTITY = 'ADD_ENTITY'
const EDIT_ENTITY = 'EDIT_ENTITY'
const DELETE_ENTITY = 'DELETE_ENTITY'

const SHOW_TAG = 'SHOW_TAG'
const ADD_TAG = 'ADD_TAG'
const EDIT_TAG = 'EDIT_TAG'
const DELETE_TAG = 'DELETE_TAG'

const OPEN_SIDE_BAR = 'OPEN_SIDE_BAR'
const CLOSE_SIDE_BAR = 'CLOSE_SIDE_BAR'

const OPEN_SEARCH_BAR = 'OPEN_SEARCH_BAR'
const CLOSE_SEARCH_BAR = 'CLOSE_SEARCH_BAR'

export { SHOW_ROOT_ENTITY_TREE,
         SHOW_CHILD_ENTITY_TREE,
         OPEN_DETAILS_TAB,
         CLOSE_DETAILS_TAB,
         SHOW_ENTITY,
         ADD_ENTITY,
         EDIT_ENTITY,
         DELETE_ENTITY,
         SHOW_TAG,
         ADD_TAG,
         EDIT_TAG,
         DELETE_TAG,
         OPEN_SIDE_BAR,
         CLOSE_SIDE_BAR,
         OPEN_SEARCH_BAR,
         CLOSE_SEARCH_BAR}
/*
  The state is read only. The only way to change - dispatch an action.
  An action is plain javascript obejct, describing in the minimum way what
  changed in app eager by netwrok request or user interaction.

  When you want to change the state - you need to dispatch
  an action. Action will have a type. Since strings are easy to
  serialize - we will use them.

*/

/*
  To describe state mutations you have to write a function
  that takes a previous state of the app, the action being dispatched
  and returns the next state of the app. And this function has to be pure.
  This function is called - the reducer.
 */
