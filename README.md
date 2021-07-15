# quiltt-components

[![NPM](https://img.shields.io/npm/v/quiltt-components.svg)](https://www.npmjs.com/package/quiltt-components)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save quiltt-components
```

## Usage

```tsx
import * as React from 'react'

import { Connect } from 'quiltt-components'
import 'quiltt-components/dist/index.css'

const Example = () => {
  //  .......................  //
  //  Data fetching step here  //
  //  .......................  //
  return <Connect data={data} isLoading={isLoading} />
}
```

## License

MIT © [quiltt](https://github.com/quiltt)
