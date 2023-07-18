import React from "react";
import { Outlet } from "react-router-dom";
import Eskwelahan from "../assets/images/eskwelahan.png";
import { Link } from "react-router-dom";
import DefaultCarousel from "../components/DefaultCarousel";

function Landing() {
  return (
    <>
    <div className="w-screen h-screen bg-red-700">
      <div className="w-full h-full bg-gray-700">
       <div className="w-full bg-color1" style={{height:"8%"}}>
          <img className="h-full" src={Eskwelahan} alt="" />
       </div>
       <div className="bg-color2 w-full" style={{height:"92%"}}>
        <div className="w-1/2 bg-color5 h-full">
            <div className="flex h-1/2 w-full justify-center items-end bg-green-700">
              <div className="text-center text-2xl">FREE Class Management System
                <br />
                for everyone!</div>
            </div>
          </div>
          <div className="w-1/2 h-full">

          </div>
       </div>
       <div >

       </div>
      </div>
    </div>
      {/* <div>
        <div
          className="h-screen w-full"
          style={{
            background:
              "linear-gradient(0deg, #D81159 0%, #D81159 100%), linear-gradient(180deg, #218380 0%, rgba(33, 131, 128, 0) 40%)",
          }}
        >
          <div className="grid grid-cols-2">
            <div className="relative">
              <img
                src={Eskwelahan}
                style={{
                  right: 150,
                  top: 0,
                  width: "40%",
                  height: "30%",
                  position: "absolute",
                }}
              />
              <Link to={"/login"}>
                <button
                  className="bg-color5 text-xl"
                  style={{
                    width: 383,
                    height: 76,
                    right: 350,
                    top: 650,
                    position: "absolute",
                    textAlign: "center",
                    color: "#D81159",
                    fontSize: 48,
                    fontFamily: "Monospace",
                    fontWeight: "700",
                    wordWrap: "break-word",
                    borderRadius: 30,
                  }}
                >
                  Login
                </button>
              </Link>
              <div
                style={{
                  width: 734,
                  height: 132,
                  right: 150,
                  top: 320,
                  position: "absolute",
                  textAlign: "center",
                  color: "#D9D9D9",
                  fontSize: 48,
                  fontFamily: "Monospace",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                FREE Class Management System
                <br />
                for everyone!
              </div>
              <Link
                to={"/register"}
                style={{
                  width: 400,
                  height: 21,
                  right: 375,
                  top: 760,
                  position: "absolute",
                  textAlign: "right",
                  color: "#FFBC42",
                  fontSize: 20,
                  fontFamily: "Monospace",
                  fontWeight: "300",
                  textDecoration: "underline",
                  wordWrap: "break-word",
                }}
              >
                {" "}
                Don't have an account? Sign Up
              </Link>
            </div>
            <div className="relative">
              <div
                style={{
                  width: 325,
                  height: 325,
                  left: 700,
                  top: -63,
                  position: "absolute",
                  background: "#FFBC42",
                  borderRadius: 9999,
                }}
              />
              <div
                style={{
                  width: 110,
                  height: 110,
                  left: 810,
                  top: 280,
                  position: "absolute",
                  background: "#FFBC42",
                  borderRadius: 9999,
                }}
              />
              <div
                style={{
                  width: 370,
                  height: 370,
                  left: 550,
                  top: 490,
                  position: "absolute",
                  background: "#FFBC42",
                  borderRadius: 9999,
                }}
              />
              <div
                style={{
                  width: 110,
                  height: 110,
                  left: 430,
                  top: 730,
                  position: "absolute",
                  background: "#FFBC42",
                  borderRadius: 9999,
                }}
              />
              
              <div
                style={{
                  width: 600,
                  height: 700,
                  left: 200,
                  top: 50,
                  position: "absolute",
                  background: "white",
                  borderRadius: 20,
                }}
              >
                <DefaultCarousel />
                
              </div>
            </div>
          </div>

        </div>
      </div> */}

     

      
    </>
  );
}

export default Landing;
