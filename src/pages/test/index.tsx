import Logo from '@/assets/logo.svg';
import SwitchDark from '@/components/SwitchDark';
import styles from './index.module.less';

const Home = () => {
	return (
		<div className={styles.wrap}>
			<img width="200px" height="200px" className={styles.logo} src={Logo} />
			<br />
			<h1 className="m-10">Kor</h1>
			<p>好耶ヾ(≧ ▽ ≦)ゝ 文件路由生效咯!</p>
			<SwitchDark />
		</div>
	);
};

export default Home;
