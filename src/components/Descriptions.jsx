import React from 'react'
import {motion} from 'framer-motion'

const Descriptions = () => {
  return (
    <div>
    <div>ТВОЯ ОДЕЖДА</div>

      <motion.img
      width={'15%'}
      src='/img/ok.png'
      alt=''
      animate={{rotate:360}}
      transition={{
        delay:1,
        duration:2,
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: 'revercse',
        type: 'tween'  
      }}
      />

      <motion.p
      initial={{
        x:-1000,
        opacity: 0
      }}

      animate={{
        x:500,
        opacity: 1
      }}
        transition={{
        delay:1,
        duration:2,
        type: 'tween' 
      }}
    >
      Найди свой стиль
    </motion.p>

    <motion.p
      initial={{
        x:-1000,
        opacity: 0
      }}

      animate={{
        x:1000,
        opacity: 1
      }}
        transition={{
        delay:1,
        duration:2,
        type: 'tween' 
      }}
    >
      Обрети себя
    </motion.p>
    </div>
  )
}

export default Descriptions