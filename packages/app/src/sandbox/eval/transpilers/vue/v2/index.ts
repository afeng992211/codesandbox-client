import { LoaderContext } from 'sandpack-core/lib/transpiled-module';
import { Transpiler } from 'sandpack-core/lib/transpiler';

// This is the most advanced compiler, I wanted to get it working in sync first,
// but will eventually move to async.

class VueTranspiler extends Transpiler {
  constructor() {
    super('vue-loader');
  }

  async doTranspilation(code: string, loaderContext: LoaderContext) {
    const loader = await import(
      /* webpackChunkName: 'vue-loader' */ './loader'
    );
    const transpiledCode = await loader.default(code, loaderContext);
    return { transpiledCode };
  }
}

const transpiler = new VueTranspiler();

export { VueTranspiler };

export default transpiler;
