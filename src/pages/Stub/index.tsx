import MsgIcon from "../../app/icons/MsgIcon.png";
import {Link} from "react-router-dom";

function StubPage() {
    return (
        <>
            <p>По моему ты еще не зареган</p>
            <Link to="/register">
                <button>Я уже бегу</button>
            </Link>

        </>
    );
}
export default StubPage;