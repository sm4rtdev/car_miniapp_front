'use client';
import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

export default function ModelViewer() {
  const gltf = useGLTF('/scene.gltf'); // GLTF path inside public/

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} scale={1} />
    </Suspense>
  );
}
