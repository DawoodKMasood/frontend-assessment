import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const ChevronLeft = (props) => {

    const { classes } = props;

    return (
        <FontAwesomeIcon className={classes} icon={faChevronLeft} />
    )
}

export default ChevronLeft;