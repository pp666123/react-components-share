import "./App.css";
import DemoReactHookForm from "./components/DemoReactHookForm";
import React from "react";
function App() {
  const dataArray = [
    {
      title: "qrcode.react",
      plugin: "yarn add qrcode.react",
      iframeSrc: "https://codesandbox.io/s/heuristic-blackwell-604fo6?file=/src/App.js",
    },
    {
      title: "sweet-alert-2",
      plugin: "yarn add sweetalert2-react-content sweetalert2",
      iframeSrc: "https://codesandbox.io/s/reverent-dream-ncq4sc?file=/src/App.js",
    },
    {
      title: "javascript-date",
      plugin: "*getMonth start is 0",
      iframeSrc: "https://codesandbox.io/s/epic-glitter-bvbcyj?file=/src/App.js:507-512",
    },
    {
      title: "react-hook-form",
      plugin: (
        <div className='d-flex flex-column'>
          <div>*yarn add react-hook-form</div>
          <div>{`*required: {...register("firstName", { required: true })}`}</div>
          <div>{`*use errors function build your style`}</div>
        </div>
      ),
      iframeSrc: false,
      components: <DemoReactHookForm />,
    },
  ];
  return (
    <div className='App'>
      <div className='App-header'>
        <h1 className='mt-5'>React-Components-Share</h1>
        <hr className='h-80-vw' />
        {dataArray.map((item, index) => {
          return (
            <div
              className='container my-5'
              key={`component-demo-${index}`}
            >
              <h2 className='mt-0 text-decoration-underline'>{item.title}</h2>
              <h3>{item.plugin}</h3>
              <h3 className='text-decoration-underline mt-3'>demo</h3>{" "}
              {item.iframeSrc && (
                <iframe
                  title={item.title}
                  src={item.iframeSrc}
                  className='codesandbox-iframe'
                  allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                  sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                />
              )}
              {item.components}
              <hr className='h-80-vw' />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
