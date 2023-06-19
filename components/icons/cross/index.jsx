import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Cross = (props) => {
    const { classes } = props;

    return (
        <FontAwesomeIcon className={classes} icon={faX} />
    )
}

export default Cross;