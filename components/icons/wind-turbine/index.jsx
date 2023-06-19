import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'

const WindTurbine = (props) => {

    const { classes } = props;

    return (
        <FontAwesomeIcon className={classes} icon={faWind} />
    )
}

export default WindTurbine;