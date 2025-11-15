import React, { type FC } from "react";
import { Button } from "./components/ui/button";
import { ThemeToggle } from "./components/theme-toggle";

const App: FC = () => {
  return (
    <div className="text-xl">
      <div className="flex min-h-svh flex-col items-center justify-center gap-4">
        <Button>Click me</Button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
