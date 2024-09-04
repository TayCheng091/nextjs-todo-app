"use client";

import { useState } from "react";
import Button from "./Button";

function Header() {
  const [keyword, setKeyword] = useState<string>("");

  function handleSearch() {
    console.log("keyword = ", keyword);
  }

  return (
    <div className="sticky top-0 flex justify-between items-center p-5 border">
      <div>Fresh Search Logo</div>
      <div className="flex gap-x-2">
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
    </div>
  );
}

export default Header;
