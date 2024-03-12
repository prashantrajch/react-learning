import Tabs from "./components/Tabs"

function RandomComponent(){
  return <h1>This is content for tab 3</h1>
}

function App() {

  let tabs = [
    {
      label: 'Tab 1',
      content: <h1>This is content for tab 1</h1>
    },
    {
      label: 'Tab 2',
      content: <h1>This is content for tab 2</h1>
    },
    {
      label: 'Tab 3',
      content: <RandomComponent />
    }
  ]

  return <Tabs tabContent={tabs} />
}

export default App
