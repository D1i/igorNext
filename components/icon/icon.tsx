import {icons} from './icons';

export function Icon(props: {name: string}) {
    const {name} = props;

    // @ts-ignore
    return (
        <div>
            {icons[name]}
        </div>
    )
}