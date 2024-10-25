import React from "react";
import CustomSafeArea from "./src/components/CustomSafeArea";
import Routes from "./src/routes";

import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <CustomSafeArea>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </CustomSafeArea>
  );
}
