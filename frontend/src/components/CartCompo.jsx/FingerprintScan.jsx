import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fingerprint } from "lucide-react";

export default function FingerprintScan() {
  const [scanning, setScanning] = useState(true);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setScanning(false);
      setSuccess(true);
    }, 5000); // Scan time

    const timer2 = setTimeout(() => {
      navigate("/success");
    }, 8000); // Redirect

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      data-theme="winter"
      className="h-screen w-full flex flex-col items-center justify-center text-center p-4 bg-gray-100 relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div
          className={`rounded-full p-6 transition-all duration-300 ${
            success ? "bg-green-500" : "bg-blue-600"
          }`}
        >
          <Fingerprint
            size={80}
            className={`text-white transition-transform duration-500 ${
              scanning ? "animate-pulse" : "scale-110"
            }`}
          />
        </div>

        <h2 className="text-2xl font-semibold mt-6">
          {scanning
            ? "Scanning your fingerprint..."
            : success
            ? "Fingerprint Verified ✓"
            : ""}
        </h2>

        <p className="text-sm mt-2 text-gray-600 max-w-[320px]">
          {scanning
            ? "Using Biometric Fingerprint SecurePay™ to verify identity, detect your location, and authorize your payment."
            : "Payment authorized successfully using SecurePay™."}
        </p>

        <p className="text-xs mt-3 text-gray-400 italic">
          Please keep your finger steady for accurate scan
        </p>

        <p className="text-sm mt-4 text-blue-500 font-semibold">
          Powered by SecurePay™ Fingerprint Authentication
        </p>
      </div>
    </div>
  );
}
