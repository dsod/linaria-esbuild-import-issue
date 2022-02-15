import esbuild from 'esbuild';
import linaria from '@linaria/esbuild';

const prod = process.env.NODE_ENV === 'production';
console.log(process.version);
esbuild
  .build({
    entryPoints: ['./src/index.jsx'],
    outdir: 'dist',
    bundle: true,
    minify: prod,
    loader: { '.js': 'jsx' },
    plugins: [
      linaria({
        sourceMap: prod,
      }),
    ],
  })
  .catch(() => process.exit(1));
