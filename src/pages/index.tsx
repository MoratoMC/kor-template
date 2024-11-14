import HelloWorld from '@/components/HelloWord';
import SwitchDark from '@/components/SwitchDark';
import styles from './index.module.less';

const Home = () => {
	return (
		<div className={styles.wrap}>
			<HelloWorld />
			<SwitchDark />
		</div>
	);
};

export default Home;
