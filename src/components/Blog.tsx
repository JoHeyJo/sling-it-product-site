import { useState } from "react";
import BlogGrid from "../pages/BlogGrid";
import BlogVertical from "../pages/BlogVertical";

function Blog(){
  const [isGrid, setIsGrid] = useState(true);

  return isGrid ? <BlogGrid /> : <BlogVertical />;
}

export default Blog