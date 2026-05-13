import { Link } from "react-router-dom";
import { colors } from "../utils/colors";


export default function MyNavbar() {
  return (
    <nav
      className="sticky top-0 z-50 px-6 py-4 shadow-lg"
      style={{
        backgroundColor: colors.espresso_black,
        borderBottom: `1px solid ${colors.antique_gold}`,
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold"
          style={{ color: colors.vintage_linen }}
        >
          Old Main
        </Link>

        <div className="flex gap-6 text-sm md:text-base">
          <Link to="/" style={{ color: colors.vintage_linen }}>
            Home
          </Link>

          {/* <Link to="/about" style={{ color: colors.vintage_linen }}>
            About
          </Link> */}

          <Link to="/menu" style={{ color: colors.vintage_linen }}>
            Menu
          </Link>

          <Link to="/finedining" style={{ color: colors.vintage_linen }}>
            Fine Dining
          </Link>

          <Link to="/events" style={{ color: colors.vintage_linen }}>
            Events
          </Link>

          <Link to="/golf" style={{ color: colors.vintage_linen }}>
            Golf
          </Link>

          <Link to="/order"
            className="px-4 rounded-xl font-semibold transition"
            style={{
              backgroundColor: colors.antique_gold,
              color: colors.espresso_black,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                colors.burnished_copper;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                colors.antique_gold;
            }}
          >
            Order
          </Link>

          {/* <Link to="/contact" style={{ color: colors.vintage_linen }}>
            Contact
          </Link> */}
        </div>
      </div>
    </nav>
  );
}