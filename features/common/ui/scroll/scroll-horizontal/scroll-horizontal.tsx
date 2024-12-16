import styles from "./scroll-horizontal.module.css";

interface ScrollHorizontalProps {
  children: React.ReactNode;
  className?: string;
}
const ScrollHorizontal = ({ children, className }: ScrollHorizontalProps) => {
  return (
    <div className={`${styles.scrollContainer} ${className}`}>
      <div className={styles.scrollContent}>{children}</div>
    </div>
  );
};

export default ScrollHorizontal;