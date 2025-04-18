import { useState, useCallback,useEffect , useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Use Ref hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*_-+=[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-br from-gray-900 to-black flex justify-center items-center p-4">
        <div className="bg-gray-800 text-white w-full max-w-md px-8 py-10 rounded-2xl shadow-2xl text-center">
          <h1 className="text-3xl font-bold mb-6 tracking-wide">
            🔐 Password Generator
          </h1>

          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-4 py-3 mb-4 rounded-lg bg-white text-black font-semibold text-lg outline-none shadow-inner placeholder:text-gray-400"
            placeholder="Your secure password"
            ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipboard}
          className="w-full mb-6 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 py-3 rounded-lg text-white font-semibold text-sm uppercase tracking-wider">
            Copy Password
          </button>

          <div className="flex flex-col gap-4 text-left text-sm">
            <div className="flex flex-col">
              <label
                htmlFor="length"
                className="mb-1 font-medium text-gray-300"
              >
                Password Length:{" "}
                <span className="text-white font-semibold">{length}</span>
              </label>
              <input
                id="length"
                type="range"
                min={6}
                max={100}
                value={length}
                className="w-full cursor-pointer accent-blue-500"
                onChange={(e) => setLength(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numbers"
                className="w-4 h-4 accent-blue-500"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numbers" className="text-gray-300">
                Include Numbers
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characters"
                className="w-4 h-4 accent-blue-500"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characters" className="text-gray-300">
                Include Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
