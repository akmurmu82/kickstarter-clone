// import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import NavStyles from "./Navbar.module.css";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

export default function Navbar() {
  let searchRef = useRef(null);
  const [isHide, setIsHide] = useState(true);

  function toggleSearchBox() {
    setIsHide(!isHide);
  }

  return (
    <>
      <nav className={NavStyles.navContainer}>
        <Box style={{ display: "flex" }}>
          <p>Discover</p> <p>Start a Project</p>
        </Box>
        <img
          src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f"
          alt="Logo"
          width="200px"
        />
        <Box className={NavStyles.searchAndAuth}>
          <Box
            ref={searchRef}
            onClick={toggleSearchBox}
            className={NavStyles.search}
          >
            <p>Search</p>
            <SearchIcon />
          </Box>
          <Box className={NavStyles.userAuth}>Login</Box>
        </Box>
      </nav>

      <Box
        style={{ display: isHide ? "none" : "flex", opacity: isHide ? 0 : 1}}
        className={NavStyles.searchBox}
      >
        <input type="text" placeholder="Search for projects or categories" />
        <IconButton
          onClick={toggleSearchBox}
          variant = 'unstyled'
          aria-label="Close button"
          icon={<CloseIcon />}
        />
      </Box>
    </>
  );
}
