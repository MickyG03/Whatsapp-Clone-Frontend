import { useState } from "react";
import CallActions from "./CallActions";
// import CallArea from "./CallArea";
import Header from "./Header";
import Ringing from "./Ringing";

export default function Call({
  call,
  setCall,
  callAccepted,
  myVideo,
  stream,
  userVideo,
//   answerCall,
//   show,
  endCall,
//   totalSecInCall,
//   setTotalSecInCall,
}) {
  // const { receiveingCall, callEnded, name, picture } = call;
  const{receiveingCall, callEnded} = call;
  const [showActions, setShowActions] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] z-10 rounded-2xl overflow-hidden
        callbg`}
        onMouseOver={() => setShowActions(true)}
        onMouseOut={() => setShowActions(false)}
      >
        {/*Container*/}
        <div>
          <div>
            Header
            <Header />
            {/*Call area*/}
            {/* <CallArea
              name={name}
              totalSecInCall={totalSecInCall}
              setTotalSecInCall={setTotalSecInCall}
              callAccepted={callAccepted}
            /> */}
            {/*Call actions*/}
            {showActions ? <CallActions endCall={endCall} /> : null}
          </div>
          {/*Video streams*/}
          <div>
            {/*user video*/}
            {/* {callAccepted && !callEnded ? ( */}
              <div>
                <video
                  ref={userVideo}
                  playsInline
                  muted
                  autoPlay
                  className={toggle ? "SmallVideoCall" : "largeVideoCall"}
                  onClick={() => setToggle((prev) => !prev)}
                ></video>
              </div>
            {/* ) : null} */}
            {/*my video*/}
            {/* {stream ? ( */}
              <div>
                <video
                  ref={myVideo}
                  playsInline
                  muted
                  autoPlay
                  className={`${toggle ? "largeVideoCall" : "SmallVideoCall"} ${
                    showActions ? "moveVideoCall" : ""
                  }`}
                  onClick={() => setToggle((prev) => !prev)}
                ></video>
              </div>
            {/*  ) : null} */}
          </div>
        </div>
      </div>
      {/*Ringing*/}
      {receiveingCall && !callAccepted ? (
      // {true ? (
        <Ringing
          call={call}
          setCall={setCall}
          // answerCall={answerCall}
          // endCall={endCall}
        />
      ) : null}
      {/*calling ringtone*/}
      {/* {!callAccepted && show? (
        <audio src="../../../../audio/ringtone.mp3" autoPlay loop></audio>
      ) : null} */}
    </>
  );
}
