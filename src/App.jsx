<<<<<<< HEAD
import { ConfigProvider } from "antd";
=======
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
import Router from "./Router"
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#D72C2C',
        },
      }}
    >
      <Router />
    </ConfigProvider>
  </QueryClientProvider>
=======
    <Router />
  </QueryClientProvider>

>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
}

export default App
