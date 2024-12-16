import { memo } from "react";
import { Profile } from "./components/profile/profile";
import { Info } from "./components/info/info";
import { Skills } from "./components/skills/skills";
import { IRole } from "../../type";

interface SideAProps {
  role: IRole;
}
const SideA = ({ role }: SideAProps) => {
  return (
    <div className="d-flex flex-column align-items-center w-100 h-100 p-3">
      <Profile role={role} />
      <Info />
      <Skills />
    </div>
  );
};

export default memo(SideA);
