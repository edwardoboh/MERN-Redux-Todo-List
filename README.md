### Summary

Using [Learn The Mern Stack](https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE) by Traversy Media as a guide, I created this todo list web app using MongoDB, Express, React, NodeJs and Redux. I diverged from the tutorial slightly by choosing to work with functional components and hooks while the tutorial uses class components up to tutorial nine.

![Preview](resources/preview.gif)

### Design Explanation

Below is a diagram I made to help describe the relationship between all of these technologies. The most challenging technology to explain in this project would have to be Redux. Implementing it is somewhat chaotic, but basically you have your Redux store which contains your app's state and to change it the action/reducer pattern is used.

![Preview](resources/mern_redux_layout.png)

Actions are Javascript objects with a `type` and an optional `payload` property. Action creators are functions that return actions. To clarify this, in an action creator is where you would `fetch()` data from a database, then return an action object containing a label, its `type`, and maybe the data your recieved from the database, it's `payload`. The `type` can later be used to determine how the state is changed in a reducer.

Reducers are functions that, given a state and action, will return a new state. I like to think of them as being analagous to mathematical operations.

![Preview](resources/math.PNG)

Above, the left hand side is the new state, the divergence operation (nabla dot) is the part analagous to an action as it's acting on the intial state. The action may or may not result in a different state, just like the divergence operation.

In order to dispatch actions from a react component to a reducer, action creators and react component must be coupled, or `connect()`ed, together. In this app, we couple them together by passing `connect()` an object of action creators, namely `mapDispatchToProps`. Note that `connect()` is also where you choose which state properties your react component needs from the Redux store via `mapStateToProps`.

Once `connect()`ed, action creators are available to react components through their `props`. Actions are automatically dispatched to the reducer and, depending on the action `type`, can overwrite the app state.
