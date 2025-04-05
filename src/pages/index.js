'use client';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), { ssr: false });

export default function Home() {
  return (
    <main style={{ height: '100vh', margin: 0 }}>
      <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 7.5]} intensity={1} />
        <Environment preset="sunset" />
        <OrbitControls />
        <ModelViewer />
      </Canvas>
    </main>
  );
}
