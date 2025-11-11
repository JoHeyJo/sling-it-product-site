import { useState } from "react";
import BlogGrid from "../pages/BlogGrid";
import BlogList from "../pages/BlogList";

function Blog(){
  const [isGrid, setIsGrid] = useState(true);

  return isGrid ? <BlogGrid /> : <BlogList />;
}

export default Blog