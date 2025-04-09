import React from "react";

// Page
import Page from "./components/sections/Page";

// Header
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";

// Main
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/Features";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Footer from "./components/sections/Footer";
import Modal from "./components/sections/Modal/Modal";
import SignUpModal from "./components/sections/Modal/SignUpModal";
import LoginModal from "./components/sections/Modal/LoginModal";
import { ModalContextProvider } from "./contexts/ModalContext";

const App = () => {
  return (
    <ModalContextProvider>
      <Page>
        <Header>
          <Navigation />
          <Hero />
          <Reviews />
        </Header>

        <Main>
          <Logos />
          <Features />
          <FAQs />
          <Testimonials />
        </Main>

        <Footer />

        <Modal modal="sign-up">
          <SignUpModal />
        </Modal>
        <Modal modal="login">
          <LoginModal />
        </Modal>
      </Page>
    </ModalContextProvider>
  );
};

export default App;
