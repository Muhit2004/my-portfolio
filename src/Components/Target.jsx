import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Target = (props) => {
  const targetRef = useRef();
 
  const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

  useGSAP(() => {
    gsap.to(targetRef.current.position,{
      y:targetRef.current.position.y + 3,
      duration: 3,
      repeat: -3,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.5,
    })
  }
)
  return (
   <mesh {...props} ref={targetRef} rotation={[0,0.9,0]} >

    <primitive object={scene}/>
   </mesh>
  )
}

export default Target