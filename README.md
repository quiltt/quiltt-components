# quiltt-components

[![NPM](https://img.shields.io/npm/v/quiltt-components.svg)](https://www.npmjs.com/package/quiltt-components)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript/tree/master/react)

## Install

```bash
npm install --save quiltt-components
```

or

```bash
yarn add quiltt-components
```

## Usage

```tsx
import * as React from 'react'

import 'quiltt-components/dist/index.css'

import { AccountList } from 'quiltt-components'

const Example = () => {
  //  .......................  //
  //  Data fetching step here  //
  //  .......................  //
  return <AccountList accounts={accounts} />
}

export default Example
```

## License

MIT © [quiltt](https://github.com/quiltt)
