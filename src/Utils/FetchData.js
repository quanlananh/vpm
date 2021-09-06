import axios from "axios";
import {
  apiPoolInfoURL,
  apiWinningInfoURL,
  apiLeaderboardURL,
  apiFarmerStatsURL,
  apiFarmerEarningURL,
  apiFarmerPayoutURL,
  apiFarmerPartialURL,
  apiChiaPriceURL,
} from "./Constants";
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
} from "./ActionTypes";

export default function FetchData(launcherId) {
  return async (dispatch) => {
    dispatch({ type: FETCHING_DATA });

    if (launcherId == null) {
      try {
        const apiPoolInfo = await axios.get(`${apiPoolInfoURL}`);
        const apiWinningInfo = await axios.get(`${apiWinningInfoURL}`);
        const apiLeaderboard = await axios.get(`${apiLeaderboardURL}`);

        axios.all([apiPoolInfo, apiWinningInfo, apiLeaderboard]).then(
          axios.spread((...responses) => {
            const resPoolInfo = responses[0];
            const resWinningInfo = responses[1];
            const resLeaderboard = responses[2];

            dispatch({
              type: FETCHING_DATA_SUCCESS,
              payload: {
                poolInfo: resPoolInfo.data,
                winningInfo: resWinningInfo.data,
                leaderBoard: resLeaderboard.data,
              },
            });
          })
        );
      } catch (err) {
        dispatch({ type: FETCHING_DATA_FAIL, payload: err.data });
      }
    } else {
      try {
        const apiPoolInfo = await axios.get(`${apiPoolInfoURL}`);
        const apiWinningInfo = await axios.get(`${apiWinningInfoURL}`);
        const apiLeaderboard = await axios.get(`${apiLeaderboardURL}`);
        const apiFarmerStats = axios.get(`${apiFarmerStatsURL}${launcherId}`);
        const apiFarmerEarning = axios.get(
          `${apiFarmerEarningURL}${launcherId}`
        );
        const apiFarmerPayout = axios.get(`${apiFarmerPayoutURL}${launcherId}`);
        const apiFarmerPartial = axios.get(
          `${apiFarmerPartialURL}${launcherId}`
        );
        const apiChiaPrice = axios.get(`${apiChiaPriceURL}`);

        axios
          .all([
            apiPoolInfo,
            apiWinningInfo,
            apiLeaderboard,
            apiFarmerStats,
            apiFarmerEarning,
            apiFarmerPayout,
            apiFarmerPartial,
            apiChiaPrice,
          ])
          .then(
            axios.spread((...responses) => {
              const resPoolInfo = responses[0];
              const resWinningInfo = responses[1];
              const resLeaderboard = responses[2];
              const resFarmerInfo = responses[3];
              const resFarmerEarning = responses[4];
              const resFarmerPayout = responses[5];
              const resFarmerPartial = responses[6];
              const resChiaPrice = responses[7];

              dispatch({
                type: FETCHING_DATA_SUCCESS,
                payload: {
                  poolInfo: resPoolInfo.data,
                  winningInfo: resWinningInfo.data,
                  leaderBoard: resLeaderboard.data,
                  farmerStats: resFarmerInfo.data,
                  farmerEarning: resFarmerEarning.data,
                  farmerPayout: resFarmerPayout.data,
                  farmerPartial: resFarmerPartial.data,
                  chiaPrice: resChiaPrice.data,
                },
              });
            })
          );
      } catch (err) {
        dispatch({ type: FETCHING_DATA_FAIL, payload: err.data });
      }
    }
  };
}
