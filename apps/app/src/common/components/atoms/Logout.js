import { Link } from "react-router-dom";

export default function Logout({ to, onClick }) {
  return (
    <Link to={to} title="Logout">
      <svg width="30" height="30" viewBox="0 0 24 24" onClick={onClick}>
        <path d="M8 10v-5l8 7-8 7v-5h-8v-4h8zm2-8v2h12v16h-12v2h14v-20h-14z" />
      </svg>
    </Link>
  );
}

Logout.defaultProps = {
  to: "/",
  onClick: () => {},
};
