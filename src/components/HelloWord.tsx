import Logo from '@/assets/logo.svg';
import styles from './HelloWorld.module.css';

const HelloWorld = () => {
	return (
		<>
			<img width="200px" height="200px" className={styles.logo} src={Logo} />
			<br />
			<h1 className="m-10">Kor</h1>
			<p>Vite + React + TypeScript 开发模板</p>
		</>
	);
};

export default HelloWorld;
