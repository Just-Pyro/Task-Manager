import taskManagerLogo from "../Assets/task-management.png";

export default function ApplicationLogo(props) {
    return <img src={taskManagerLogo} className={props.className} />;
}
