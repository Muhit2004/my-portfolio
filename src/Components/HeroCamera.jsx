import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import HackerRoom from '../../../../../WebstormProjects/my-portfolio1/src/Components/HackersRoom.jsx'

const HeroCamera = (props) => {

 const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
      // rotate only the HackerRoom
    }
  })

  return (
    <group ref={groupRef} {...props}>
      <HackerRoom />
    </group>
  )
}

export default HeroCamera