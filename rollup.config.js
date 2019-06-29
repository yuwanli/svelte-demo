import svelte from 'rollup-plugin-svelte';
import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
const production = !process.env.ROLLUP_WATCH;
var path = require('path');

var fs = require('fs');
var filePath = path.resolve('./src');
const fileArr = fs.readdirSync(filePath)
var resultConfig = []
fileArr.forEach((filename) => {
	const fileStats  = fs.statSync(path.join(filePath, filename))
	if (fileStats.isDirectory() && filename !== 'components'){
		let config = {
			input: `src/${filename}/main.js`,
			output: {
				sourcemap: true,
				format: 'iife',
				name: 'app',
				file: `public/${filename}/bundle.js`
			},
			plugins: [
				
				svelte({
					// enable run-time checks when not in production
					dev: !production,
					// we'll extract any component CSS out into
					// a separate file — better for performance
					css: css => {
						css.write(`public/${filename}/bundle.css`);
					}
				}),
		
				// If you have external dependencies installed from
				// npm, you'll most likely need these plugins. In
				// some cases you'll need additional configuration —
				// consult the documentation for details:
				// https://github.com/rollup/rollup-plugin-commonjs
				resolve(),
				commonjs(),
		
				// Watch the `public` directory and refresh the
				// browser on changes when not in production
				// !production && livereload({
				// 	watch: 'src',
				// 	port: 34624
				// }),
		
				// If we're building for production (npm run build
				// instead of npm run dev), minify
				production && terser(),
				alias({
					'@components': path.join(filePath, 'components')
				}),
			],
			watch: {
				clearScreen: false
			}
		}
		resultConfig.push(config)
	}
})


export default resultConfig;
