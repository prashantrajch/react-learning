import { useEffect, useRef, useState } from "react";

export default function ScrollToSection() {
  const [showNav, setShowNav] = useState(null);

  const ref = useRef();
  const data = [
    {
      label: "Home",
      style: {
        backgroundColor: "red",
        width: "100%",
        height: "100vh",
        fontSize: "40px",
        paddingTop: "20px",
        color: "#fff",
      },
    },
    {
      label: "About",
      style: {
        backgroundColor: "blue",
        width: "100%",
        height: "100vh",
        fontSize: "40px",
        paddingTop: "20px",
        color: "#fff",
      },
    },
    {
      label: "Contact",
      style: {
        backgroundColor: "skyblue",
        width: "100%",
        height: "100vh",
        fontSize: "40px",
        paddingTop: "20px",
      },
    },
    {
      label: "Service",
      style: {
        backgroundColor: "pink",
        width: "100%",
        height: "100vh",
        fontSize: "40px",
        paddingTop: "20px",
      },
    },
  ];

  function handleSection(index) {
    console.log("im clicked");
    setShowNav(index);
  }

  useEffect(() => {
    if (ref.current != undefined) {
      let pos = ref.current.offsetTop;
      console.log(ref);

      window.scrollTo({
        top: pos,
        behavior: "smooth",
      });
    }
  }, [showNav]);

  return (
    <div>
      <h1>Scroll to Particular Section</h1>
      <div className="btns">
        <button onClick={() => handleSection(0)}>Home</button>
        <button onClick={() => handleSection(1)}>About</button>
        <button onClick={() => handleSection(2)}>Contact</button>
        <button onClick={() => handleSection(3)}>Service</button>
      </div>
      {data.map((section, index) => (
        <div
          key={index}
          ref={showNav === index ? ref : null}
          style={section.style}
        >
          {section.label}
        </div>
      ))}
    </div>
  );
}
