import React, { Component } from "react";
import Head from "next/head";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Cooki from "../components/Cooki";

class Index extends Component {
  state = {
    cookiShow: false,
  };
  componentDidMount = () => {
    this.handleCookiShow();
  };
  handleCookiShow = () => {
    let getData = JSON.parse(localStorage.getItem("cooki"));
    if (getData !== true) {
      this.setState({
        cookiShow: true,
      });
    }
  };
  handleCookiClose = () => {
    localStorage.setItem("cooki", JSON.stringify(true));
    this.setState({
      cookiShow: false,
    });
  };
  render() {
    const { cookiShow } = this.state;
    return (
      <div className="panel">
        <Head>
          <title>Home | Official LEGO® Shop US </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            data-rh="true"
            name="description"
            content="Explore the world of LEGO® through games, videos, products and more! Shop awesome LEGO® building toys and brick sets and find the perfect gift for your kid"
          ></meta>
          <link
            href="https://www.lego.com/kids/static/favicon.png"
            rel="icon"
          ></link>
        </Head>
        <div className="card card--blue-bg">
          <div className="inner">
            <p className="inner__txt inner__txt--white">
              Shop, Support & More.
            </p>
            <a
              className="inner__navigate inner__navigate--explore"
              href="https://www.lego.com/en-us"
              target="_blank"
            >
              Explore
            </a>
            <img className="inner__img" src="/imgs/left-side-lego.png" alt="" />
          </div>
        </div>
        <div className="card card--yellow-bg">
          <div className="inner">
            <p className="games-txt">Games, videos & more!</p>
            <a
              className="inner__navigate inner__navigate--game"
              href="https://www.lego.com/en-us/kids"
              target="_blank"
            >
              PLAY ZONE
            </a>
            <img
              className="inner__img"
              src="/imgs/right-side-lego.png"
              alt=""
            />
          </div>
        </div>
        <span className="panel__image-preview">
          <img src="/svg/lego-logo.svg" alt="" />
        </span>
        {cookiShow && <Cooki onClose={() => this.handleCookiClose} />}
        <style jsx global>{`
          body {
            margin: 0;
            font-family: sans-serif;
          }
        `}</style>
        <style jsx>{`
          .panel {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .card {
            position: relative;
            width: 50%;
            height: 100%;
            display: inline-block;
          }
          .card--blue-bg {
            background: rgb(0, 109, 183);
          }
          .card--yellow-bg {
            background-color: rgb(255, 207, 0);
            background-image: url(/imgs/background-wizi.png);
            background-size: cover;
          }

          .inner {
            position: absolute;
            left: 50%;
            top: 50%;
            display: inline-block;
            text-align: center;
            transform: translate(-50%, -50%);
          }
          .inner__img {
            max-width: 25rem;
          }
          .inner__txt {
            font-size: 1.25rem;
            line-height: 1.9375rem;
            font-weight: 700;
          }
          .inner__txt--white {
            color: #ffffff;
          }
          .inner__txt--black {
            color: #000000;
          }
          .inner__navigate {
            display: inline-block;
            width: auto;
            color: rgb(0, 0, 0);

            margin-bottom: 2.5rem;
            min-width: 12.5rem;
            text-align: center;
            border-width: 1px;
            border-style: solid;
            text-decoration: none;
            border-collapse: collapse;
            background: rgb(255, 255, 255);
          }

          .inner__navigate--game {
            line-height: 1.1875rem;
            font-size: 1.5rem;
            font-weight: 700;
            box-shadow: rgb(202, 202, 202) 0px 4px 0px;
            border-radius: 6px;
            padding: 1.125rem;
            border-color: rgb(255, 255, 255);
            text-transform: uppercase;
            box-shadow: rgb(202, 202, 202) 0px 4px 0px,
              rgba(0, 0, 0, 0.5) 0px 4px 10px;
          }
          .inner__navigate--game:hover {
            color: rgba(69, 170, 242, 1);
          }
          .inner__navigate--explore {
            font-size: 1rem;
            line-height: 1.5625rem;
            font-weight: 500;
            text-transform: none;
            padding-left: 1.125rem;
            padding-right: 1.125rem;
            padding-top: 0.625rem;
            padding-bottom: 0.625rem;
            border-color: transparent;
            border-radius: 4px;
          }
          .inner__navigate--explore:hover {
            background-color: black;
            color: #ffffff;
          }

          .panel__image-preview {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .panel__image-preview img {
            width: 5rem;
          }
          ////////////////////////////////////////
          @media (max-width: 1000px) {
            .inner img {
              max-width: 20rem;
            }
          }
          @media (max-width: 700px) {
            .card {
              width: 100%;
              height: 70%;
              display: block;
            }
            .panel__image-preview {
              top: 70%;
            }
            .panel__image-preview img {
              width: 3rem;
            }
          }
          @media (max-width: 400px) {
            .card--yellow-bg {
              padding-top: 50px;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default Index;
