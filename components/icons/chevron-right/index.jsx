import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ChevronRight = (props) => {
    const { classes } = props;

    return (
        <FontAwesomeIcon className={classes} icon={faChevronRight} />
    )
}

export default ChevronRight;