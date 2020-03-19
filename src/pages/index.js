import React, { Component } from "react";
import Head from "next/head";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Cooki from "../components/Cooki";

class Index extends Component {
  state = {
    cookiShow: false
  };
  componentDidMount = () => {
    this.handleCookiShow();
  };
  handleCookiShow = () => {
    let getData = JSON.parse(localStorage.getItem("cooki"));
    if (getData !== true) {
      this.setState({
        cookiShow: true
      });
    }
  };
  handleCookiClose = () => {
    localStorage.setItem("cooki", JSON.stringify(true));
    this.setState({
      cookiShow: false
    });
  };
  render() {
    const { cookiShow } = this.state;
    return (
      <div className="logo-wrapper">
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
        <div className="left-wrapper">
          <div className="inner">
            <p className="explore-txt">Shop, Support & More.</p>
            <a
              className="explore-link"
              href="https://www.lego.com/en-us"
              target="_blank"
            >
              Explore
            </a>
            <img src="/imgs/left-side-lego.png" alt="" />
          </div>
        </div>
        <div className="right-wrapper">
          <div className="inner">
            <p className="games-txt">Games, videos & more!</p>
            <a
              className="games-link"
              href="https://www.lego.com/en-us/kids"
              target="_blank"
            >
              PLAY ZONE
            </a>
            <img src="/imgs/right-side-lego.png" alt="" />
          </div>
        </div>
        <span className="icon-wrapper">
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
          .logo-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .left-wrapper {
            position: relative;
            width: 50%;
            height: 100%;
            display: inline-block;
            background: rgb(0, 109, 183);
          }
          .inner {
            position: absolute;
            left: 50%;
            top: 50%;
            display: inline-block;
            text-align: center;
            transform: translate(-50%, -50%);
          }
          .inner img {
            max-width: 25rem;
          }
          .inner .games-txt {
            font-size: 1.25rem;
            line-height: 1.9375rem;
            font-weight: 700;
            color: black;
          }
          .inner .explore-txt {
            font-size: 1.25rem;
            line-height: 1.9375rem;
            font-weight: 700;
            color: #ffffff;
          }
          .inner .games-link {
            display: inline-block;
            width: auto;
            border-collapse: collapse;
            text-align: center;
            line-height: 1.1875rem;
            font-size: 1.5rem;
            color: rgb(0, 0, 0);
            font-weight: 700;
            box-shadow: rgb(202, 202, 202) 0px 4px 0px;
            border-width: 1px;
            border-style: solid;
            border-radius: 6px;
            padding: 1.125rem;
            background: rgb(255, 255, 255);
            border-color: rgb(255, 255, 255);
            min-width: 12.5rem;
            text-transform: uppercase;
            margin-bottom: 2.5rem;
            box-shadow: rgb(202, 202, 202) 0px 4px 0px,
              rgba(0, 0, 0, 0.5) 0px 4px 10px;
            text-decoration: none;
          }
          .inner .games-link:hover {
            color: rgba(69, 170, 242, 1);
          }
          .inner .explore-link {
            min-width: 12.5rem;
            margin-bottom: 2.5rem;
            display: inline-block;
            width: auto;
            border-collapse: collapse;
            text-align: center;
            color: rgb(0, 0, 0);
            font-size: 1rem;
            line-height: 1.5625rem;
            font-weight: 500;
            text-transform: none;
            padding-left: 1.125rem;
            padding-right: 1.125rem;
            padding-top: 0.625rem;
            padding-bottom: 0.625rem;
            border-width: 1px;
            border-style: solid;
            background: rgb(255, 255, 255);
            border-color: transparent;
            border-radius: 4px;
            text-decoration: none;
          }
          .inner .explore-link:hover {
            background-color: black;
            color: #ffffff;
          }
          .right-wrapper {
            position: relative;
            width: 50%;
            height: 100%;
            display: inline-block;
            background-color: rgb(255, 207, 0);
            background-image: url("/imgs/background-wizi.png");
            background-size: cover;
          }
          .icon-wrapper {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .icon-wrapper img {
            width: 5rem;
          }
          ////////////////////////////////////////
          @media (max-width: 1000px) {
            .inner img {
              max-width: 20rem;
            }
          }
          @media (max-width: 700px) {
            .right-wrapper {
              width: 100%;
              height: 70%;
              display: block;
            }
            .left-wrapper {
              width: 100%;
              height: 70%;
              display: block;
            }
            .icon-wrapper {
              top: 70%;
            }
            .icon-wrapper img {
              width: 3rem;
            }
          }
          @media (max-width: 400px) {
            .right-wrapper {
              padding-top: 50px;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default Index;
