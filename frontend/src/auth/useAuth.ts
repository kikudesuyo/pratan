import { useState, useEffect } from "react";
import { fetchData } from "@/api/api";

export const useAuth = () => {
  const [user, setUser] = useState<any>(true); // ユーザー情報の型を適切に設定してください
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // APIエンドポイントは適宜変更してください
        const response = await fetchData("http://localhost:8000/auth/check", {
          withCredentials: true,
        });
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
