import { useState } from "react";
import BlogGrid from "../pages/BlogGrid";
import BlogList from "../pages/BlogList";

function Blog(){
  const [isGrid, setIsGrid] = useState(true);

  function toggleView(){
    setIsGrid((isGrid) => !isGrid)
  }

  return isGrid ? (
    <BlogGrid toggleView={toggleView} isGrid={isGrid} />
  ) : (
    <BlogList toggleView={toggleView} isGrid={isGrid} />
  );
}

export default Blog