import type { Equal, Expect, NotAny } from '@type-challenges/utils'
import type { HelloWorld } from '../../type-challenges/00013-warm-hello-world';

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]