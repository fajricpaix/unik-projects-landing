import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";

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

// Extrudes the SVG emblem into a centered group; every geometry and material
// it creates is pushed onto `disposables` for the caller to clean up.
export function buildLogo(
  svg: string,
  env: THREE.Texture,
  disposables: { dispose(): void }[],
) {
  const inner = new THREE.Group();
  for (const path of new SVGLoader().parse(svg).paths) {
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
  return inner;
}
