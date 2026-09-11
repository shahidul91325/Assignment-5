import React, { useState } from 'react';
import type { ISkill } from '../Types/Skill-Data';

interface SkillProops {
  SkillData: ISkill[];
}

const SkillCard = ({ SkillData }: SkillProops) => {
  console.log(SkillData);
  const [selectedSkill, setSelectedSkill] = useState<ISkill[]>([]);
  const handleAddClick = (skill: ISkill) => {
    setSelectedSkill([...selectedSkill, skill]);
  };
  const handleRemoveSkill = (id: string) => {
    setSelectedSkill(selectedSkill.filter((skill) => skill.id !== id));
  };
  const handleRemoveAll = () => {
    setSelectedSkill([]);
  };
  return (
    <div className="lg:flex lg:justify-center lg:flex-row lg:items-start flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:w-[60%] md:w-[80%] lg:ml-30 w-[80%]">
        {SkillData.map((skill) => {
          const isSelected = selectedSkill.some((item) => {
            return item.id === skill.id;
          });
          return (
            <div key={skill.id} className="w-full rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm">
              {/* Top Section */}
              <div className="flex items-start justify-between">
                {/* Icon */}
                <img src={skill.icon} alt={skill.name} className="lg:h-6 lg:w-6 w-4 h-4 object-contain" />

                {/* Badge */}
                <span
                  className="rounded-full border lg:px-5 lg:py-2 lg:text-sm font-medium px-3"
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
              <h2 className="mt-4 lg:text-lg font-bold text-slate-900">{skill.name}</h2>

              {/* Description */}
              <p className="mt-4 lg:text-sm leading-5 text-slate-500">{skill.description}</p>

              {/* Divider */}
              <div className="my-6 border-t border-slate-100"></div>

              {/* Information */}
              <div className="flex items-center justify-between gap-2">
                {/* Category */}
                <span className="rounded-lg bg-slate-50 px-2 py-2 text-sm font-medium text-slate-600">
                  {skill.category}
                </span>

                {/* Difficulty */}
                <span className="text-sm lg:text-sm text-slate-500">{skill.difficulty}</span>

                {/* Rating */}
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="text-lg text-yellow-400">★</span>
                  {skill.rating}
                </span>
              </div>

              {/* Button */}
              <button
                onClick={() => handleAddClick(skill)}
                disabled={isSelected}
                type="button"
                className=" lg:mt-8 lg:w-60 md:w-60 rounded-2xl bg-slate-950 lg:py-2 lg:text-sm font-medium text-white transition hover:bg-slate-800 w-60 py-2 lg:ml-0 ml-10 mt-5 "
              >
                {isSelected ? 'Added' : 'Add To Stack'}
              </button>
            </div>
          );
        })}
      </div>
      <div className="lg:w-[35%] lg:my-0 lg:ml-0 w-130 my-5 ml-20">
        <div className="rounded-[28px] border border-slate-100 bg-white px-10 py-11 shadow-[0_3px_8px_rgba(15,23,42,0.08)] mr-30 ml-10">
          <h2 className="text-xl lg:text-lg font-bold leading-tight text-slate-900">Your Stack</h2>

          <p className="mt-3 text-sm font-normal text-slate-400">
            {selectedSkill.length === 0
              ? 'No technologies selected yet.'
              : `${selectedSkill.length} Technology Selected`}
          </p>

          {selectedSkill.length === 0 ? (
            // Empty
            <div className="mt-7 h-20 flex items-center justify-center rounded-[22px] border-2 border-dashed border-slate-200">
              <p className="text-sm text-slate-400">Your stack is empty.</p>
            </div>
          ) : (
            <div className="mt-7">
              {selectedSkill.map((skill) => (
                <div
                  key={skill.id}
                  className="mb-3 flex items-center justify-between rounded-xl border border-slate-200 p-3"
                >
                  <div className="flex items-center gap-3">
                    <img src={skill.icon} alt={skill.name} className="h-8 w-8 object-contain" />

                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">{skill.name}</h3>

                      <p className="text-[10px] text-slate-400">{skill.category}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill.id)}
                    className="text-xl text-slate-400 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={handleRemoveAll}
                className="mt-5 w-full rounded-xl border border-red-300 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
