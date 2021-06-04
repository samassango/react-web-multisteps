import React from 'react'

import { ReactWebMultiSteps } from 'react-web-multisteps'
import 'react-web-multisteps/dist/index.css'
const App = () => {
  const nextMove = () => { }
  const previousMove = () => { }
  const onSubmitEvent = () => { }
  const config = {
    btnSubmitLabel: 'Submit', btnNextLabel: 'Next', btnPreviousLabel: 'Previous'
  }

  return (<div style={{ width: '80%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', margin: '200px' }}>
    <ReactWebMultiSteps onNextMove={nextMove} onPreviousMove={previousMove} onSubmit={onSubmitEvent} config={config} >
      <div>
        <p>So the SMTP is working and challenges can also be captured.
        We therefore need a meeting to demo the work done and also
        schedule the workshop of our team to get full understanding
        of the system in order to apply the rest of the fixes.
       </p>
      </div>
      <div>
        <p>
          NativeBase component that renders as Header (navbar) for your screen.
          There can be a single Header component into your Container.
          To have Header for your screen, include Header component within Container.
          Header takes input as: Left, Body and Right, and expects all three of them.
          The components those are defined within Header will be rendered in the same order that you define
      </p>
      </div>
      <div>
        <p>
          Now, we are deciding to make something great. Not only the drawer navigator,
          we want to integrate all three navigators together.
          Let me disclose the logic that how we are organizing the screens.
          We already have two menus in drawer. When the Home menu is tapped,
          let’s add TabA and TabB as tab navigators and let’s add stack navigator
          to the details of TabA. Puzzled? Oh come on, don’t worry! you will love
          the code we will make our intended application functional. So let’s make it happen now!
      </p>
      </div>
      <div>
        <p>
          We have just completed installing the dependencies for react navigation.
          Now, we can move on to the implementation part of these navigators.
          So, we are going to implement the drawer navigation first.
          If you find anything confusing let me know in the comment below. Let’s make it work!
    </p>
      </div>
    </ReactWebMultiSteps>
  </div>
  );
}

export default App

