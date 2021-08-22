import { Router } from "./Router";
import { FavoritesProvider } from "./_shared/contexts/useFavorites";

function App() {
  return (
    <div>
      <FavoritesProvider>
        <Router />
      </FavoritesProvider>
    </div>
  );
}

export default App;
