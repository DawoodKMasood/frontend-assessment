import { motion } from "framer-motion"

import Title from "../title";
import Cross from "@/components/icons/cross";
import Button from "../button";

const variants = {
    open: { 
        width: 300,
        opacity: 1,
    },
    closed: { 
        width: 0,
        opacity: 0,
    },
}

const Sidebar = (props) => {

    const {visibility, setVisibility, children} = props;

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    return (
        <motion.aside
        animate={visibility ? "open" : "closed"}
        className="w-[300px] bg-slate-50 border-l"
        variants={variants}
        >
            <div className="mx-6 my-10">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <Title title="Add Topic" />
                        <Button onClick={() => toggleVisibility()}>
                            <Cross className="w-4 h-4" />
                        </Button>
                    </div>
                    { children }
                </div>
            </div>
        </motion.aside>
    )
}

export default Sidebar;