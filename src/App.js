import {
  ChakraProvider,
  createLocalStorageManager,
} from "@chakra-ui/react";

import TestContent from "./components/TestContent";

export default function App() {
  const manager = createLocalStorageManager(
    "election-result-viewer"
  );

  return (
    <ChakraProvider colorModeManager={manager}>
      <TestContent />
    </ChakraProvider>
  );
}
