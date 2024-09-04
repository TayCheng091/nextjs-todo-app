"use client";

import { useState } from "react";

function Header() {
  const [keyword, setKeyword] = useState<string>("");

  function handleSearch() {
    console.log("keyword = ", keyword);
  }

  return (
    <div className="p-5 border ">
      <input
        type="text"
        placeholder="Search tasks"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Header;
