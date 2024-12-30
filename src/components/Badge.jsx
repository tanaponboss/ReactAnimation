import {motion} from 'framer-motion';

export default function Badge({ caption }) {
  return <motion.span animate={{scale:[1,1.2,1]}} transition={{duration:0.3}} className="badge">{caption}</motion.span>;
}
//this animation will only trigger if you add key to parent element of Badge in ChallengeTabs.jsx
//this is because key is used to identify the element and if it changes, the element will be re-rendered and the animation will trigger