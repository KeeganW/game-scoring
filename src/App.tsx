// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Routes from './Routes';

export default function App() {
  return <MantineProvider><Routes /></MantineProvider>;
}
