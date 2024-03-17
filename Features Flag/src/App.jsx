import FeatureFlags from "./components/FeatureFlags";
import FeaturFlagGlobalState from "./context";
function App() {
  return (
    <div>
      <FeaturFlagGlobalState>
        <FeatureFlags />
      </FeaturFlagGlobalState>
    </div>
  );
}

export default App;
