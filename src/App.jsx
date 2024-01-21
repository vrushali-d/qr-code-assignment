
import qrLogo from "./assets/images/image-qr-code.png";

function App() {
  

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-slate-300">
        <div className="flex flex-col  rounded-lg justify-center items-center w-56 bg-white">
          <img src={qrLogo} className="w-52 rounded-lg m-4"/>
          <h3 className="font-bold p-2 text-center">Improve your front-end skills by building projects</h3>
          <p className="text-slate-400 p-2 text-xs text-center items-center flex">Scan the QR code to visit Frontend Mentor and take your coding skills to next level</p>
        </div>
        
      </div>
    </>
  )
}

export default App
