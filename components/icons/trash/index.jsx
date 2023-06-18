import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Trash = (props) => {

    const { classes } = props;

    return (
        <FontAwesomeIcon className={classes} icon={faTrash} />
    )
}

export default Trash;