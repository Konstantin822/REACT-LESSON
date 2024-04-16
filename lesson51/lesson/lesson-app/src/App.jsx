import { Route, Routes } from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import './style/component/swiper.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useForm, SubmitHandler } from "react-hook-form";


function App() {
  // let test = isMobile ? "Mobile" : "Desktop"
  // console.log(test)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className="wrapper">
      <Header />
      {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

      {/* {isMobile ? <h1>Name</h1> : <h1>Name2</h1>} */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <button>Button</button>
        {errors.age && <div>type correct age</div>}
      </form>
      <main>
        <Routes>
          {/* {isMobile && <Route path='/' element={<Home />} />} */}
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>

    // <Tabs>
    //   <TabList>
    //     <Tab>Title 1</Tab>
    //     <Tab>Title 2</Tab>
    //   </TabList>

    //   <TabPanel>
    //     <h2>Some content</h2>
    //   </TabPanel>
    //   <TabPanel>
    //     <h2>Any content 2</h2>
    //   </TabPanel>
    // </Tabs>

  );
}

export default App;
