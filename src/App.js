import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  return (
		<ChakraProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</ChakraProvider>
	);
}

export default App;
