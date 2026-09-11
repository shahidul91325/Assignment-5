import React, { use } from 'react';
import type { ISkill } from '../Types/Skill-Data';
import SkillCard from './SkillCard';
export interface PromiseProops {
    SkillDataPromise:Promise<ISkill[]>
}
const Main = ({SkillDataPromise}:PromiseProops) => {
    const data = use(SkillDataPromise);
    // console.log(data)
    return (
        <div>
            <div>
                <h1 className='text-lg lg:text-left text-center lg:text-4xl lg:ml-30 font-bold'>Explore the <span className='bg-linear-to-r from-[#EC4899] - to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h1>
                <p className='text-[#64748B] lg:text-left text-center text-sm lg:text-lg lg:ml-30 lg:mb-10 mt-2 mb-10'>Pick one technology per category to build your ideal stack.</p>
            </div>
        <SkillCard SkillData={data}></SkillCard>
        </div>
    );
};

export default Main;