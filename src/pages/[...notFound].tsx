import SwitchDark from '@/components/SwitchDark';
import styles from './notfound.module.less';

const notFound = () => {
	return (
		<div className={styles.wrap}>
			<img
				width="200px"
				height="200px"
				className={styles.logo}
				src="/src/assets/notFound.svg"
			/>
			<br />
			<h1 className="m-10">404 NotFound</h1>
			<p>
				此页面位于 <code>src/pages/[...notFound].tsx</code>
			</p>
			<SwitchDark className="m-10" />
		</div>
	);
};

export default notFound;
