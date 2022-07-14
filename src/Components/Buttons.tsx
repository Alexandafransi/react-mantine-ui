
import { Button } from '@mantine/core';
import {SunIcon} from "@modulz/radix-icons";
import {useState} from "react";

export const Buttons = () => {
    const [loading, setLoading] = useState(false)
    const handleClick = () => {
      setLoading(true)
    }
    return (
        <div className="App">
            hellow from Tanzania

          <br/>
            <Button leftIcon={<SunIcon />} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
            <Button loading={loading} onClick={handleClick} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>LoaderButton</Button>
            <Button component="a" href="https://www.oceanwareltd.co.tz" target="_blank" variant="gradient"  gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Oceanware Link</Button>
            <Button styles={(theme)=>({
                root: {
                    border: 0,
                    // height: 500,
                    paddingRight:69,
                    '&: hover': {
                        paddingLeft: 100
                    }
                }
            })} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
            <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>

        </div>
    )
}