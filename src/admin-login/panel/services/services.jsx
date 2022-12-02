import {useEffect, useState} from "react";
import {GetAPIServices, PostAPIServices} from "../../API/API";
import {API, edpoints} from "../../../API";

function Editor(props) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [field, setField] = useState(props.content)
    const [fieldDefault, setFieldDefault] = useState(props.content)

    function handleSave() {
        console.log(`${props.idA} subHead ${props.idB} ${props.keyWord}`)

        if (props.idB !== undefined) {
            console.log('!!!!!!!!!!!!!!!!!!!!!')
            const newData = [...props.services];

            newData[props.idA]["subHead"][props.idB][props.keyWord] = field;

            props.onSave(newData);
        } else {
            console.log('00000000000000000000')
            const newData = [...props.services];

            newData[props.idA][props.keyWord] = field;

            props.onSave(newData);
        }
        setIsEditMode(false);
    }

    function cancel() {
        setIsEditMode(false);

        // setField(fieldDefault);
    }


    if (isEditMode) {
        return (
            <div>
                <textarea value={field} onChange={event => setField(event.target.value)} name="edit" id="" cols="30"
                          rows="10"></textarea>
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={cancel}>Отмена</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => setIsEditMode(true)}>Редактировать</button>
            </div>
        )
    }
}

export function ServicesAPI(props) {
    const [localServices, setLocalServices] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        API.GET(endpoints.services, (p) => {
            setLocalServices(p);
            setServices(p);
        }).then();
    }, []);

    function handleSave() {
        PostAPIServices(services, setServices).then(() => alert('Данные отправлены !'));
    }

    function handleEditNameA() {
    }

    function handleEditNameB() {
    }

    function handleEditDescriptionB() {
    }

    return (
        <div>
            <button onClick={handleSave}>СОХРАНИТЬ ВСЁ</button>
            {services.map((p_a, i_a) =>
                <div>
                    <h2><Editor keyWord="name" idA={i_a} services={services} onSave={setServices}
                                content={p_a.name}/>{p_a.name}</h2>
                    <ul>{p_a.subHead.map((p_b, i_b) =>
                        <li><h3><Editor keyWord="name" idA={i_a} idB={i_b} services={services}
                                        onSave={setServices}
                                        content={p_b.name}/>{p_b.name}</h3>
                            <div><Editor keyWord="description" idA={i_a} idB={i_b} services={services}
                                         onSave={setServices}
                                         content={p_b.description}/>{p_b.description}</div>
                        </li>)}</ul>
                </div>)}
        </div>
    )
}