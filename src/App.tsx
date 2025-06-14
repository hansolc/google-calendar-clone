import { useState } from "react";
import Wrapper from "./components/Wrapper";
import CalendarBody from "./pages/home/components/CalendarBody";
import HomeHeader from "./pages/home/components/Header";

function App() {
  const [type, setType] = useState<"monthly" | "weekly">("weekly");

  return (
    <Wrapper>
      <HomeHeader type={type} setType={setType} />
      <CalendarBody type={type} />
    </Wrapper>
  );
}

export default App;
