import { RewardsReducer } from "./rewards/rewards.reducers";

import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";

const store = createStore(RewardsReducer, devToolsEnhancer({}));

export default store;
