"use client";

import { useState } from "react";
import Button from "./Button";

function Header() {
  const [keyword, setKeyword] = useState<string>("");

  function handleSearch() {
    console.log("keyword = ", keyword);
  }

  return (
    <div className="sticky top-0 p-5 border">
      <input
        type="text"
        placeholder="Search tasks"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button onClick={handleSearch} style="primary">
        Search
      </Button>
    </div>
  );
}

export default Header;
