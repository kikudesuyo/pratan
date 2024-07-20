import { useState, useEffect } from "react";
// import { fetchData } from "@/utils/api";

export const useAuth = () => {
  const [user, setUser] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // const response = await fetchData("http://hogehoge", {
        //   withCredentials: true,
        // });
        const response = { data: { user } };
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { user, loading };
};
