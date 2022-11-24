import {icons} from './icons';

export function Icon(props: {name: string}) {
    const {name} = props;

    return (
        <div>
            {icons[name]}
        </div>
    )
}