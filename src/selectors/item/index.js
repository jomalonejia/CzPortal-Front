import { createSelector } from 'reselect'
import {usernameSelector} from '../user'

const itemState = state => state.item.item

/*export const itemSelector = createSelector(
  [usernameSelector,usernameState],
  (username, item) => {username, item}
)*/

export const itemSelector = createSelector(
  [usernameSelector],
  (username) => username
)



