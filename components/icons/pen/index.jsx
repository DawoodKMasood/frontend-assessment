import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const Pen = (props) => {

    const { classes } = props;

    return (
        <FontAwesomeIcon className={classes} icon={faPen} />
    )
}

export default Pen;