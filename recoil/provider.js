'use client'
import { RecoilRoot } from "recoil";

const Provider = (props) => {

    const { children } = props;

    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}

export default Provider;