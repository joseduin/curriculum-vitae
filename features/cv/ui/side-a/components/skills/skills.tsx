import { SKILLS } from "@/features/cv/state/const";
import ScrollHorizontal from "@/features/common/ui/scroll/scroll-horizontal/scroll-horizontal";
import Translation from "@/features/cv/state/locale";
import styles from './skills.module.css';

export const Skills = () => {
  return (
    <div className="d-flex flex-column flex-grow-1 bg-gray-400 w-100 br py-3 mt-3 mx-3">
      <span className="ts-5 fw-semibold px-3">{Translation.key("skills")}</span>
      <ScrollHorizontal>
        <div className="d-flex flex-row gap-2 px-3">
          {SKILLS.map((skill) => (
            <div key={skill.id} className={`${styles.skill} bg-gray-100 br p-2`}>
              <img src={skill.src} alt={skill.id} />
            </div>
          ))}
        </div>
      </ScrollHorizontal>
      <div className="text-center px-3">
        <span className="text-center fs-6 fst-italic">
          {Translation.key("created_with_love")}
        </span>
      </div>
    </div>
  );
};
