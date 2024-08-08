import "./App.css";
import MainRoutes from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainRoutes />
      </QueryClientProvider>
    </>
  );
};

export default App;
