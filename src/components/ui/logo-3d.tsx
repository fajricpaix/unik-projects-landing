"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// Extrusion per <g id> in /logo-emblem.svg: z = where it starts, depth = thickness.
const LAYERS: Record<string, { z: number; depth: number; metal: number; rough: number }> = {
  arrow: { z: 0, depth: 16, metal: 0, rough: 0.4 },
  "u-red": { z: 0, depth: 16, metal: 0, rough: 0.5 },
  "u-gold": { z: 0, depth: 16, metal: 0.9, rough: 0.28 },
  "house-trim": { z: 4, depth: 15, metal: 0.9, rough: 0.25 },
  house: { z: 4, depth: 17, metal: 0, rough: 0.4 },
  windows: { z: 4, depth: 19, metal: 0, rough: 0.5 },
  bamboo: { z: 4, depth: 15, metal: 0.9, rough: 0.25 },
};

// The logo emblem as a real 3D object that turns toward the cursor.
export default function Logo3D({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.NeutralToneMapping;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    const key = new THREE.DirectionalLight(0xfff1d6, 1.6);
    key.position.set(-200, 300, 400);
    const rim = new THREE.PointLight(0xd92d3a, 4, 0, 0);
    rim.position.set(250, -150, -100);
    const top = new THREE.DirectionalLight(0xf0b429, 1.5);
    top.position.set(300, 400, 100);
    scene.add(key, rim, top);

    const camera = new THREE.PerspectiveCamera(30, 1, 1, 5000);
    camera.position.z = 640;

    const logo = new THREE.Group();
    scene.add(logo);
    const disposables: { dispose(): void }[] = [renderer, pmrem, env];

    let cancelled = false;
    fetch("/logo-emblem.svg")
      .then((r) => r.text())
      .then((text) => {
        if (cancelled) return;
        const inner = new THREE.Group();
        for (const path of new SVGLoader().parse(text).paths) {
          const layer = LAYERS[(path.userData?.node as Element).parentElement?.id ?? ""];
          if (!layer) continue;
          const material = new THREE.MeshPhysicalMaterial({
            color: path.color,
            metalness: layer.metal,
            roughness: layer.rough,
            // Gold is metal: it only shows color through reflections, so give it more.
            envMap: env,
            envMapIntensity: layer.metal > 0.5 ? 2.4 : 0.7,
            clearcoat: 1,
            clearcoatRoughness: 0.15,
          });
          const geometry = new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), {
            depth: layer.depth,
            bevelEnabled: true,
            bevelThickness: 1.2,
            bevelSize: 0.8,
            bevelSegments: 3,
          });
          disposables.push(material, geometry);
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.z = layer.z;
          inner.add(mesh);
        }
        // SVG is y-down; flip it and center it on the origin.
        inner.scale.y = -1;
        const center = new THREE.Box3().setFromObject(inner).getCenter(new THREE.Vector3());
        inner.position.sub(center);
        logo.add(inner);
      });

    const target = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      target.y = (e.clientX / window.innerWidth - 0.5) * 0.9;
      target.x = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    if (!still) window.addEventListener("pointermove", onPointer);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    const clock = new THREE.Clock();
    const tick = () => {
      const t = clock.getElapsedTime();
      logo.rotation.y += (target.y + (still ? -0.25 : Math.sin(t * 0.6) * 0.12) - logo.rotation.y) * 0.06;
      logo.rotation.x += (target.x - logo.rotation.x) * 0.06;
      logo.position.y = still ? 0 : Math.sin(t * 1.2) * 8;
      renderer.render(scene, camera);
    };
    // Only animate while the hero is on screen.
    const io = new IntersectionObserver(([entry]) =>
      renderer.setAnimationLoop(entry.isIntersecting ? tick : null),
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      renderer.setAnimationLoop(null);
      disposables.forEach((d) => d.dispose());
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} aria-hidden className={className} />;
}
