"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function Waves() {
  const meshRef = useRef<THREE.Mesh>(null);
  const count = 300;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color1 = new THREE.Color("#22d3ee");
    const color2 = new THREE.Color("#3b82f6");
    const color3 = new THREE.Color("#6366f1");

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 25;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      const mixRatio = Math.random();
      const c = color3
        .clone()
        .lerp(color2, mixRatio)
        .lerp(color1, Math.random() * 0.4);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);
      posAttr.setY(
        i,
        Math.sin(x * 0.2 + time * 0.4) * 0.8 +
          Math.cos(z * 0.15 + time * 0.25) * 0.5
      );
    }
    posAttr.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.01;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  );
}

function FloatingOrb({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y =
      position[1] + Math.sin(time * speed) * 0.6;
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.z = time * 0.08;
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function OceanFloor() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const geo = meshRef.current.geometry as THREE.PlaneGeometry;
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(
        i,
        Math.sin(x * 0.4 + time * 0.15) * 0.4 +
          Math.cos(y * 0.3 + time * 0.1) * 0.3
      );
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]} receiveShadow>
      <planeGeometry args={[50, 50, 80, 80]} />
      <meshStandardMaterial
        color="#0c1230"
        roughness={0.9}
        metalness={0.2}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 100;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = Math.random() * 15 - 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return arr;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#22d3ee"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function OceanScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 14], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[8, 8, 12]} intensity={0.6} color="#22d3ee" />
        <pointLight position={[-6, -4, -8]} intensity={0.3} color="#818cf8" />
        <pointLight position={[0, -3, 5]} intensity={0.2} color="#fb7185" />
        <Waves />
        <ParticleField />
        <OceanFloor />
        <FloatingOrb position={[5, 3, -4]} color="#22d3ee" speed={1.2} />
        <FloatingOrb position={[-4, 1, -2]} color="#818cf8" speed={0.8} />
        <FloatingOrb position={[3, -2, 1]} color="#fb7185" speed={1.5} />
        <FloatingOrb position={[-6, 2, -6]} color="#34d399" speed={0.6} />
        <Environment preset="night" />
        <fog attach="fog" args={["#060a1f", 8, 35]} />
      </Canvas>
    </div>
  );
}