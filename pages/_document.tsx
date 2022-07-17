import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Script src="noflash.js" strategy="afterInteractive" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
