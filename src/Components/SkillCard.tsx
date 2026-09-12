import { useState } from 'react';
import type { ISkill } from '../Types/Skill-Data';
import { Bounce, toast } from 'react-toastify';

interface SkillProops {
  SkillData: ISkill[];
}

const SkillCard = ({ SkillData }: SkillProops) => {
  const [selectedSkill, setSelectedSkill] = useState<ISkill[]>([]);
  const handleAddClick = (skill: ISkill) => {
    setSelectedSkill([...selectedSkill, skill]);
    toast.success(
      <div className="flex items-center gap-2">
        <img src={skill.icon} alt="logo" className="h-6 w-6" />
        <h4>{`${skill.name} added to your stack!`}</h4>
      </div>,
      {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"light",
        transition: Bounce,
      }
    );
  };
  const handleRemoveSkill = (id: string, skill: ISkill) => {
    setSelectedSkill(selectedSkill.filter((skill) => skill.id !== id));
    toast.error(
      <div className="flex items-center gap-2">
        <img src={skill.icon} alt="logo" className="h-6 w-6" />
        <h4>{`${skill.name} added to your stack!`}</h4>
      </div>,
      {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"light",
        transition: Bounce,
      }
    );
  };
  const handleRemoveAll = () => {
    setSelectedSkill([]);
    toast.error(`All Stack Is Remove`, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:"light",
      transition: Bounce,
    });
  };
  return (
    <div className="lg:flex lg:justify-center lg:flex-row lg:items-start flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:w-[60%] md:w-[80%] lg:ml-30 w-[80%]">
        {SkillData.map((skill) => {
          const isSelected = selectedSkill.some((item) => {
            return item.id === skill.id;
          });
          return (
            <div
              key={skill.id}
              className={`w-full rounded-[30px] ${isSelected ? 'border-2 border-[#da2b2ebb]' : 'border border-slate-200'} bg-white p-5 shadow-sm `}
            >
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
              <div className='flex justify-center items-center'>
                <button
                onClick={() => handleAddClick(skill)}
                disabled={isSelected}
                type="button"
                className={`lg:mt-8 lg:w-60 md:w-60 rounded-2xl lg:py-2 lg:text-sm font-medium text-white transition w-60 py-2 lg:ml-0 mt-5 ${isSelected ? 'bg-linear-to-r from-[#e4400e] from-20%- via-[#F04145] via-30% to-[#4d0bc0] to-70%' : 'bg-black'}`}
              >
                {isSelected ? '✓ Added To Stack' : 'Add To Stack'}
              </button>
              </div>
            </div>
          );
        })}
      </div>
       <div className="w-full mx-auto my-5 lg:sticky lg:top-20 lg:self-start lg:my-0 lg:w-[35%] lg:mx-0 lg:ml-10 lg:flex lg:justify-start flex justify-center items-center">
    
    <div className="w-[80%] lg:w-[65%] rounded-[28px] border border-slate-100 bg-white px-5 py-7 shadow-[0_3px_8px_rgba(15,23,42,0.08)] sm:px-7 sm:py-9 lg:px-10 lg:py-11">

      <h2 className="text-xl lg:text-lg font-bold leading-tight text-slate-900">
        Your Stack
      </h2>

      <p className="mt-3 text-sm font-normal text-slate-400">
        {selectedSkill.length === 0
          ? "No technologies selected yet."
          : `${selectedSkill.length} Technology Selected`}
      </p>

      {selectedSkill.length === 0 ? (
        <div className="mt-7 flex h-30 items-center justify-center rounded-[22px] border-2 border-dashed border-slate-200">
          <p className="text-sm text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="mt-7">
          {selectedSkill.map((skill) => (
            <div
              key={skill.id}
              className="mb-3 flex items-center justify-between rounded-xl border border-slate-200 p-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-8 w-8 shrink-0 object-contain"
                />

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-slate-800">
                    {skill.name}
                  </h3>

                  <p className="text-[10px] text-slate-400">
                    {skill.category}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRemoveSkill(skill.id, skill)}
                className="ml-3 shrink-0 text-xl text-slate-400 hover:text-red-500"
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