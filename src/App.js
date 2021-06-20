import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import 元件
import { AlbumCover } from "./AlbumCover.js";
// import 圖片
import profilePhoto from './image/samuel profile photo.jpg';
// import Web / Visual Design 圖片
import OakMegaWebSiteCover from './image/oakmega website cover.png'
import BotFatLandingPageCover from './image/botfat landing page.png'
import SparkLabsDemoDay from './image/SparkLabs Demo Day 4.png'
import TeleLensDemoDay from './image/TeleLens Demo Day.png'
import OakMegaCIDesign from './image/OakMega CI Design.png'

function App() {
  return (
    <div className="App">
      {/* <section id="intro">
        <h1 class="mb16">Hi I'm Samuel</h1>
        <div class="d1 mb16">說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字</div>
        <img src={profilePhoto} alt="Samuel profile photo"/>
      </section>
      <section id="web-visual-design">
        <div className="cover-container">
          <AlbumCover title="OakMega Website" subTitle="2021" src={OakMegaWebSiteCover}></AlbumCover>
          <AlbumCover title="OakMega Website" subTitle="2021" src={OakMegaWebSiteCover}></AlbumCover>
          <AlbumCover title="OakMega Website" subTitle="2021" src={OakMegaWebSiteCover}></AlbumCover>
          <AlbumCover title="OakMega Website" subTitle="2021" src={OakMegaWebSiteCover}></AlbumCover>
          <AlbumCover title="OakMega Website" subTitle="2021" src={OakMegaWebSiteCover}></AlbumCover>
        </div>
      </section> */}

      {/* 以下是 Routing 的東西 */}
      <Router>
        <div>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
              <Route path="/about/1">
                <One />
              </Route>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/oakmega-website">
              <OakMegaWebSite />
            </Route>
        </div>
      </Router>

    </div>
  );
}

function Home() {
  return (
    <div>
      <section id="intro">
        <h1 class="mb16">Hi I'm Samuel</h1>
        <div class="d1 mb16">說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字說明文字文字</div>
        <img src={profilePhoto} alt="Samuel profile photo"/>
      </section>
      <section id="web-visual-design">
        <div className="cover-container">
          <AlbumCover title="OakMega Website" subTitle="2021" src={OakMegaWebSiteCover} routeUrl="/oakmega-website"></AlbumCover>
          <AlbumCover title="BotFat Landing Page" subTitle="2020" src={BotFatLandingPageCover}></AlbumCover>
          <AlbumCover title="SparkLabs Demo Day 4" subTitle="2020" src={SparkLabsDemoDay}></AlbumCover>
          <AlbumCover title="TeleLens Demo Day" subTitle="2020" src={TeleLensDemoDay}></AlbumCover>
          <AlbumCover title="OakMega CI Design" subTitle="2019" src={OakMegaCIDesign}></AlbumCover>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <Link to="/about/1">show one</Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function One() {
  return (
    <div>
      test one
    </div>
  )
}

function OakMegaWebSite() {
  return (
    <div>
      <h2>efwefwef</h2>
      oakmega website
    </div>
  )
}

export default App;
