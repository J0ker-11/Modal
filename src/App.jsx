import { useState } from "react";
import Modal from "./components/Modal";


 function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [inputEmail, setInputEmail] = useState("");

  const handleLogin = () => {
    if (inputEmail.trim() === "") {
      alert("Please enter an email");
      return;
    }

    console.log(`Email: ${inputEmail}`);

    setShowLogin(false);
    setInputEmail("");

    console.log(` Email: ${inputEmail} is logged in`);
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-96">
      <button onClick={() => {setShowLogin(true)
      }} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      <button onClick={() => {setShowWarning(true)
      }} className="bg-red-500 text-white px-4 py-2 rounded mt-4">Delete Account</button>

      {/* MODAL 1: For Login */}
      <Modal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
        title="Welcome Back"
      >
        <input type="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-4" />
        <button onClick={handleLogin} className="bg-blue-500 text-white w-full py-2">Sign In</button>
      </Modal>

      {/* MODAL 2: For Warning (Same component, different content!) */}
      <Modal 
        isOpen={showWarning} 
        onClose={() => setShowWarning(false)} 
        title="Danger Zone"
      >
        <p className="text-red-600">Are you sure you want to delete everything?</p>
        <div className="flex gap-2 mt-4">
           <button className="bg-red-600 text-white px-4 py-2 rounded">Yes, Delete</button>
           <button onClick={() => setShowWarning(false)} className="border px-4 py-2 rounded">Cancel</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;