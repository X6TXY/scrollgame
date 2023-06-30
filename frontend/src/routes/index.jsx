import { Route, Routes } from "react-router-dom";

import { Disc } from '../Disc';
import { Fifth } from "../Fifth";
import { FirstStage } from "../FirstStage";
import { Fourth } from "../Fourth";
import { Main } from "../Main";
import { Second } from "../Second";
import { Six } from '../Six';
import { Third } from "../Thrid";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/first" element={<FirstStage />} />
      <Route path='/four' element={<Fourth/>}/>
      <Route path="/main" element={<Main />} />
      <Route path="/" element={<Disc />} />
      <Route path='/second' element={<Second />}></Route>
      <Route path="/fifth" element={<Fifth />} />
      <Route path='/thrid' element={<Third/>}></Route>
      <Route path='/six' element={<Six/>}></Route>
    </Routes>
  )
};