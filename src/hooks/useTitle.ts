import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    // Optional: Reset title when component unmounts
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useTitle;
