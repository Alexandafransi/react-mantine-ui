import {Chip, Chips } from "@mantine/core"
import {useEffect, useState} from "react";

export const ChipsExample = () => {
    const [value, setValue] = useState(['react']);
   useEffect(()=>{
       console.log(value)
   })
  return (
      <div>
         <Chips value={value} color="orange" onChange={setValue} multiple>
             <Chip value="react"> React</Chip>
             <Chip value="ng"> Angular</Chip>
             <Chip value="vue"> Vue</Chip>
             <Chip value="next"> NextJs</Chip>
         </Chips>
      </div>
  )
}