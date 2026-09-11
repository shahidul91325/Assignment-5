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
        <SkillCard SkillData={data}></SkillCard>
    );
};

export default Main;