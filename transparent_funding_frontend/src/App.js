import { userSession, authenticate } from './blockstack/auth.js';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Main from './components/Main.jsx';

function App() {
  if (
    userSession.isUserSignedIn()
  )
    return (
      <Main></Main>
      )
  else
    return (
      <Stack>
        <Button onClick={() => authenticate()} variant="contained">
          SignIn
        </Button>
      </Stack>)
}

export default App;
