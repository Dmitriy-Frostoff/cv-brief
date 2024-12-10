import gulp from 'gulp';
import include from 'gulp-file-include';
import replace from 'gulp-replace';
import rename from 'gulp-rename';

const { src, dest } = gulp;

export function html() {
  return src('CV/src/pages/index_gulp_include.html', { cwd: '../../' })
    .pipe(
      include({
        prefix: '@@',
        indent: true,
      }),
    )
    .pipe(replace(/="(\.\.\/){2,}/gi, '="../'))
    .pipe(rename('index.html'))
    .pipe(dest('../../CV/src/pages/'));
}

/**
 * no use except to prevent Eslint error message:
 * "Prefer default export on a file with single export.eslintimport/prefer-default-export
 * function html(): NodeJS.ReadWriteStream".
 * 'Gulp' uses only named exports, export default will fail.
 * Add one more useful function and delete this one or leave it as is.
 */
export function test() {}
