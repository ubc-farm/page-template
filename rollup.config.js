import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
	entry: 'src/index.js',
	sourceMap: true,
	targets: [
		{ dest: 'dist/index.iife.js', format: 'iife' }
	],
	plugins: [
		babel({
			plugins: ['transform-react-jsx', 'external-helpers-2']
		}),
		nodeResolve({jsnext: true}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		commonjs({
			exclude: 'node_modules/lodash-es/**'
		})
	],
	external: ['react', 'react-dom', 'tape'],
	globals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'tape': 'test'
	}
}