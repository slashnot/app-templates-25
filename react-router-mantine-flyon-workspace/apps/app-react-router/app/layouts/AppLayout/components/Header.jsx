import { Form } from "react-router";

const Header = ({ hideSearch = false }) => {
    const { user, isAuthenticated } = {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "https://i.pravatar.cc/150?img=3",
        isAuthenticated: true
    };

    return (
        <header className="bg-white px-4 min-h-16 flex items-center justify-between">
            <h2>Header</h2>
        </header>
    );
};

export { Header };
export default Header;
