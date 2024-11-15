import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.less'; // 全局css
import 'virtual:uno.css'; // 引入unocss
import 'virtual:svg-icons-register'; // svg-icons注册导入

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
