/**
 * A semantic wrapper around bootstrap's css container
 */
import styles from './container.scss';

const Container = ({children}) => (
    <div className="container">
      <h1 className={styles.random}>Container Heading</h1>
        {children}
    </div>
);

export default Container;
