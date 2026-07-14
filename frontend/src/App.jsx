import './App.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
function App() {


  return (
    <>
    <div>
        <h1>Welcome to the iMessage Clone</h1>
    </div>
     <header>
        <Show when="signed-out">
          <SignInButton mode="modal"/>
          <SignUpButton mode="modal"/>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App
