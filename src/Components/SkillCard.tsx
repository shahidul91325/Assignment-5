import React from 'react';
import type { ISkill } from '../Types/Skill-Data';

interface SkillProops {
  SkillData: ISkill[];
}

const SkillCard = ({ SkillData }: SkillProops) => {
  // console.log(SkillData)
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 w-[60%] ml-30">
        {SkillData.map((skill) => (
          <div key={skill.id} className="w-full rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm">
            {/* Top Section */}
            <div className="flex items-start justify-between">
              {/* Icon */}
              <img src={skill.icon} alt={skill.name} className="h-6 w-6 object-contain" />

              {/* Badge */}
              <span
                className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium "
                style={{
                  backgroundColor: `${skill.badgeColor}15`,
                  borderColor: `${skill.badgeColor}40`,
                  color: skill.badgeColor,
                }}
              >
                {skill.badge}
              </span>
            </div>

            {/* Skill Name */}
            <h2 className="mt-4 text-lg font-bold text-slate-900">{skill.name}</h2>

            {/* Description */}
            <p className="mt-4 text-sm leading-5 text-slate-500">{skill.description}</p>

            {/* Divider */}
            <div className="my-6 border-t border-slate-100"></div>

            {/* Information */}
            <div className="flex items-center justify-between gap-2">
              {/* Category */}
              <span className="rounded-lg bg-slate-50 px-2 py-2 text-sm font-medium text-slate-600">
                {skill.category}
              </span>

              {/* Difficulty */}
              <span className="text-sm text-slate-500">{skill.difficulty}</span>

              {/* Rating */}
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="text-lg text-yellow-400">★</span>
                {skill.rating}
              </span>
            </div>

            {/* Button */}
            <button
              type="button"
              className="mt-8 w-60 rounded-2xl bg-slate-950 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Add to Stack
            </button>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default SkillCard;
