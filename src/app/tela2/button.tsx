export default function AppButton(props: {texto:string, onClick():any}) {
    return (
        <>
            <button onClick={props.onClick}>{props.texto}</button>
        </>
    )
}