import {func} from '@/module';
import 'normalize-css';
import '@/scss/index.scss';

console.log('hello');
func();

async function start() {
    await Promise.resolve();
}

start();
