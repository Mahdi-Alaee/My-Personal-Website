/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

interface LoadingProps {
  isFakeLoading?: boolean;
}

export default function Loading({ isFakeLoading = false }: LoadingProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isFakeLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);
  if (!loading) return false;

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-50 dark:bg-black bg-white flex justify-center items-center">
      <HashLoader color="#ffb400" size={150} />
    </div>
  );
}
