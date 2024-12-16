import { memo } from "react";
import Translation from "../../state/locale";
import { ROLE } from "../../state/const";
import { IRole } from "../../type";
import styles from './back.module.css';

interface SideBProps {
  role: IRole;
}
const SideB = ({ role }: SideBProps) => {
  const qr = ROLE[Translation.getLanguage()][role];

  return (
    <div className="d-flex bg-primary-dark align-items-center w-100 h-100 p-3 br">
      <div className="d-flex flex-column bg-primary-light align-items-center p-3 br">
        <span className="ts-4 fw-semibold">{Translation.key('curriculum_vitae')}</span>
        <span className="ts-6 fw-normal mb-3 text-center">{Translation.key('scan_or_click_qr')}</span>
        <a href={qr.link} target="_blank" rel="noreferrer">
          <img src={qr.qr} alt="QR Code" className={styles.qr} />
        </a>
      </div>
    </div>
  );
};

export default memo(SideB);
