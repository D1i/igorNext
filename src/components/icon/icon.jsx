import {icons} from './icons';

export function Icon(props) {
    const {name} = props;

    return (
        <div>
            {icons[name]}
        </div>
    )
}