import linaria from '@linaria/esbuild';
import esbuild from 'esbuild';

const prod = process.env.NODE_ENV === 'production';

esbuild
  .build({
    entryPoints: ['index.js'],
    outdir: 'dist',
    bundle: true,
    minify: prod,
    plugins: [
      linaria({
        sourceMap: prod,
      }),
    ],
  })
  .catch(() => process.exit(1));
