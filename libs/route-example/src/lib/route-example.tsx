import styles from './route-example.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface RouteExampleProps {}

export function RouteExample(props: RouteExampleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RouteExample!</h1>
      <Link to={'/'}>back</Link>
    </div>
  );
}

export default RouteExample;
