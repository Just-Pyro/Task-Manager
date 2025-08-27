import taskManagerLogo from "../Assets/login.png";

export default function ApplicationLogo(props) {
    return (
        <>
            <img src={taskManagerLogo} className={props.className} />
        </>
    );
}
