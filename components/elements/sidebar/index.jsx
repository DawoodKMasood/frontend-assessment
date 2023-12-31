import { motion } from "framer-motion";

import Title from "../title";
import Cross from "@/components/icons/cross";

const variants = {
  open: {
    width: 300,
    opacity: 1,
  },
  closed: {
    width: 0,
    opacity: 0,
  },
};

const Sidebar = (props) => {
  const { visibility, setVisibility, hideX, title, children } = props;

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <motion.aside
      animate={visibility ? "open" : "closed"}
      className="bg-slate-50 border-l"
      variants={variants}
      initial={{
        width: visibility ? 300 : 0,
      }}
    >
      <div className="mx-6 my-10">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <Title title={title} />
            {!hideX && (
              <div
                className="hover:cursor-pointer"
                onClick={() => toggleVisibility()}
              >
                <Cross classes="w-4 h-4" />
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;