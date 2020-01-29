import React, { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "../components/Loader";
import API from "../api";
import YoutubePlayer from "../components/YoutubePlayer.jsx";

const Home = ({ hasRegistered, meditationSession }) => {
  const [currentMeditation, setCurrentMeditation] = useState(null);
  const [error, setError] = useState("");

  const errorMsg = <h4>Pleaes go to discover page and pick a meditation</h4>;

  // useEffect(() => {
  //   const fetchMeditationData = async () => {
  //     try {
  //       //console.log("has registered?: ", hasRegistered);
  //       const token = localStorage.getItem("CMCFlow");
  //
  //       const response = await axios({
  //         headers: { Authorization: `bearer ${token}` },
  //         method: "get",
  //         url: API.userMeditation
  //       });
  //       console.log("meditation data: ", response.data);
  //       setCurrentMeditation(response.data);
  //
  //       setError("");
  //     } catch (err) {
  //       console.log(err.response.data.msg);
  //
  //       setError(err.response.data.msg);
  //     }
  //   };
  //
  //   fetchMeditationData();
  // }, [hasRegistered]);

  const asyncData = async () => {
    try {
      setTimeout( async () => {

        const token = localStorage.getItem("CMCFlow");

        const response = await axios({
          headers: { Authorization: `bearer ${token}` },
          method: "get",
          url: API.userMeditation
        });
        console.log("meditation data: ", response.data);
        await setCurrentMeditation(response.data);
  
        setError("");

      }, 2000)

    } catch (err) {
      console.log(err.response.data.msg);
      setError(err.response.data.msg);
    }
  };

  return (
    <>
      {meditationSession ? (
        <>
          <YoutubePlayer meditationSession={meditationSession} />
        </>
      ) : (
        <h1>No data from meditation</h1>
      )}

      {hasRegistered ? <Quiz /> : null}
    </>
  );
};
const mapState = state => ({
  hasRegistered: state.auth.hasRegistered,
  meditationSession: state.auth.meditationSession
});
export default connect(mapState)(Home);
