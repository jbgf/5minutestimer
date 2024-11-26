import { generatePath, getLinkTitle, capitalizeFirstLetter } from "../utils";
import Link from "next/link";
import { OtherTypes } from "../const";
import { ClockIcon, MoonIcon, HeartIcon } from "@heroicons/react/24/outline";

interface IProps {
  durationNum: string;
}

const TypeIcons = {
  '': ClockIcon,
  'meditation': HeartIcon,
  'nap': MoonIcon,
};

export default function OtherTypeTimers(props: IProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white/5 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Other Timer Types</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {OtherTypes.map((item, index) => {
            const text = getLinkTitle({ title: item?.title, durationNum: props.durationNum })
            const Icon = TypeIcons[item.path] || ClockIcon;

            return (
              <Link
                key={index}
                href={generatePath({ type: item?.path, 'durationNum': props.durationNum })}
                title={`go to ${text}`}
                className="bg-white/5 hover:bg-white/10 rounded-lg p-6 transition-all duration-200 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-gray-200" />
                  <h3 className="text-lg font-medium text-gray-200">
                    {item.path === '' ? 'Standard' : capitalizeFirstLetter(item.path)}
                  </h3>
                </div>
                <p className="text-sm text-gray-400">
                  {item.path === '' && 'Simple countdown timer for any task'}
                  {item.path === '5-minute-meditation-timer' && 'Peaceful timer with meditation sounds'}
                  {item.path === 'nap' && 'Perfect for quick power naps'}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}