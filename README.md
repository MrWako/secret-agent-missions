# secret-agent-missions
An experiment with Expo

## Presentational Components
Presentational, dumb components:
* Should extend React PureComponents since immutable.js ensures shallow comparisons will work.
* Should be driven by `props` and not access the Redux store.

## Containers components
Smart container components:
* Created using the `connect` function and a presentational component.
* Should interact with the Redux store via the `mapStateToProps`, `mapDispatchToProps` functions.
* `mapStateToProps` takes the immutable.js store and returns a javascript object of immutable primitatives.
* `wrap` is a higher order component that wraps the presentational container and converts the immutable primitives in the props object to plain javascript objects. This pattern has the advantage that shallow comparison on the immutable props ensure we only update the component on true state changes.
