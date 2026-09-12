import { Suspense } from 'react';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import type { ISkill } from './Types/Skill-Data';
import MainBody from './Components/Main-Body';
import Footer from './Components/Footer';

const SkillDataFetch = async (): Promise<ISkill[]> => {
  const res = await fetch('/Skill-Data.json');
  const data = res.json();
  return data;
};

function App() {
  const SkillDataPromise = SkillDataFetch();
  return (
    <>
      <div className='w-full max-w-full'>
        <Nav></Nav>
        <Hero></Hero>
        <Suspense fallback={<h1>Loading...</h1>}>
          <MainBody SkillDataPromise={SkillDataPromise}></MainBody>
        </Suspense>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
