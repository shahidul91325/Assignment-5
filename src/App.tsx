import { Suspense } from "react";
import Hero from "./Components/Hero"
import Main from "./Components/Main";
import Nav from "./Components/Nav"
import type { ISkill } from "./Types/Skill-Data";

const SkillDataFetch = async():Promise<ISkill[]> => {
  const res = await fetch('../public/Skill-Data.json');
  const data = res.json();
  return data
}

function App() {
  const SkillDataPromise = SkillDataFetch();
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback={<h1>Loading...</h1>}>
          <Main  SkillDataPromise={SkillDataPromise}></Main>
      </Suspense>
    </>
  )
}

export default App