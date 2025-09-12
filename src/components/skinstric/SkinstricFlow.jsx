import React, { useState } from 'react';
import CodeEntry from './Intro/CodeEntry';
import CameraPermission from './Scan/CameraPermission';
import FaceScanInstructions from './Scan/FaceScanInstructions';
import FaceScan from './Scan/FaceScan';
import ScanProgress from './Scan/ScanProgress';

const SkinstricFlow = () => {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState('');
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [scanStarted, setScanStarted] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const next = () => setStep((prev) => prev + 1);

  return (
    <main className="skinstric-flow">
      {step === 0 && (
        <CodeEntry
          onSubmit={(enteredCode) => {
            setCode(enteredCode);
            next();
          }}
        />
      )}

      {step === 1 && (
        <CameraPermission
          onAllow={() => {
            setCameraAllowed(true);
            next();
          }}
        />
      )}

      {step === 2 && (
        <FaceScanInstructions
          onStart={() => {
            setScanStarted(true);
            next();
          }}
        />
      )}

      {step === 3 && (
        <FaceScan
          onComplete={() => {
            setScanComplete(true);
            next();
          }}
        />
      )}

      {step === 4 && <ScanProgress />}
    </main>
  );
};

export default SkinstricFlow;