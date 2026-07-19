import { fetchDiscoverData } from "../api/fetchDiscover.api.js";
import { setTrend, setLoading, setError, clearError } from "../discover.slice";

import { useDispatch } from "react-redux";

function useDiscover() {
  const dispatch = useDispatch();
  const fetchDiscover = async () => {
    try {
      dispatch(clearError());
      dispatch(setLoading(true));
      const response = await fetchDiscoverData();
      dispatch(setTrend(response.trendAnalysis));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message || "Failed to fetch discover data",
        ),
      );
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
  return { fetchDiscover };
}
export default useDiscover;
