import { INFO } from "@/features/cv/state/const";
import Translation from "@/features/cv/state/locale";
import { IRole } from "@/features/cv/type";
import styles from "./profile.module.css";

interface ProfileProps {
  role: IRole;
}
export const Profile = ({ role }: ProfileProps) => {
  return (
    <div
      className={`${styles.background} d-flex flex-column align-items-center justify-content-center bg-primary-dark mx-3 p-3`}
    >
      <img src={`/me.jpg`} alt="me" className={styles.img} />
      <span className="fs-3 fw-semibold mt-2">{INFO.full_name}</span>
      <span className="fs-6 fw-normal">{Translation.key(role)}</span>
    </div>
  );
};
